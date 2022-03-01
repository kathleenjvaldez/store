import React from "react";

const NumberField = (props) => {
  return (
    <div>
      <input
        type="number"
        defaultValue={props.defaultValue}
        onChange={(e) => props.handleChange(e)}
      />
    </div>
  );
};

export default NumberField;
