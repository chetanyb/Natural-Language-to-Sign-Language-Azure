import { useState } from "react";
import { Input } from "./components/input";
import { Output } from "./components/output";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div
      className="bg-cover rounded-2xl shadow max-h-screen max-w-screen overflow-hidden overflow-y-auto"
      style={{ backgroundImage: `url(pattern2.png)` }}
    >
      <Output result={inputValue} />
      <Input onInputSubmit={setInputValue} />
      <br></br>
    </div>
  );
}

export default App;
