import { useMutation } from 'react-query';
import createTask from '../services/createTask';
import { TaskDataProps, TaskProps } from '../types/taskTypes';

const useCreateTask = () => {
  return useMutation<TaskProps, Error, TaskDataProps>(createTask, {
    onError: (error) => {
      console.error('Error creating task:', error);
    },
    onSuccess: (data) => {
      console.log('Task created successfully:', data);
    },
  });
};

export default useCreateTask;
