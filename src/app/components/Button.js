import React from 'react';
import './Button.css';

const Button = ({ children, onClick }) => {
  return (
    <button className='transition-shadow drop-shadow-lg m-4 py-2 px-2 rounded ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
