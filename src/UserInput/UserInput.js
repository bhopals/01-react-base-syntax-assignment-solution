import React from  'react';
import './UserInput.css';

export const UserInput = (props) => {
    return (
    <div className="Input">
        <input type="text"  onChange={props.change} />
    </div>
    );
}

