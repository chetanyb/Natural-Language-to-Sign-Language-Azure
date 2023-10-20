import React from "react";
import ReactPlayer from "react-player";
import "../animations.css";

const Output = ({ videoUrl }) => {
  console.log("Video URL:", videoUrl);
  return (
    <div className="flex flex-col items-center justify-center max-h-screen">
      <h1 className="text-cyan-800 p-8 mix-blend-color-burn text-2xl md:text-4xl font-bold mb-4">
        Natural Language to Sign Language
      </h1>
      <div className=" dynamic-bg p-4 border-4 border-slate-400 rounded-lg">
        <ReactPlayer
          url={
            videoUrl ||
            "https://via.placeholder.com/480x270.png?text=Video+Player+Placeholder"
          }
          controls={true}
          width="480px"
          height="270px"
          playing={true}
        />
      </div>
    </div>
  );
};

export { Output };
