import express from 'express';
import { createTask, getTasks, searchTasks } from './tasks';
import { authenticateUser } from '../middleware/auth';

const router = express.Router();

router.post('/', authenticateUser, createTask);
router.get('/', getTasks);
router.get('/search', authenticateUser, searchTasks);

export default router;
