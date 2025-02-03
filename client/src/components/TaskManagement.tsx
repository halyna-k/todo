import React, { useState } from 'react';
import { CirclePlusIcon} from 'lucide-react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import { TaskManagementProps, TaskProps } from '../types/taskTypes';

const TaskManagement: React.FC<TaskManagementProps> = ({ tasks }) => {
  const [filteredTasks, setFilteredTasks] = useState<TaskProps[]>(tasks);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const handleAddTask = () => {
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  const handleAddNewTask = (newTask: TaskProps) => {
    setFilteredTasks((prevTasks) => [...prevTasks, newTask]);
    setIsFormOpen(false);
  };

  return (
    <div className='relative'>
      {isFormOpen ?
        <TaskForm
          onSubmit={handleAddNewTask}
          onClose={handleFormClose}
          isVisible={isFormOpen}
        /> :
        <button
          onClick={handleAddTask}
          className="absolute right-1 bottom-0 rounded-4xl bg-cyan-300 text-white shadow-xs hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600" >
          <CirclePlusIcon size={50} />
        </button>}

      <TaskList tasks={tasks || filteredTasks} />
    </div>
  );
};

export default TaskManagement;
