import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    country:'us',
    pageSize:8,
    category:'general'

  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }


  constructor(props){
    super(props);
    console.log("Hello I am a constructor from news component");
    this.state={
      articles:[],
      loading: false,
      page:1,
      totalResults:0
    };
  }
  async componentDidMount(){
    console.log("cdm");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=40144429488f4622b7604251d4ed7f7d&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData=await data.json()
    console.log(parseData);
    this.setState({
      articles:parseData.articles,
    totalResults:parseData.totalResults,
        loading:false
  });
}
  handlePrevClick=async()=>{
 console.log("Previous");

 let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=40144429488f4622b7604251d4ed7f7d&page=1&pageSize=${this.props.pageSize-1}&pageSize=${this.props.pageSize}`;
 this.setState({loading:true});   
 let data = await fetch(url);
    let parseData=await data.json()
    console.log(parseData);
    this.setState({
      articles:parseData.articles,
     page:this.state.page-1,
     loading:false
})
  }
  handleNextClick = async () => {
  console.log("Next");
  
  // 1. Fallback to a default page size (e.g., 12 or 15) if props.pageSize isn't set
  const pageSize = this.props.pageSize || 12; 
  
  // 2. NewsAPI free tier limits results to 100 max
  const maxResults = Math.min(this.state.totalResults, 100); 
  const maxPages = Math.ceil(maxResults / pageSize);

  if (this.state.page + 1 <= maxPages) {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=40144429488f4622b7604251d4ed7f7d&page=1&pageSize=${this.props.pageSize+1}&pageSize=${pageSize}`;
    
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    
    this.setState({
      articles: parseData.articles,
      page: this.state.page + 1,
      loading: false
    });
  } else {
    console.log("Reached the maximum available pages on the free plan.");
  }
}
  
  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{margin:'40 px 0px'}}>NewsDaily - Top headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return  <div className="col-md-4" key={element.url}>
        <Newsitem  title={element.title?element.title.slice(0,45): " " } description={element.description?element.description.slice(0,88) : " " } imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        
          })}
           </div>
           <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
            <button disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
           </div>
        </div>
        
        
      
    )
  }
}



export default News
