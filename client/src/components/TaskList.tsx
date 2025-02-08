import React from "react";
import useUpdateTaskStatus from "../hooks/useUpdateTaskStatus";
import TaskCard from "./TaskCard";
import { TaskListProps } from "../types/taskTypes";

type ColumnType = {
  title: string;
  color: string;
  status: "TODO" | "IN PROGRESS" | "COMPLETED";
};

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const { mutate } = useUpdateTaskStatus();
  const columns: ColumnType[] = [
    { title: "TO DO", color: "border-b-cyan-300", status: "TODO" },
    { title: "IN PROGRESS", color: "border-b-fuchsia-300", status: "IN PROGRESS" },
    { title: "COMPLETED", color: "border-b-emerald-300", status: "COMPLETED" },
  ];

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: "TODO" | "IN PROGRESS" | "COMPLETED") => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("id");
    if (taskId) {
      mutate({ taskId: Number(taskId), status });
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, taskId: string) => {
    e.dataTransfer.setData("id", taskId);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {columns.map((column) => (
        <div
          key={column.title}
          className="px-2"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, column.status)}
        >
          <div className={`px-4 py-2 border-b-2 mb-2 text-center ${column.color}`}>
            <h1 className="text-lg font-bold text-gray-700">{column.title}</h1>
          </div>
          <div className="p-4 flex-1 overflow-y-auto max-h-[500px]">
            {tasks.map((task) =>
              column.status === task.status ? (
                <div
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id.toString())}
                >
                  <TaskCard task={task} />
                </div>
              ) : null
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
