import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>Username: {props.username}</p>
            <p>Output something because you had to</p>
        </div>
    );
}

export default userOutput;