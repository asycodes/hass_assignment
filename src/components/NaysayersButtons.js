// src/ContentSwitcher.js
import React, { useState } from 'react';
import './NaysayersButtons.css'; // Import the CSS file for styling
import NaysayerTemplate from './NaysayerTemplate'


const NaysayersButtons= () => {
  const [activeeButton, setActiveeButton] = useState('Global');

  const handleClick = (section) => {
    setActiveeButton(section);
  };

  return (
    <div className='naysayer-container'>
      <div className="buttonn-container">
        <button
          className={activeeButton === 'Global' ? 'active' : ''}
          onClick={() => handleClick('Global')}
        >
          Global Concern
        </button>
        <button
          className={activeeButton === 'Self' ? 'active' : ''}
          onClick={() => handleClick('Self')}
        >
          Self Concern
        </button>
    
      </div>
      <div className="content">
        <NaysayerTemplate section={activeeButton} />
      </div>
    </div>
  );
};

export default NaysayersButtons;
