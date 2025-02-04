import axios from 'axios';
import { TaskProps } from '../types/taskTypes';

const searchTasks = async (query: string): Promise<TaskProps[]> => {
  const response = await axios.get(`/tasks/search?q=${query}`);
  return response.data;
};

export default searchTasks;
