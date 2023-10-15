import React from "react";

const Input = () => {
  const [input, setInput] = React.useState("");
  //Defining the input handler
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  //Defining the submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex items-stretch bg-gray-200 rounded-full">
        <span className="flex items-center bg-black text-white rounded-l-full px-4">
          Convert to ASL
        </span>
        <input
          type="text"
          value={input}
          onChange={handleInput}
          className="flex-grow bg-white text-slate-600 px-4 focus:outline-none focus:ring focus:border-blue-300 rounded-none"
          placeholder="Enter text here"
        />
        <button className="group relative flex items-center px-4 bg-gradient-to-r from-blue-300 to-blue-500 hover:from-blue-400 hover:to-blue-700 rounded-r-full focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Submit
        </button>
      </div>
    </form>
  );
};

export { Input };
