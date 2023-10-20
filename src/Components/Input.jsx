import React from 'react';
import './Input.css';
import 'material-icons/iconfont/material-icons.css';
const Input = () => {
    const handleInputChange = (e) => {
        const icon = e.target.previousSibling;
        if (e.target.value) {
            icon.style.visibility = 'hidden';
        } else {
            icon.style.visibility = 'visible';
        }
    };

    return (
        <div className='In'>
            <div className='Source icon-container'> 
                <span className="placeholder-icon">&#x1F50D;</span>
                <input onChange={handleInputChange} placeholder='   Source'></input>
            </div>
            <div className='Destination icon-container'>
                <span className="placeholder-icon">&#x1F50D;</span>
                <input onChange={handleInputChange} placeholder='   Destination'></input> 
            </div>
            <div className='Search'>
                <button>Search</button>
            </div>
        </div>
    )
}
export default Input