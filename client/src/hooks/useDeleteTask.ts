import { useMutation, useQueryClient } from 'react-query';
import { useAuth0 } from '@auth0/auth0-react';
import deleteTask from '../services/deleteTask';

const useDeleteTask = () => {
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const mutation = useMutation<void, Error, string>(
    async (taskId) => {
      const token = await getAccessTokenSilently();
      await deleteTask(taskId, token);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('tasks');
      },
      onError: (error) => {
        console.error('Error deleting task:', error);
      },
    }
  );

  return mutation;
};

export default useDeleteTask;
