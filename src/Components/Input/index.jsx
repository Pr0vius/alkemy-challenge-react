import React from "react";

const Input = ({ label, name, type, value, onChange,onBlur}) => {
  return (
    <div className="mb-3">
      <label htmlFor={`${name}Input`} className="form-label text-white">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={`${name}Input`}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
