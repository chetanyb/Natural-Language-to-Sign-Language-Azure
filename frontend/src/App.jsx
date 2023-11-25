import { useState } from "react";
import { Input } from "./components/input";
import { Output } from "./components/output";
import "./App.css";

function App() {
  const [videoURL, setVideoUrl] = useState("");

  const handleInputSubmit = async (inputValue) => {
    const response = await fetch("http://localhost:3000/app/convert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: inputValue }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("VideoURL:", data.videoURL);
      setVideoUrl(data.videoURL);
    } else {
      console.error("Failed to fetch video URL:", response.statusText);
    }
  };

  return (
    <div
      className="bg-cover rounded-2xl shadow max-h-screen max-w-screen overflow-hidden overflow-y-auto"
      style={{ backgroundImage: `url(pattern2.png)` }}
    >
      <Output videoUrl={videoURL} />
      <Input onInputSubmit={handleInputSubmit} />
      <br></br>
    </div>
  );
}

export default App;
