import React, { useState } from "react";

function ASLConverter() {
  const [text, setText] = useState("");
  const [aslResult, setAslResult] = useState(null);

  const handleTranslate = () => {
    // This is where you'd call your Azure Text Analytics API to get the ASL representation
    // For now, I'll just set a placeholder value
    setAslResult("ASL Representation Placeholder");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-3/4">
        <div className="mb-4">
          <img
            src="path_to_azure_logo.png"
            alt="Azure Text Analytics"
            className="h-6 w-auto mx-auto"
          />
        </div>
        <textarea
          className="w-full p-2 border rounded-md mb-4"
          placeholder="Type your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded-md mb-4"
          onClick={handleTranslate}
        >
          Translate to ASL
        </button>
        {aslResult && <div className="border-t pt-4">{aslResult}</div>}
      </div>
    </div>
  );
}

export default ASLConverter;
