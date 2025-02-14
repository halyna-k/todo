import axios from "axios";
import { TaskDataProps, TaskProps } from "../types/taskTypes";

interface UpdateTaskParams {
  taskId: string;
  token: string;
  updatedFields: Partial<TaskDataProps>;
}

export const updateTask = async ({ taskId, token, updatedFields }: UpdateTaskParams): Promise<TaskProps> => {
  const response = await axios.patch(`${import.meta.env.VITE_API_URL}/tasks/${taskId}`, updatedFields, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export default updateTask;
