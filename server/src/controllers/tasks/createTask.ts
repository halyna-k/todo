import { Request, Response } from 'express';
import pool from '../../db';

const createTask = async (req: Request, res: Response): Promise<void> => {
  const { title, description, deadline } = req.body;
  const userId = (req as any).authUser?.user_id;

  if (!userId) {
    res.status(401).json({ error: "Unauthorized: User ID not found" });
    return
  }

  if (!title || !description || !deadline) {
    res.status(400).json({ error: "Missing required fields: title, description, or deadline" });
    return
  }

  try {
    const newTask = await pool.query(
      `INSERT INTO tasks (user_id, title, description, deadline, status)
       VALUES ($1, $2, $3, $4, 'TODO') RETURNING *`,
      [userId, title, description, deadline]
    );

    res.status(201).json(newTask.rows[0]);
  } catch (err) {
    console.error("Database Error:", err);
    res.status(500).send('Server Error');
  }
};

export default createTask;
