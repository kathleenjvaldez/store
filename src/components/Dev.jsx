import React, { useState } from "react";

const Dev = () => {
  const [count, setCount] = useState(0);

  function changeCount(event) {
    setCount(event.target.value);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <input type="number" onChange={changeCount} />
    </div>
  );
};

export default Dev;
