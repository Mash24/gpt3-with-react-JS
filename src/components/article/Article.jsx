import React from 'react'
import './Article.css';

const Article = ({imgurl, date , title}) => {
  return (
    <div className='gpt3__blog-container_article'>

      <div className='gpt3__blog-container_article-image'>
        <img src= {imgurl} alt='blog' />
      </div>

      <div className='gpt3__blog-container_article-content'>
        <div>
        <p>{date}</p>
        <h3>{title}</h3>
        </div>

        <p>Read More..</p> 
      </div>

    </div>
  )
}

export default Article