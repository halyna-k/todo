
export type TaskStatusProps = 'TODO' | 'IN_PROGRESS' | 'COMPLETED';

export interface TaskProps {
  user_id?: string;
  id: number;
  title: string;
  description: string;
  deadline?: string;
  status: TaskStatusProps | string;
}

export interface TaskCardProps {
  task: TaskProps;
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
}

export interface TaskManagementProps {
  tasks: TaskProps[];
  searchQuery?: string;
}

export interface TaskDataProps {
  title: string;
  description: string;
}
