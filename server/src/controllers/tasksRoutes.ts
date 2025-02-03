import express from 'express';
import { createTask} from './tasks';

const router = express.Router();

router.post('/', createTask);

export default router;
