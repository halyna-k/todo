import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import tasksRoutes from "./controllers/tasksRoutes";
import { checkJwt } from './middleware/auth';

// Load environment variables from the .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Use CORS for cross-origin requests
app.use(cors());

// Parse incoming request bodies in JSON format
app.use(bodyParser.json());

// Parse URL-encoded data with the extended option
app.use(bodyParser.urlencoded({
  extended: true
}));

// Apply the JWT verification middleware before accessing '/tasks' routes
app.use('/tasks', checkJwt, tasksRoutes);

// Start the server on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
