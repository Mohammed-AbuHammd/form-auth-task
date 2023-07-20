import React, { Component } from "react";
import './style.css'
class Input extends Component {
  render() {
    const { type, name, id, placeholder, value, onChange } = this.props;

    return (
      <div>
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Input;
