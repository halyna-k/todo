import { Request, Response } from "express";
import pool from "../../db";

const updateTaskStatus = async (req: Request, res: Response): Promise<void> => {
  const { status } = req.body;
  const taskId = req.params.id;
  const userId = (req as any).authUser?.user_id;

  // Check if user_id is present
  if (!userId) {
    res.status(400).send("User ID is required");
    return;
  }

  // Check if the provided status is valid
  const validStatuses = ["TODO", "IN PROGRESS", "COMPLETED"];
  if (!validStatuses.includes(status)) {
    res.status(400).send("Invalid status");
    return;
  }

  try {
    // Check if the task exists
    const task = await pool.query("SELECT * FROM tasks WHERE id = $1", [taskId]);

    if (task.rows.length === 0) {
      res.status(404).json({ message: "Task not found" });
      return;
    }

    // Check if the task belongs to the correct user
    if (task.rows[0].user_id !== userId) {
      res.status(403).json({ message: "You are not allowed to update this task" });
      return;
    }

    // Update the status of the task and set the current timestamp
    const updatedTask= await pool.query(
      "UPDATE tasks SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *",
      [status, taskId]
    );

    // Respond with the updated task data
    res.status(200).json(updatedTask.rows[0]);
  } catch (err) {
    // Handle database error
    console.error("Error updating task status:", err);
    res.status(500).send("Server error");
  }
};

export default updateTaskStatus;
