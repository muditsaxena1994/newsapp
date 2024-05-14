import React,{useEffect,useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



const News=(props)=> {
  const [articles, setAricles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
   

    
    const updateNews=async ()=>{
      props.setProgress(0);
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      
      setLoading(true)
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json()
      console.log(parsedData);
      setAricles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      

      
      props.setProgress(100);

    }
    useEffect(() => {
      updateNews();
    
      
    }, [])
    
      
      const fetchMoreData = async () => {
        
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
      
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      setAricles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
      
        
      }
  
    return (
        <>
        
          
          <h1 className='text-center' style={{marginTop:'80px'}}>News Monkey -Top {capitalizeFirst(props.category)} Headlines</h1>
          {loading && <Spinner/>}
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}>
        
      <div className='container my-3'>
      <div className='row'>
      {
       articles.map((element)=>{
        return <div className='col-md-4' key={element.url}>
        <Newsitem url={element.url} title={element.title} description={element.description}imageUrl={element.urlToImage}
         newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}></Newsitem>

      </div>

      })}
      
      </div>
      </div>
      </InfiniteScroll>
     
      
      
      
      
      </>
     
    )
  }

News.defaultProps={
  country :"in",
  pageSize:8

}
News.propTypes={
  country: PropTypes.string,
  pageSize:PropTypes.number

}

export default News
