import React from "react";
import { TaskCardProps } from "../types/taskTypes";
import { formatDate } from "../utils/dateUtils";

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const formattedDate = task.deadline ? formatDate(task.deadline) : '—';
  return (
    <div
      className="bg-cyan-100/30 border-1 border-cyan-100 shadow-md rounded-2xl p-4 mb-3 cursor-pointer transition-all hover:shadow-lg min-w-58"
    >
      <h4 className="font-bold text-lg">{task.title}</h4>
      <p className="text-gray-700 mt-1">{task.description}</p>

      <div className="flex justify-end">
        <p className="text-gray-500 text-xs mt-2">{formattedDate}</p>
      </div>
    </div>
  );
};

export default TaskCard;
