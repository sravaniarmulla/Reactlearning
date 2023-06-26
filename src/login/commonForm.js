import React from "react";

function CommonField({ type, label, input, value }) {
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} placeholder={label} value={value}></input>
    </div>
  );
}
export default CommonField;
