import { Request, Response } from 'express';
import pool from '../../db';

const createTask = async (req: Request, res: Response): Promise<void> => {
  const { title, description, deadline } = req.body;
   const userId = req.body.user_id; 

  // check for User ID
  if (!userId) {
    res.status(400).json({ error: "User ID not found" });
  }

  // check for missing required fields
  if (!title || !description || !deadline) {
    res.status(400).json({ error: "Missing required fields: title, description, or deadline" });
  }

  try {
    // insert the new task into the database and return the created task
    const newTask = await pool.query(
      `INSERT INTO tasks (title, description, deadline, status)
       VALUES ($1, $2, $3, $4,'TODO') RETURNING *`,
      [[userId], title, description, deadline]
    );

    // send the created task as a response
    res.status(201).json(newTask.rows[0]);
  } catch (err) {
    // log any database errors and send a server error response
    console.error("Database Error:", err);
    res.status(500).send('Server Error');
  }
};

export default createTask;
