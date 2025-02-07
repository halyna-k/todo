import axios from 'axios';
import { TaskProps, TaskDataProps } from '../types/taskTypes';

export const createTask = async (taskData: TaskDataProps, token: string): Promise<TaskProps> => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/tasks`,
    taskData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export default createTask;
