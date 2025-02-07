import { Request, Response } from 'express';
import pool from '../../db';

const searchTasks = async (req: Request, res: Response): Promise<void> => {
  const userId = (req as any).authUser?.user_id;
  const searchQuery = req.query.q;

  if (!userId) {
    res.status(400).send({ message: 'User ID is required' });
    return;
  }

  try {
    let query = 'SELECT * FROM tasks WHERE user_id = $1';
    let params = [userId];

    if (searchQuery) {
      query += ' AND (title ILIKE $2 OR description ILIKE $2)';
      params.push(`%${searchQuery}%`);
    }

    const result = await pool.query(query, params);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).send({ message: 'Error fetching tasks' });
  }
};

export default searchTasks;

// import { Request, Response } from 'express';
// import pool from '../../db';

// const searchTasks = async (req: Request, res: Response): Promise<void> => {
//   const userId = (req as any).authUser?.user_id;

//   if (!userId) {
//     res.status(400).send({ message: 'User ID is required' });
//     return
//   }

//   try {
//     // query tasks from the database based on user_id
//     const result = await pool.query(
//       'SELECT * FROM tasks WHERE user_id = $1',
//       [userId]
//     );

//     // send the tasks as a response
//     res.status(200).json(result.rows);
//   } catch (error) {
//     console.error('Error fetching tasks:', error);
//     res.status(500).send({ message: 'Error fetching tasks' });
//   }
// };

// export default searchTasks;
