import React from "react";
import { Calendar, Trash2 } from "lucide-react";
import useDeleteTask from "../hooks/useDeleteTask";
import { getFormattedDate } from "../utils/dateUtils";
import { TaskCardProps } from "../types/taskTypes";

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const formattedDate = task.deadline ? getFormattedDate(task.deadline) : '—';
  const deleteTask = useDeleteTask();

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
    <div className="bg-cyan-100/30 border border-cyan-100 shadow-md rounded-2xl p-4 mb-3 cursor-pointer transition-all hover:shadow-lg min-w-58 min-h-38 flex flex-col justify-between">
      <div>
        <h4 className="font-bold text-lg">{task.title}</h4>
        <p className="text-gray-700 mt-1">{task.description}</p>
      </div>

      <div className="border-t border-t-gray-200 mx-[-16px] mt-4"></div>

      <div className="flex justify-between items-center">
        {task.status === "TODO" && (
          <button
            onClick={handleDelete}
            className="text-fuchsia-300 hover:text-fuchsia-500 transition"
          >
            <Trash2 size={16} />
          </button>
        )}

        <div className="flex items-center text-gray-500 text-xs ml-auto">
          <Calendar size={16} className="mr-1" />
          <p>{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
