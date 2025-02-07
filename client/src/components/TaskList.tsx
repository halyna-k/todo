import React from "react";
import TaskCard from "./TaskCard";
import { TaskListProps } from "../types/taskTypes";

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const columns = [
    { title: "TO DO", color: "border-b-cyan-300" },
    { title: "IN PROGRESS", color: "border-b-fuchsia-300" },
    { title: "COMPLETED", color: "border-b-emerald-300" },
  ];

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {columns.map((column) => (
        <div
          key={column.title}
          className="px-2"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e)}
        >
          <div className={`px-4 py-2 border-b-2 mb-2   text-center ${column.color}`}>
            <h1 className="text-lg font-bold text-gray-700">{column.title}</h1>
          </div>
          <div className="p-4 flex-1 overflow-y-auto max-h-[500px]">
            {tasks.map((task) => (
              column.title.replace(/\s/g, "").toUpperCase() === task.status.replace(/\s/g, "").toUpperCase() && (
                <TaskCard
                  key={task.id}
                  task={task}
                />
              )
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
