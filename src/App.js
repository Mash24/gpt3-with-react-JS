import React from 'react'
import './App.css'

// import components we created inside the container and components folder, but bringing them from the index.js file inside each folder

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { Brand, CTA, Navbar } from './components'

const App = () => {
  return (
    <div className="App">
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App