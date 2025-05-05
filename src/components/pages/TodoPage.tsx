import React, { useState, useEffect } from 'react';
import TodoTemplate from '../templates/TodoTemplate';
import type { Task } from '../../types/Task';
import { saveTasks, loadTasks } from '../../utils/localStorage';
import '../../styles/pages/TodoPage.css';

const TodoPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = loadTasks();
    if (savedTasks && savedTasks.length > 0) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (name: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      name,
      completed: false,
      createdAt: new Date()
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTaskComplete = (id: string, completed: boolean) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const editTask = (id: string, newName: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, name: newName } : task
      )
    );
  };

  const clearCompletedTasks = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  const hasCompletedTasks = tasks.some((task) => task.completed);

  return (
    <div className="todo-page">
      <TodoTemplate
        tasks={tasks}
        onAddTask={addTask}
        onToggleComplete={toggleTaskComplete}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
        onClearCompleted={clearCompletedTasks}
        hasCompletedTasks={hasCompletedTasks}
      />
    </div>
  );
};

export default TodoPage;