import axios from 'axios';
import { TaskProps } from '../types/taskTypes';

export const getTasks = async (token: string): Promise<TaskProps[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/tasks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};


export default getTasks;
