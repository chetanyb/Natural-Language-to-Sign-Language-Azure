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
        <form onSubmit={handleSubmit} class="from-orange-100">
            <input type="text" value={input} onChange={handleInput} />
            <button type="submit">Submit</button>
        </form>
    );
}

export { Input };