import React from 'react';
import '../style/InputField.css'

interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange, label}) => {
  return (
    <div className="input-field">
      <label>
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;