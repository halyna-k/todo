import React from "react";
import { TaskCardProps } from "../types/taskTypes";

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer;
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, newStatus: string) => {
    e.preventDefault();
    console.log(task.id, newStatus);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className="bg-white shadow-md rounded-2xl p-4 mb-3 cursor-pointer transition-all hover:shadow-lg min-w-58"
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, task.status)}
      draggable
    >
      <h4 className="font-bold text-lg">{task.title}</h4>
      <p className="text-gray-700 mt-1">{task.description}</p>

      <div className="flex justify-end">
        <p className="text-gray-500 text-xs mt-2">{task.deadline}</p>
      </div>
    </div>
  );
};

export default TaskCard;
