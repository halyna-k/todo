import axios from 'axios';
import { TaskProps } from '../types/taskTypes';

export const searchTasks = async (query: string, token: string): Promise<TaskProps[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/tasks/search`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { q: query },
  });
  return response.data;
};

export default searchTasks;
