import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
    const articleArr = posts.map((post) => (<Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        
    />))

  return (
    <div>
        <main>
            {articleArr}
        </main>

    </div>
  )
}

export default ArticleList