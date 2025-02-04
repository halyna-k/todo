import { useQuery } from 'react-query';
import getTasks from '../services/getTasks';
import { TaskProps } from '../types/taskTypes';

const useGetTasks = () => {
  return useQuery<TaskProps[], Error>('tasks', getTasks, {
    onError: (error) => {
      console.error('Error fetching tasks:', error);
    },
  });
};

export default useGetTasks;
