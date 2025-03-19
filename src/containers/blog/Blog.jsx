import React from 'react'
import {Article} from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import './blog.css'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>

      <div gpt3__blog__heading>
        <h1 className='gradient__text'>A lot is happening <br />We are blogging about it.</h1>
      </div>

      <div className='gpt3__blog-container'>

        <div className="gpt3__blog-container_groupA">
          <Article imgurl={blog01} date="March 19 2025" title="The Power of GPT-3 for Natural Language Processing" />
        </div>

        <div className="gpt3__blog-container_groupB">
          <Article imgurl={blog02} date="March 19 2025" title="How GPT-3 is Transforming Content Creation" />
          <Article imgurl={blog03} date="March 19 2025" title="Exploring the Future of AI-Powered Chatbots" />
          <Article imgurl={blog04} date="March 19 2025" title="Revolutionizing Industries with OpenAI's GPT-3" />
          <Article imgurl={blog05} date="March 19 2025" title="Understanding GPT-3: The Next Big Leap in AI" />
        </div>

      </div>
    </div>
  );
}

export default Blog