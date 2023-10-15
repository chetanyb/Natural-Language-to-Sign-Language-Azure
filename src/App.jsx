import { useState } from "react";
import { Input } from "./components/input";
import { Output } from "./components/output";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Input />
    </div>
  );
}

export default App;
