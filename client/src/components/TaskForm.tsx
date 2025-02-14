import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';
import { formatToDateInput } from '../utils/dateUtils';
import { TaskFormProps, TaskProps } from '../types/taskTypes';

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, onClose, taskData}) => {
  const initialData = { id: 0, title: "", description: "", deadline: "", status: "TODO" };
  const [taskDataState, setTaskDataState] = useState<TaskProps>(taskData?.initialData || initialData);
  const [minDate, setMinDate] = useState<string>("");
  const today = new Date().toISOString().split('T')[0];
  const formattedDate = taskDataState.deadline ? formatToDateInput(taskDataState.deadline) : today;

  useEffect(() => {
    setMinDate(today);
  }, [today]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTaskDataState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit({
      ...taskDataState,
      status: 'TODO',
    });
    setTaskDataState(initialData);
  };

  return (
    <div className={`fixed inset-0 bg-gray-500/75 flex justify-center items-center`}>
      <div className="relative bg-white border-2 border-cyan-100 cursor-auto rounded-4xl shadow-md max-w-full w-96 lg:w-1/3 p-8 mb-3 hover:shadow-lg">
        <button onClick={onClose} className="absolute cursor-pointer top-7 right-7 text-gray-500 hover:text-gray-700 text-4xl">
          <X size={20} />
        </button>
        <h3 className="text-xl font-medium ml-2 mb-2 text-cyan-600">{taskDataState.id ? 'Edit Task' : 'Enter your task'}</h3>

        <input
          type="text"
          name="title"
          value={taskDataState.title}
          onChange={handleChange}
          placeholder="Title"
          className="mt-2 px-4 py-2 border border-cyan-200 text-md rounded-xl w-full"
        />
        <textarea
          name="description"
          value={taskDataState.description}
          onChange={handleChange}
          placeholder="Description"
          className="mt-2 px-4 py-2 border border-cyan-200 text-md rounded-xl w-full h-32"
        />

        <div className="mt-4 relative">
          <label htmlFor="deadline" className="block text-gray-400 text-md ml-2 mb-1 ">Deadline</label>
          <input
            type="date"
            name="deadline"
            lang="en"
            min={minDate}
            value={formattedDate}
            onChange={handleChange}
            className="px-4 py-2 border border-cyan-200 text-gray-700 text-md rounded-xl w-full"
          />
        </div>

        <div className="flex justify-end mt-4">
          <Button onClick={handleSubmit} content={taskDataState.id ? 'Update' : 'Create'} />
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
