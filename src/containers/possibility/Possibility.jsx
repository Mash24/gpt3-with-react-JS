import React from 'react'
import possibilityImage from '../../assets/possibility.png'
import './possibility.css'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">

      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>

      <div className="gpt3__possibility-content">
        <h4>Unleash the endless possibilities</h4>
        <h1 className="gradient__text" >The possibilities are beyond <br /> your imagination</h1>
        <p>With GPT-3, you can create a chatbot, a content generator, a code generator, a translator, a text summarizer, and much more. The possibilities are endless.</p>
        <h4>Request Early Access to Get Started</h4>
    </div>

  </div>
  )
}

export default Possibility