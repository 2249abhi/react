import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            totalResults: 0,
            page:1
        }
    }

    async getAPIData(page) {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search ? this.props.search : this.props.q}&pagesize=12&page=${page}&language=${this.props.language2}&sortBy=publishedAt&apiKey=6f8408d86ca54623928fad572727d868`)
        response = await response.json()
        
        if (response.status === 'ok') {
            // this.setState({
            //     articles: response.articles.filter(x=>x.title !== "[Removed]"),
            //     totalResults: response.totalResults
            // })

            // const updatedArticles = await Promise.all(
            //     response.articles
            //         .filter(x => x.title !== "[Removed]")
            //         .map(async (article) => {
            //             const imageExists = await this.checkImageExists(article.urlToImage);
            //             return {
            //                 ...article,
            //                 urlToImage: imageExists ? article.urlToImage : 'img/noimg.png',
            //             };
            //         })
            // );

            if(page == 1) {
                this.setState({
                    articles: response.articles.filter(x=>x.title !== "[Removed]"),
                    totalResults: response.totalResults
                })
            } else {
                this.setState({
                articles: this.state.articles.concat(response.articles.filter(x=>x.title !== "[Removed]"))
            })
            }
            
        }
    }

    // Function to check if an image exists at a given URL
    // checkImageExists(url) {
    //     return new Promise((resolve) => {
    //         const img = new Image();
    //         img.src = url;
    //         img.onload = () => resolve(true); // Image exists
    //         img.onerror = () => resolve(false); // Image doesn't exist or failed to load
    //     });
    // }

    fetchData = ()=>{
        this.getAPIData(this.state.page+1)
        this.setState({page:this.state.page+1})
    }
    componentDidMount() {
        this.getAPIData(1)
    }
    componentDidUpdate(oldProps) {
        if (this.props !== oldProps) {
            this.getAPIData(1)
        }
    }
    render() {
        return (
            <>
                <h5 className='background text-light text-center p-2 my-1'>{this.props.search ? this.props.search : this.props.q} News Article</h5>
                <InfiniteScroll
                    dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.fetchData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<div className='my-3 text-center'>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>}
                >
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
                </InfiniteScroll>
            </>
        )
    }
}
