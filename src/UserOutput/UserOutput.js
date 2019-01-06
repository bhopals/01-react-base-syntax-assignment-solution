import React from 'react';
import './UserOutput.css';

export const UserOutput = (props) => {
    return (
        <div className="Output">
            <p onClick={props.click}>Welcome {props.userName}!!!!</p>
            <p>UserLogged UserName is : {props.userName}</p>
        </div>
    )
}