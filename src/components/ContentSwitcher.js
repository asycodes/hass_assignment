// src/ContentSwitcher.js
import React, { useState } from 'react';
import './ContentSwitcher.css'; // Import the CSS file for styling
import Template from './Template';

const ContentSwitcher = () => {
  const [activeButton, setActiveButton] = useState('Intention');

  const handleClick = (section) => {
    setActiveButton(section);
  };

  return (
    <div className='critic-container'>
      <div className="button-container">
        <button
          className={activeButton === 'Intention' ? 'active' : ''}
          onClick={() => handleClick('Intention')}
        >
          Intention
        </button>
        <button
          className={activeButton === 'Method' ? 'active' : ''}
          onClick={() => handleClick('Method')}
        >
          Method
        </button>
        <button
          className={activeButton === 'Impact' ? 'active' : ''}
          onClick={() => handleClick('Impact')}
        >
          Impact
        </button>
      </div>
      <div className="content">
        <Template section={activeButton} />
      </div>
    </div>
  );
};

export default ContentSwitcher;
