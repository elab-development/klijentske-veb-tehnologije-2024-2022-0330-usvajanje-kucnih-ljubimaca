import React from 'react';
import '../style/InputField.css'
import { InputFieldProps } from '../modules/inputFieldModel';

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

