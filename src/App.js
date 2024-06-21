// src/App.js
import React from 'react';
import ContentSwitcher from './components/ContentSwitcher';
import './App.css'; // Import the CSS file for styling
import Thesis from './components/Thesis';
import Landing from './components/Landing';
import Facts from './components/Facts';
import References from './components/References';
import Connector from './components/Connector';
import NaysayersButtons from './components/NaysayersButtons'
import Conclusion from './components/Conclusion'

const App = () => {
  return (
    <div className="App">
      <Landing/>
      <Facts/>
      <Thesis/>
      <ContentSwitcher />
      <Connector/>
      <NaysayersButtons/>
      <Conclusion/>
      <References/>
    </div>
  );
};

export default App;
