import './SearchBare.css';
import React, { useState } from "react";

function SearchBare(props) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.termSubmit(input);
    }
    const handleChange = (event) => {
        setInput(event.target.value);
    }
    return <div className="search-bar">
        <form onSubmit = {handleSubmit}>
            <input type="text"  onChange = {handleChange}  value={input} />
        </form>
    </div>;
}

export default SearchBare;