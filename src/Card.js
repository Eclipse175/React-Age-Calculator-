import React, { useState } from 'react';
import './App.css';

function AgeCalculator() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthDate = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();
    const diffInMs = currentDate - birthDate;
    const ageDate = new Date(diffInMs);
    const years = Math.abs(ageDate.getUTCFullYear() - 1970);
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    setAge(`${years} years ${months} months and ${days} days`);
  };

  return (
    <div className="age-calculator">
      <h1 className="age-calculator__title">Age Calculator</h1>
      <div className="age-calculator__form">
        <div className="age-calculator__input-container">
          <label htmlFor="day" className="age-calculator__label">Day of Birth</label>
          <input type="number" id="day" min="1" max="31" className="age-calculator__input" value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className="age-calculator__input-container">
          <label htmlFor="month" className="age-calculator__label">Month of Birth</label>
          <input type="number" id="month" min="1" max="12" className="age-calculator__input" value={month} onChange={(e) => setMonth(e.target.value)} />
        </div>
        <div className="age-calculator__input-container">
          <label htmlFor="year" className="age-calculator__label">Year of Birth</label>
          <input type="number" id="year" min="1900" max={new Date().getFullYear()} className="age-calculator__input" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <button className="age-calculator__button" onClick={calculateAge}>Calculate Age</button>
      </div>
      {age && <p className="age-calculator__result">You are {age} old.</p>}
    </div>
  );
}

export default AgeCalculator;
