import { Request, Response } from 'express';
import pool from '../../db';

const searchTasks = async (req: Request, res: Response): Promise<void> => {
  const userId = (req as any).authUser?.user_id;
  const searchQuery = req.query.q;

  // Check if userId is available in the request
  if (!userId) {
    res.status(400).send({ message: 'User ID is required' });
    return;
  }

  try {
    // Build query to select tasks for the given user
    let query = 'SELECT * FROM tasks WHERE user_id = $1';
    let params = [userId];

    // If search query is provided, filter tasks by title or description
    if (searchQuery) {
      query += ' AND (title ILIKE $2 OR description ILIKE $2)';
      params.push(`%${searchQuery}%`);
    }

    // Execute the query with parameters
    const result = await pool.query(query, params);

    // Respond with the search tasks
    res.status(200).json(result.rows);
  } catch (error) {
    // Handle database error
    console.error('Error fetching tasks:', error);
    res.status(500).send({ message: 'Error fetching tasks' });
  }
};

export default searchTasks;
