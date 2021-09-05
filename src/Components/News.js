import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


function News(props) {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    function upperString(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    const update = async (pageNo) => {
        // console.log(pageNo);
        props.handleProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a0cd105d449048a58b48f3a19d94e0bf&page=${pageNo}&pageSize=${props.pageSize}`;
        setLoading(true);
        props.handleProgress(70);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.handleProgress(100);

    }

    useEffect(() => {
        // console.log("Mounted");
        document.title = `${upperString(props.category)} - Daily News`;
        update(page);
        // eslint-disable-next-line 
    }, [])


    // previousHandler = async () => {
    //     // console.log("Previous");
    //      setState({page :  page-1})
    //     update( page);
    // }

    // nextHandler = async () => {
    //     // console.log("Next");
    //      setState({page :  page+1})
    //     if (Math.ceil( totalResults / 9) >=  page + 1) {
    //         update( page);
    //     }
    // }

    const fetchMoreData = async () => {
        // console.log( page);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a0cd105d449048a58b48f3a19d94e0bf&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        //// console.log(parsedData);
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    }



    const changed = () => {
        return props.mode === 'light' ? 'dark' : 'light';
    }

    return (
        <>

            <h2 className={` text-center text-${changed()} my-3 `} >
                Top {upperString(props.category)} Headlines </h2>
            {loading && <Spinner mode={props.mode} />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner mode={props.mode} />}
            >
                <div className="container ">
                    <div className="row">
                        {!loading && articles.map(
                            (article) => {
                                return (
                                    <div className="col-md-4" key={article.url} >
                                        <NewsItem mode={props.mode} title={article.title} description={article.description}
                                            imageUrl={article.urlToImage} newsUrl={article.url}
                                            date={article.publishedAt} author={article.author}
                                            source={article.source.name} />
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="d-flex justify-content-between">
                        <button disabled={ page <= 1} type="button" className="btn btn-primary "
                            onClick={previousHandler}   >  &larr; Previous  </button>
                        <button disabled={Math.ceil( totalResults / 9) <  page + 1}
                            type="button"
                            className="btn btn-primary"
                            onClick={nextHandler} > Next  &rarr; </button>
                    </div> */}


        </>

    )

}

News.defaultProps = {
    country: 'in',
    category: 'general',
    pageSize: 3,
    mode: 'light'
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
    mode: PropTypes.string,
}

export default News
