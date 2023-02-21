import React from 'react'
import './article.css';

const Article = ({imageUrl}) => {
  return (
    <div className='gpt3__blog-containr_article'>
      <div className='gpt3__blog-containr_article-image'>
        <img src={imageUrl} alt="blog image" />
      </div>
    </div>
  )
}

export default Article
