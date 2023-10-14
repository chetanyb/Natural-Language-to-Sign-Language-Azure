import React from 'react';
//Defining the input state

const Input = () => {
    const [input, setInput] = React.useState('');
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
            <input className="" type="text" value={input} onChange={handleInput} />
            <button className="group relative" type="submit">
  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-300 group-hover:from-indigo-700 group-hover:to-blue-500"></span>
  <span className="relative text-white">
    Submit
  </span>
</button>

        </form>
    );
}

export { Input };