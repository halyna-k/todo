import { Request, Response } from "express";
import pool from "../../db";

const updateTask = async (req: Request, res: Response): Promise<void> => {
  const { title, description, status, deadline } = req.body;
  const taskId = req.params.id;
  const userId = (req as any).authUser?.user_id;

  // Check if user_id is present
  if (!userId) {
    res.status(400).send("User ID is required");
    return;
  }

  try {
    // Check if the task exists
    const task = await pool.query("SELECT * FROM tasks WHERE id = $1", [taskId]);

    // Handle case where the task does not exist
    if (task.rows.length === 0) {
      res.status(404).json({ message: "Task not found" });
      return;
    }

    // Check if the task belongs to the user
    if (task.rows[0].user_id !== userId) {
      res.status(403).json({ message: "You are not allowed to update this task" });
      return;
    }

    // Prepare dynamic update fields
    const updates: string[] = [];
    const values: any[] = [];

    if (title !== undefined) {
      updates.push("title = $" + (values.length + 1));
      values.push(title);
    }
    if (description !== undefined) {
      updates.push("description = $" + (values.length + 1));
      values.push(description);
    }
    if (status !== undefined) {
      const validStatuses = ["TODO", "IN PROGRESS", "COMPLETED"];
      if (!validStatuses.includes(status)) {
        res.status(400).send("Invalid status");
        return;
      }
      updates.push("status = $" + (values.length + 1));
      values.push(status);
    }
    if (deadline !== undefined) {
      updates.push("deadline = $" + (values.length + 1));
      values.push(deadline);
    }

    // If there are no fields to update, return early
    if (updates.length === 0) {
      res.status(400).json({ message: "No fields to update" });
      return;
    }

    // Add updated_at timestamp
    updates.push("updated_at = CURRENT_TIMESTAMP");

    // Execute the dynamic query
    const query = `UPDATE tasks SET ${updates.join(", ")} WHERE id = $${values.length + 1} RETURNING *`;
    values.push(taskId);

    const updatedTask = await pool.query(query, values);

    // Respond with a success message
    res.status(200).json(updatedTask.rows[0]);
  } catch (err) {
    // Handle any database errors
    console.error("Error updating task:", err);
    res.status(500).send("Server error");
  }
};

export default updateTask;
