import { useMutation, useQueryClient } from 'react-query';
import { useAuth0 } from '@auth0/auth0-react';
import createTask from '../services/createTask';
import { TaskProps, TaskDataProps } from '../types/taskTypes';

const useCreateTask = () => {
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  return useMutation<TaskProps, Error, TaskDataProps>(
    async (taskData) => {
      const token = await getAccessTokenSilently();
      return createTask(taskData, token);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('tasks');
      },
      onError: (error) => {
        console.error('Error creating task:', error);
      },
    }
  );
};

export default useCreateTask;
