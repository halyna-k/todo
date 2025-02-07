import { Request, Response } from 'express';
import pool from '../../db';

const getTasks = async (req: Request, res: Response) => {
  try {
    // make the request to get all tasks
    const tasks = await pool.query(
      'SELECT * FROM tasks ORDER BY deadline ASC'
    );
    // respond tha data with all tasks
    res.json(tasks.rows);
  } catch (err) {
    // log error and send server error response
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export default getTasks;
