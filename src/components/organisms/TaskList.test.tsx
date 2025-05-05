import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';
import type { Task } from '../../types/Task';
import '@testing-library/jest-dom';

describe('TaskList', () => {
  const mockTasks: Task[] = [
    { id: '1', name: 'Task 1', completed: false, createdAt: new Date() },
    { id: '2', name: 'Task 2', completed: true, createdAt: new Date() }
  ];

  const mockHandlers = {
    onToggleComplete: jest.fn(),
    onDeleteTask: jest.fn(),
    onEditTask: jest.fn()
  };

  it('renders empty state when no tasks are provided', () => {
    render(
      <TaskList
        tasks={[]}
        onToggleComplete={mockHandlers.onToggleComplete}
        onDeleteTask={mockHandlers.onDeleteTask}
        onEditTask={mockHandlers.onEditTask}
      />
    );

    expect(screen.getByText(/All done! Add new tasks in the field above!/i)).toBeInTheDocument();
  });

  it('renders a list of tasks when tasks are provided', () => {
    render(
      <TaskList
        tasks={mockTasks}
        onToggleComplete={mockHandlers.onToggleComplete}
        onDeleteTask={mockHandlers.onDeleteTask}
        onEditTask={mockHandlers.onEditTask}
      />
    );

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });
});