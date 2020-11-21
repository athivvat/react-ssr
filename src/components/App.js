import React, { useState } from "react";

const App = ({ initialText }) => {
  const [text, setText] = useState(initialText);

  const handleCLick = () => {
    setText("changed in the browser!");
  };

  return (
    <div>
      <h1>Hello</h1>
      <p>{text}</p>
      <button onClick={handleCLick}>change text!</button>
    </div>
  );
};

export default App;
