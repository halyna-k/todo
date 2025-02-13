import express from 'express';
import { createTask, deleteTask, getTasks, searchTasks, updateTaskStatus } from './tasks';
import { authenticateUser } from '../middleware/auth';

const router = express.Router();

router.post('/', authenticateUser, createTask);
router.get('/', getTasks);
router.get('/search', authenticateUser, searchTasks);
router.patch('/:id/status', authenticateUser, updateTaskStatus);
router.delete('/:id', authenticateUser, deleteTask);

export default router;
