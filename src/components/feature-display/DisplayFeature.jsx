import React from 'react'
import './DisplayFeature.css'

const DisplayFeature = ({ title, text}) => {
  return (
    <div className='gpt3__features-container__feature'>
      
      <div className="gpt3__features-container__feature-title">
        <h1>{title}</h1>
      </div>

      <div className="gpt3__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default DisplayFeature;
