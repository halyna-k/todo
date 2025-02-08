import express from 'express';
import { createTask, getTasks, searchTasks, updateTaskStatus } from './tasks';
import { authenticateUser } from '../middleware/auth';

const router = express.Router();

router.post('/', authenticateUser, createTask);
router.get('/', getTasks);
router.get('/search', authenticateUser, searchTasks);
router.patch("/status", authenticateUser, updateTaskStatus);

export default router;
