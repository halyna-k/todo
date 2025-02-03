
export type TaskStatusProps = 'TODO' | 'IN_PROGRESS' | 'COMPLETED';

export interface TaskProps {
  user_id?: string;
  id: number;
  title: string;
  description?: string;
  deadline?: string;
  status: TaskStatusProps | string;
}

export interface TaskCardProps {
  task: TaskProps;
  // onDelete: (taskId: string) => void;
  // onDrop: (taskId: string, newStatus: string) => void;
  // onStatusChange: () => void;
  // updateTaskStatus: (taskId: string, newStatus: string) => void;
}


export interface TaskFormProps {
  initialData?: {
    id: number,
    title: string;
    description: string;
    deadline: string;
    status: 'TODO' | 'IN_PROGRESS' | 'COMPLETED';
  };
  onSubmit: (task: TaskProps) => void;
  onClose: () => void;
  isVisible?: boolean
}

export interface TaskListProps {
  tasks: TaskProps[];
  status?: TaskStatusProps | string;
  // onDelete: (taskId: string) => Promise<void>;
  // onStatusChange: (task: TaskProps, newStatus: TaskStatusProps) => void;
}

export interface TaskManagementProps {
  tasks: TaskProps[];
  searchQuery?: string;
}

export interface TaskDataProps {
  title: string;
  description: string;
}
