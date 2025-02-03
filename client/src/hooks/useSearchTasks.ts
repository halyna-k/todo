import { useQuery } from 'react-query';
import searchTasks from '../services/searchTasks';
import { TaskProps } from '../types/taskTypes';

const useSearchTasks = (query: string) => {
  return useQuery<TaskProps[], Error>(['searchTasks', query], () => searchTasks(query), {
    enabled: !!query,
    onError: (error) => {
      console.error('Error searching tasks:', error);
    },
  });
};

export default useSearchTasks;
