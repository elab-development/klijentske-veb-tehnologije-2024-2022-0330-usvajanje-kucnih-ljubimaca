import React, { Component } from 'react';
import '../style/InputField.css';
import { InputFieldProps } from './inputFieldModel';

class Inputfield extends Component<InputFieldProps> {
  render() {
    const { value, onChange, label } = this.props;

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
  }
}

export default Inputfield;