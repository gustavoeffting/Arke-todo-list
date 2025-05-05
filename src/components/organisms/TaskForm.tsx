import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import '../../styles/organisms/TaskForm.css';

interface TaskFormProps {
  onAddTask: (name: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (taskName.trim()) {
      onAddTask(taskName.trim());
      setTaskName('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="task-form-container">
        <Input
          value={taskName}
          onChange={setTaskName}
          placeholder="Add a new task..."
          required
        />
        <Button type="submit" className="add-task-btn">
          Add Task
        </Button>
      </div>
    </form>
  );
};

export default TaskForm;