import React from 'react';
import './Button.css';
/* eslint-disable */

function Button({
    name, clickHandler, equals, orangee,
}) {
    const handleClick = () => {
        clickHandler(name);
    };
    const className = [
        equals ? 'equals' : '',
        orangee ? 'orangee' : '',
    ];

    return (
        <button className={className.join(' ').trim()} type="button" onClick={handleClick}>
            {name}
        </button>
    );
}

export default Button;
