import { Request, Response } from 'express';
import pool from '../../db';

const createTask = async (req: Request, res: Response): Promise<void> => {
  const { title, description, deadline } = req.body;
  const userId = (req as any).authUser?.user_id;

  // Check if userId is available in the request
  if (!userId) {
    res.status(401).json({ error: "Unauthorized: User ID not found" });
    return;
  }

  // Validate that all required fields are provided
  if (!title || !description || !deadline) {
    res.status(400).json({ error: "Missing required fields: title, description, or deadline" });
    return;
  }

  try {
    // Insert a new task into the database
    const newTask = await pool.query(
      `INSERT INTO tasks (user_id, title, description, deadline, status)
       VALUES ($1, $2, $3, $4, 'TODO') RETURNING *`,
      [userId, title, description, deadline]
    );

    // Respond with the created task
    res.status(201).json(newTask.rows[0]);
  } catch (err) {
    // Handle database error
    console.error("Database Error:", err);
    res.status(500).send('Server Error');
  }
};

export default createTask;
