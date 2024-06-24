import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import './Facts.css'; // Ensure you have a CSS file for styling

const Facts = () => {
  useEffect(() => {
    const data = {
      labels: ['Low', 'Lower Middle', 'Upper Middle','Upper'],
      datasets: [{
        label: 'Income Groups of BRI Countries',
        data: [31, 42, 44,34],
        backgroundColor: [
          'rgb(128, 0, 0)',
          'rgb(0, 100, 0)',
          'rgb(75, 192, 192)',
          'rgb(255, 99, 132)'
        ],
        hoverOffset: 4
      }]
    };

    const datasecond = {
      labels: ['Construction Contracts', 'Non-Financial Investments'],
      datasets: [{
        label: 'BRI Accumulated Investments (BILLIONS)',
        data: [634, 419],
        backgroundColor: [
          'rgb(255, 206, 86)',
          'rgb(54, 162, 235)',
        ],
        hoverOffset: 4
      }]
    };

    new Chart(
      document.getElementById('pie'),
      {
        type: 'pie',
        data: datasecond,
      }
    );

    new Chart(
      document.getElementById('donut'),
      {
        type: 'doughnut',
        data: data,
      }
    );
  }, []);

  return (
    <div className="facts-container">
      <div className="stats-container">
        <div className="chart-wrapper">
          <div className="chart-box">
            <canvas id="donut"></canvas>
            <p className='referencetext'>Data taken from Nedopil (2024, page 23), representing number of participating countries in each income group.</p>
          </div>
          <div className="chart-text">According to an investment report (Nedopil, 2024 pg 23), about 50% of the countries involved with the BRI projects are developing countries (low to lower middle) </div>
        </div>
        <div className="chart-wrapper">
          <div className="chart-box">
            <canvas id="pie"></canvas>
            <p className='referencetext'>Data taken from Nedopil (2024, page 7), representing the total expenditure in the BRI projects</p>
          </div>
          <div className="chart-text">In the same investment report (Nedopil, 2024 pg 7), it also mentioned that total accumulated investments on BRI projects has went past 1 Trillion dollars after 10 years.</div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
