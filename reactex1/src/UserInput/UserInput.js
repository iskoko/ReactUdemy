import React from 'react';

const userInput = (props) => {
    const styleInput = {
        width: '16%',
        margin: '10px auto',
        padding: '3px',
        border: '1px solid #ccc',
        borderRadius: '4px 4px 4px 4px',
        boxShadow: 'inset 0 0 3px #aaa'
        };

    return <input
        type='text'
        onChange={props.changed}
        value={props.username}
        style={styleInput} />;
};

export default userInput;