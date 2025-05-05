import React from 'react';
import '../../styles/atoms/Input.css';

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  required?: boolean;
  id?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  required = false,
  id
}) => {
  return (
    <input
      type={type}
      id={id}
      className={`atom-input ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
    />
  );
};

export default Input;