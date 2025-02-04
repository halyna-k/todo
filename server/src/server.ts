import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import tasksRoutes from "./controllers/tasksRoutes";
import { authenticateUser } from './middleware/auth';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/tasks', authenticateUser, tasksRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
