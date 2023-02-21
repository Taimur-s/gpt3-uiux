import React from 'react'
import './article.css';

const Article = ({imageUrl, date ,title}) => {
  return (
    <div className='gpt3__blog-containr_article'>
      <div className='gpt3__blog-containr_article-image'>
        <img src={imageUrl} alt="blog image" />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Articlle</p>
      </div>
    </div>
  )
}

export default Article
