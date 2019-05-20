import React from 'react';

const Button = ({ onClick, text }) => {
  return <button style={{
    position: 'absolute',
    top: 10,
    left: 10,
    width: '200px'
  }} onClick={onClick}>{text}</button>
}

export default Button;