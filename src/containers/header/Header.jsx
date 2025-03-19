import React from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './header.css'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's build something amazing with GPT-3</h1>
        <p className='gpt3__header-text'>OpenAI's GPT-3 is the most powerful language model ever built. It can write essays, answer questions, generate code, and much more. Let's explore the possibilities together.</p>

        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>

      <div className='gpt3__header-content__people'>
        <img src={people} alt="" />
        <p>Over 1,600 people requested access to visit in the last 24 hours</p>
      </div>
    </div>

      <div className="gpt3__header-img">
        <img src={ai} alt="" />
      </div>

    </div>
  )
}

export default Header