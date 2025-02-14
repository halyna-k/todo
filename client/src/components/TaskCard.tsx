import React, { useState } from "react";
import { CalendarDays, MoreVertical, Trash2 } from "lucide-react";
import useDeleteTask from "../hooks/useDeleteTask";
import useUpdateTask from "../hooks/useUpdateTask";
import TaskForm from "./TaskForm";
import { getFormattedDate } from "../utils/dateUtils";
import { TaskCardProps, TaskProps } from "../types/taskTypes";

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const formattedDate = task.deadline ? getFormattedDate(task.deadline) : '—';
  const [isEditing, setIsEditing] = useState(false);
  const updateTask = useUpdateTask();
  const deleteTask = useDeleteTask();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
  };

  const handleSubmitEdit = (updatedTask: TaskProps) => {
    updateTask.mutate({
      taskId: task.id.toString(),
      updatedFields: updatedTask,
    });
    handleCloseEdit();
  };

  const handleDelete = () => {
    if (task.user_id) {
      if (task.status === "TODO") {
        const isConfirmed = window.confirm("Are you sure you want to delete this task?");
        if (isConfirmed) {
          deleteTask.mutate(task.id.toString());
        }
      }
    } else window.alert("You couldn't delete this task.");
  };

  return (
    <div className="bg-cyan-100/30 border border-cyan-100 shadow-md rounded-2xl p-4 mb-3 cursor-grab transition-all hover:shadow-lg min-w-58 min-h-38 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-lg">{task.title}</h4>
        <button
          onClick={handleEdit}
          className="text-gray-500 hover:text-gray-700 cursor-pointer transition mt-1"
        >
          <MoreVertical size={16} />
        </button>
      </div>
      <p className="text-gray-700 mt-1 overflow-hidden" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>{task.description}</p>

      <div className="border-t border-t-gray-200 mx-[-16px] mt-4"></div>

      <div className="flex justify-between items-center mt-2">
        {task.status === "TODO" && (
          <button
            onClick={handleDelete}
            className="text-fuchsia-300 hover:text-fuchsia-500 transition cursor-pointer"
          >
            <Trash2 size={16} />
          </button>
        )}

        <div className="flex items-center text-gray-500 text-xs ml-auto">
          <CalendarDays size={16} className="mr-1" />
          <p>{formattedDate}</p>
        </div>

      </div>

      {isEditing && <TaskForm onSubmit={handleSubmitEdit} onClose={handleCloseEdit} taskData={{ initialData: task }} />}
    </div>
  );
};

export default TaskCard;
