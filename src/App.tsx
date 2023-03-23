import React, { useState } from "react";
import Counter from "./Counter";
import './App.css'
import './index.css'

const App = () => {

  console.log("renderd App Component")

  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <>
      <Counter />
      <input type="text" value={input} onChange={handleChange} />
    </>
  );
};

export default App;
