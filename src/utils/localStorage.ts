import { type Task } from '../types/Task';

const STORAGE_KEY = 'atomicTodoTasks';

export const saveTasks = (tasks: Task[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks to localStorage:', error);
  }
};

export const loadTasks = (): Task[] => {
  try {
    const storedTasks = localStorage.getItem(STORAGE_KEY);
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      return parsedTasks.map((task: any) => ({
        ...task,
        createdAt: new Date(task.createdAt)
      }));
    }
  } catch (error) {
    console.error('Error loading tasks from localStorage:', error);
  }
  return [];
};