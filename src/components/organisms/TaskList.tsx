import React from 'react';
import TaskItem from '../molecules/TaskItem';
import type { Task } from '../../types/Task';
import '../../styles/organisms/TaskList.css';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string, completed: boolean) => void;
  onDeleteTask: (id: string) => void;
  onEditTask: (id: string, newName: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleComplete,
  onDeleteTask,
  onEditTask
}) => {
  if (tasks.length === 0) {
    return <div className="empty-tasks">All done! Add new tasks in the field above!</div>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDeleteTask}
          onEdit={onEditTask}
        />
      ))}
    </div>
  );
};

export default TaskList;