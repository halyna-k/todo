import { useMutation, useQueryClient } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import updateTaskStatus from "../services/updateTaskStatus";
import { TaskProps } from "../types/taskTypes";

const useUpdateTaskStatus = () => {
  const { getAccessTokenSilently, user } = useAuth0();
  const queryClient = useQueryClient();

  const mutation = useMutation<
    TaskProps,
    Error,
    { taskId: number; status: "TODO" | "IN PROGRESS" | "COMPLETED" }
  >(
    async ({ taskId, status }) => {
      if (!user) {
        throw new Error("User is not authenticated");
      }
      const token = await getAccessTokenSilently();
      return updateTaskStatus(taskId, status, token);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("tasks");
      },
      onError: (error: unknown) => {
        const err = error as { response?: { status?: number } };

        if (err.response?.status === 404) {
          console.warn("Task not found.");
        } else if (err.response?.status === 403) {
          console.warn("You are not allowed to update this task.");
        } else {
          console.error("Error updating task status:", error);
        }
      },
    }
  );

  return mutation;
};

export default useUpdateTaskStatus;
