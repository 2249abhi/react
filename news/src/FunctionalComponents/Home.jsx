import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

export default function Home(props) {  
  
  let [articles, setArticles] = useState([])
  let [totalResults, setTotalResults] = useState(0)
  

  async function getAPIData() {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${props.search ? props.search : props.q}&language=${props.language}&apiKey=6f8408d86ca54623928fad572727d868`)
    response = await response.json()
    if(response.status === 'ok') {
        setArticles(response.articles)
        setTotalResults(response.totalResults)
    }
  }

  useEffect(()=>{
    //setQ(props.q)
    //console.log(props.q);
    getAPIData()
  },[props])

  return (
    <>
      <h5 className="background text-light text-center p-2 mt-1">Latest {props.q} Articles</h5>
      <div className='row'>
        {
        articles.map((item, index)=>{
          return <NewsItem
          image={item.urlToImage}
          source={item.source?.name}
          title={item.title}
          description={item.description}
          url={item.url}
          pic={item.urlToImage}
          publishedAt={item.publishedAt}
          key={index} />
        })
        }
      </div>
    </>
  )
}
