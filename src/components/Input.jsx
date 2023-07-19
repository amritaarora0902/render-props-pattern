import React, { useState } from "react";

const Input = (props) => {
  const [value, setValue] = useState();
  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <br />
      {props.renderTextBelow(value)}
    </>
  );
};

export default Input;
