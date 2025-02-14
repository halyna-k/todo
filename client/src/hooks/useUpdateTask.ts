import { useMutation, useQueryClient } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import updateTask from "../services/updateTask";
import { TaskDataProps, TaskProps } from "../types/taskTypes";

interface UpdateTaskParams {
  taskId: string;
  updatedFields: Partial<TaskDataProps>;
}

const useUpdateTask = () => {
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const mutation = useMutation<TaskProps, Error, UpdateTaskParams>(
    async ({ taskId, updatedFields }) => {
      const token = await getAccessTokenSilently();
      return updateTask({ taskId, token, updatedFields });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("tasks");
      },
      onError: (error) => {
        console.error("Error updating task:", error);
      },
    }
  );

  return mutation;
};

export default useUpdateTask;
