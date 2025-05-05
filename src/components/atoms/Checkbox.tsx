import React from 'react';
import '../../styles/atoms/Checkbox.css';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, id }) => {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="atom-checkbox"
      />
      <label htmlFor={id} className="checkbox-label"></label>
    </div>
  );
};

export default Checkbox;