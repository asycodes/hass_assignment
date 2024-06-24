import React from 'react';
import './Landing.css';
import briForum from '../x2A4KVDKY12kwicfR2UXODi9TVS2e8tr.jpg'
import { TypeAnimation } from 'react-type-animation';
 

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="image-container">
        <img src={briForum} alt="Landing Page Image" />
        <p className='referencetext'>Fig. 1. The Russian Presidential Press and Information Office (2017) Before the beginning of the Belt and Road international forum. Retrieved June 21, 2025 from http://en.kremlin.ru/events/president/trips/54504/photos/48320</p>
      </div>
      <div className="title-container">
        <h1>One Belt One Road: </h1>
        <TypeAnimation
            sequence={[
            'Global Cohesion', // Types 'One'
            1000, // Waits 1s
            'New Power', // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            'Scam', // Types 'Three' without deleting 'Two'
            () => {
                console.log('Sequence completed');
            },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '2em', display: 'inline-block', color:'#ba4442'}}
        />
        <h3> According to a report (Nedopil, 2024 pg 23), about 140 countries are participating under the Belt and Road Initiative (BRI), also known as One Belt One Road, a global development strategy launched by the Chinese Government to create an infrastructure network across Asia, Africa and Europe. This is to enhance economic connectivity and cooperation through infrastructure projects like roads, railways, ports and energy systems. With this, it hopes to cultivate economic growth and cohesiveness among the participating countries. Under the same report, it has mentioned that after 10 years, BRI engagements have reached over 1 trillion US dollars. </h3>
      </div>
    </div>
  );
};

export default Landing;
