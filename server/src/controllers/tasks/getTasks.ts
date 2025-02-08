import { Request, Response } from 'express';
import pool from '../../db';

const getTasks = async (req: Request, res: Response) => {
  try {
    // Make the request to get all tasks ordered by deadline
    const tasks = await pool.query(
      'SELECT * FROM tasks ORDER BY deadline ASC'
    );

    // Respond with the data containing all tasks
    res.json(tasks.rows);
  } catch (err) {
    // Log error and send server error response
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export default getTasks;
