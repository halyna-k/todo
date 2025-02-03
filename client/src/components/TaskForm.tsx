import React, { useState } from 'react';
import { TaskFormProps } from '../types/taskTypes';
import '../styles/taskForm.css'
import { Button } from './Button';


const TaskForm: React.FC<TaskFormProps> = (props) => {
  const { initialData = { title: '', description: '', deadline: '', status: 'TODO' }, onSubmit, onClose, isVisible } = props;
  const [taskData, setTaskData] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTaskData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit({ ...taskData, status: 'TODO' });
    setTaskData({ title: '', description: '', deadline: '', status: 'TODO' });
    onClose
  };


  return (
    <div className={`fixed inset-0 bg-gray-500/75 flex justify-center items-center ${isVisible ? 'fade-in' : 'fade-out'}`}>
      <div className="relative bg-white p-8 rounded-xl shadow-md max-w-full w-96 lg:w-1/3 xl:w-1/4">
        <button onClick={onClose} className="absolute top-5 right-7 text-gray-500 hover:text-gray-700 text-2xl">
          &times;
        </button>
        <h3 className="text-lg font-medium mb-4">Enter your task</h3>

        <input
          type="text"
          name="title"
          value={taskData.title}
          onChange={handleChange}
          placeholder="Title"
          className="mt-2 p-2 border border-gray-300 text-sm rounded-xl w-full"
        />
        <textarea
          name="description"
          value={taskData.description}
          onChange={handleChange}
          placeholder="Description"
          className="mt-2 p-2 border border-gray-300 text-sm rounded-xl w-full"
        />

        <div className="mt-4">
          <label htmlFor="deadline" className="block text-sm ml-2 mb-1 text-gray-400">Deadline</label>
          {/* <p className="text-xs text-gray-500 mb-2">Choose a date for the task deadline.</p> */}
          <input
            type="date"
            name="deadline"
            value={taskData.deadline}
            onChange={handleChange}
            className="p-2 border border-gray-300 text-grey-400 text-sm rounded-xl w-full"
          />
        </div>

        <div className="flex justify-end mt-4">
          <Button onClick={handleSubmit} content="Create" />
        </div>
      </div>
    </div>
  );
};

export default TaskForm;

// import React, { useState } from 'react';
// import { TaskFormProps } from '../types/taskTypes';

// const TaskForm: React.FC<TaskFormProps> = ({ initialData = { title: '', description: '', deadline: '', status: 'TODO' }, onSubmit, onClose }) => {
//   const [taskData, setTaskData] = useState(initialData);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setTaskData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     onSubmit({ ...taskData, status: 'TODO' });
//     setTaskData({ title: '', description: '', deadline: '', status: 'TODO' });
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-500/75 flex justify-center items-center">
//       <div className="relative bg-white p-8 rounded-xl shadow-md max-w-full w-96 lg:w-1/3 xl:w-1/4">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
//         >
//           &times;
//         </button>
//         <h3 className="text-lg font-medium mb-4">Enter your task</h3>

//         <input
//           type="text"
//           name="title"
//           value={taskData.title}
//           onChange={handleChange}
//           placeholder="Enter title"
//           className="mt-2 p-2 border border-gray-300 rounded-xl w-full"
//         />
//         <textarea
//           name="description"
//           value={taskData.description}
//           onChange={handleChange}
//           placeholder="Enter description"
//           className="mt-2 p-2 border border-gray-300 rounded-xl w-full"
//         />

//         <div className="mt-4">
//           <label htmlFor="deadline" className="block text-sm text-gray-600">Deadline</label>
//           <p className="text-xs text-gray-500 mb-2">Choose a date for the task deadline.</p>
//           <input
//             type="date"
//             name="deadline"
//             value={taskData.deadline}
//             onChange={handleChange}
//             className="p-2 border border-gray-300 text-grey-600 rounded-xl w-full"
//           />
//         </div>

//         <div className="flex justify-end mt-4">
//           <button
//             onClick={handleSubmit}
//             className="py-2 px-6 rounded-3xl bg-cyan-600 text-white font-bold"
//           >
//             Create
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskForm;
