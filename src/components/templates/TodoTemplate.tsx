import React from 'react';
import TaskForm from '../organisms/TaskForm';
import TaskList from '../organisms/TaskList';
import Button from '../atoms/Button';
import type { Task } from '../../types/Task';
import '../../styles/templates/TodoTemplate.css';

interface TodoTemplateProps {
  tasks: Task[];
  onAddTask: (name: string) => void;
  onToggleComplete: (id: string, completed: boolean) => void;
  onDeleteTask: (id: string) => void;
  onEditTask: (id: string, newName: string) => void;
  onClearCompleted: () => void;
  hasCompletedTasks: boolean;
}

const TodoTemplate: React.FC<TodoTemplateProps> = ({
  tasks,
  onAddTask,
  onToggleComplete,
  onDeleteTask,
  onEditTask,
  onClearCompleted,
  hasCompletedTasks
}) => {
  return (
    <div className="todo-template">
      <header className="todo-header">
        <h1>Todo List</h1>
      </header>
      
      <main className="todo-main">
        <TaskForm onAddTask={onAddTask} />
        
        <TaskList
          tasks={tasks}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
        
        {hasCompletedTasks && (
          <div className="clear-tasks">
            <Button 
              onClick={onClearCompleted}
              className="clear-completed-btn danger"
            >
              Clear Completed Tasks
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default TodoTemplate;