import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            totalResults: 0
        }
    }

    async getAPIData() {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search ? this.props.search : this.props.q}&from=2024-09-21&language=${this.props.language2}&sortBy=publishedAt&apiKey=13bcaa31eec24610aa23311ff5aa44fc`)
        response = await response.json()
        if (response.status === 'ok') {
            // this.setState({
            //     articles: response.articles.filter(x=>x.title !== "[Removed]"),
            //     totalResults: response.totalResults
            // })

            const updatedArticles = await Promise.all(
                response.articles
                    .filter(x => x.title !== "[Removed]")
                    .map(async (article) => {
                        const imageExists = await this.checkImageExists(article.urlToImage);
                        return {
                            ...article,
                            urlToImage: imageExists ? article.urlToImage : 'img/noimg.png',
                        };
                    })
            );

            this.setState({
                articles: updatedArticles,
                totalResults: response.totalResults,
            });
        }
    }

    // Function to check if an image exists at a given URL
    checkImageExists(url) {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(true); // Image exists
            img.onerror = () => resolve(false); // Image doesn't exist or failed to load
        });
    }

    componentDidMount() {
        this.getAPIData()
    }
    componentDidUpdate(oldProps){
        if(this.props !== oldProps) {
            this.getAPIData()
        }
    }
    render() {
        return (
            <>
                <h5 className='background text-light text-center p-2 my-1'>{this.props.q} News Article</h5>
                <div className='row'>
                    {
                        this.state.articles.map((item, index) => {
                            return <NewsItem
                                source={item.source?.name}
                                title={item.title}
                                description={item.description}
                                image={item.urlToImage}
                                url={item.url}
                                published={item.publishedAt}

                                key={index} />
                        })
                    }
                </div>
            </>
        )
    }
}
