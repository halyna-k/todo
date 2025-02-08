import axios from 'axios';
import { TaskProps } from '../types/taskTypes';

export const updateTaskStatus = async (
  taskId: number,
  status: 'TODO' | 'IN PROGRESS' | 'COMPLETED',
  token: string
): Promise<TaskProps> => {
  const response = await axios.patch(
    `${import.meta.env.VITE_API_URL}/tasks/${taskId}/status`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export default updateTaskStatus;
