import React from 'react'
import { google, slack, atlassian, dropbox, shopify } from './import';
import './Brand.css'

const Brand = () => {
  return (
    <div className='brand section__padding'>
      <div>
        <img src={google} alt='google' />
        <img src={slack} alt='slack' />
        <img src={atlassian} alt='atlassian' />
        <img src={dropbox} alt='dropbox' />
        <img src={shopify} alt='shopify' />
      </div>
    </div>
  )
}

export default Brand