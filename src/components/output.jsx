import React from "react";

const Output = ({ result }) => {
  return (
    <div>
      <h1 className=" text-cyan-800 p-8 mix-blend-color-burn">
        Natural Language to Sign Language
      </h1>
      <div className="m-10 max-h-screen overflow-y-auto">
        <div className="rounded-lg p-4">
          <div className="border border-e-4 border-s-4 border-slate-400 rounded-lg p-2">
            <p className="text-gray-700 break-words">{result}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Output };
