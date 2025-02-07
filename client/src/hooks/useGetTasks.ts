import { useQuery } from 'react-query';
import { useAuth0 } from '@auth0/auth0-react';
import getTasks from '../services/getTasks';
import { TaskProps } from '../types/taskTypes';

const useGetTasks = () => {
   const { getAccessTokenSilently } = useAuth0();

  return useQuery<TaskProps[]>({
    queryKey: ['tasks'],
    queryFn: async () => {
      const token = await getAccessTokenSilently();
      return getTasks(token);
    },
    enabled: !!getAccessTokenSilently,
  });
};

export default useGetTasks;
