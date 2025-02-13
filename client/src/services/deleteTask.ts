import axios from 'axios';

export const deleteTask = async (taskId: string, token: string): Promise<void> => {
  await axios.delete(`${import.meta.env.VITE_API_URL}/tasks/${taskId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default deleteTask;
