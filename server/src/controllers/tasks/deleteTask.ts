import { Request, Response } from 'express';
import pool from '../../db';

const deleteTask = async (req: Request, res: Response): Promise<void> => {
  const taskId = req.params.id;
  const userId = (req as any).authUser?.user_id;

  // Check if the user is authenticated
  if (!userId) {
    res.status(401).json({ error: "Unauthorized: User ID not found" });
    return;
  }

  try {
    // Verify if the task exists and belongs to the authenticated user
    const task = await pool.query(
      "SELECT * FROM tasks WHERE id = $1 AND user_id = $2",
      [taskId, userId]
    );

    // Handle case where the task does not exist or belongs to another user
    if (task.rows.length === 0) {
      res.status(404).json({ error: "Task not found or does not belong to the user" });
      return;
    }

    // Ensure the task is in the 'TODO' state before allowing deletion
    if (task.rows[0].status !== "TODO") {
      res.status(403).json({ error: "Only tasks in the TODO state can be deleted" });
      return;
    }

    // Delete the task from the database
    await pool.query("DELETE FROM tasks WHERE id = $1", [taskId]);

    // Respond with a success message
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    // Handle any database errors
    console.error("Database error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

export default deleteTask;
