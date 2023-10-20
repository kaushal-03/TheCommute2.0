import React from 'react';
import "./Button.css";
import 'material-icons/iconfont/material-icons.css';
const Button = () => {
  return (
    <button className="bbut"style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'transparent',
        border:'none',
      }}>
        <span className="material-icons" style={{ fontSize: '24px' }}>add_circle</span><span className="button-text">Publish A Ride</span>
      </button>
      
  )
}

export default Button