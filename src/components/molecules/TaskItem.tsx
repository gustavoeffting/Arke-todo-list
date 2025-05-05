import React, { useState } from 'react';
import Checkbox from '../atoms/Checkbox';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import type { Task } from '../../types/Task';
import '../../styles/molecules/TaskItem.css';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newName: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleComplete,
  onDelete,
  onEdit
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);

  const handleEdit = () => {
    if (isEditing) {
      if (editedName.trim()) {
        onEdit(task.id, editedName);
      } else {
        setEditedName(task.name);
      }
    }
    setIsEditing(!isEditing);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditedName(task.name);
      setIsEditing(false);
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-item-left">
        <Checkbox
          id={`task-${task.id}`}
          checked={task.completed}
          onChange={(checked) => onToggleComplete(task.id, checked)}
        />
        
        {isEditing ? (
          <Input
            value={editedName}
            onChange={setEditedName}
            className="task-edit-input"
            required
          />
        ) : (
          <span className="task-name">{task.name}</span>
        )}
      </div>
      
      <div className="task-item-actions">
        <Button 
          onClick={handleEdit} 
          className="action-btn edit-btn"
        >
          {isEditing ? 'Save' : 'Edit'}
        </Button>
        <Button 
          onClick={() => onDelete(task.id)} 
          className="action-btn delete-btn danger"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;