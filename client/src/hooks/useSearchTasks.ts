import { useQuery } from 'react-query';
import { useAuth0 } from '@auth0/auth0-react';
import searchTasks from '../services/searchTasks';
import { TaskProps } from '../types/taskTypes';

const useSearchTasks = (query: string) => {
  const { getAccessTokenSilently } = useAuth0();

  return useQuery<TaskProps[], Error>(
    ['searchTasks', query],
    async () => {
      const token = await getAccessTokenSilently();
      return searchTasks(query, token);
    },
    {
      enabled: !!query,
      onError: (error) => {
        console.error('Error searching tasks:', error);
      },
      initialData: [],
    }
  );
};

export default useSearchTasks;
