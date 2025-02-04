import axios from 'axios';
import { TaskProps, TaskDataProps } from '../types/taskTypes';

const createTask = async (taskData: TaskDataProps): Promise<TaskProps> => {
  const response = await axios.post('/tasks', taskData);
  return response.data;
};

export default createTask;
