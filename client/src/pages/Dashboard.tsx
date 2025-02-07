import { useEffect, useState } from "react";
import { Container, Spinner, TaskManagement } from "../components";
import useGetTasks from "../hooks/useGetTasks";
import { TaskProps } from "../types/taskTypes";

const Dashboard: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  const { data: tasks, isLoading, isError, error } = useGetTasks();
  const [filteredTasks, setFilteredTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    if (!tasks) return;

    const filtered = searchQuery.trim()
      ? tasks.filter((task) =>
          task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : tasks;

    setFilteredTasks(filtered);
  }, [searchQuery, tasks]);

  if (isLoading) return <Spinner />;
  if (isError) return <div>{`Error fetching tasks: ${error instanceof Error ? error.message : "Unknown error"}`}</div>;
  if (!filteredTasks.length) return <div>No tasks found</div>;
  
  return (
    <Container>
      <TaskManagement tasks={filteredTasks} />
    </Container>
  );
};

export default Dashboard;
