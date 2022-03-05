import React from "react";

const NumberField = (props) => {
  return (
    <div>
      <input
        type="number"
        min="1"
        max="30"
        defaultValue={props.defaultValue}
        onChange={(e) => props.handleChange(e)}
      />
    </div>
  );
};

export default NumberField;
