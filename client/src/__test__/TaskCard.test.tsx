import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import TaskCard from "../components/TaskCard";

describe("TaskCard Component", () => {
  const task = {
    id: 1,
    title: "Test Task",
    description: "Test task description",
    status: "TODO",
    deadline: "2025-02-03",
  };

  it("renders task details correctly", () => {
    const { getByText } = render(<TaskCard task={task} />);

    expect(getByText(task.title)).toBeInTheDocument();
    expect(getByText(task.description)).toBeInTheDocument();
    expect(getByText(task.deadline)).toBeInTheDocument();
  });
});
