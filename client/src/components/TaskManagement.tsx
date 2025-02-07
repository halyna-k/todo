import React, { useEffect, useState } from 'react';
import { CirclePlusIcon } from 'lucide-react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import { TaskManagementProps, TaskProps } from '../types/taskTypes';
import useCreateTask from '../hooks/useCreateTask';

const TaskManagement: React.FC<TaskManagementProps> = ({ tasks }) => {
  const [filteredTasks, setFilteredTasks] = useState<TaskProps[]>(tasks);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const { mutate: createTaskMutation } = useCreateTask();

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  const handleAddTask = () => {
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  const handleAddNewTask = (newTask: TaskProps) => {
    createTaskMutation(newTask, {
      onSuccess: (createdTask) => {
        setFilteredTasks((prevTasks) => {
        const updatedTasks = [...prevTasks, createdTask];
        return updatedTasks;
      });
        setIsFormOpen(false);
      },
    });
  };

  return (
    <div className='relative'>
      {isFormOpen ? (
        <TaskForm
          onSubmit={handleAddNewTask}
          onClose={handleFormClose}
        />
      ) : (
        <button
          onClick={handleAddTask}
          className="absolute right-0 bottom-0 rounded-4xl bg-cyan-200 text-white shadow-xs hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
        >
          <CirclePlusIcon size={50} />
        </button>
      )}

      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default TaskManagement;
