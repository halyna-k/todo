import axios from 'axios';
import { TaskProps } from '../types/taskTypes';

const getTasks = async (): Promise<TaskProps[]> => {
  const response = await axios.get('/tasks');
  return response.data;
};

export default getTasks;
