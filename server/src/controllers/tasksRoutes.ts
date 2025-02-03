import express from 'express';
import { createTask, getTasks, searchTasks } from './tasks';

const router = express.Router();

router.post('/', createTask);
router.get('/', getTasks);
router.get('/search', searchTasks);

export default router;
