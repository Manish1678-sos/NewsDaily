import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import infiniteScroll from "react-infinite-scroll-component";

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
    document.title=`${this.props.category} - NewsDaily`;
  }
  async updateNews(){
    this.props.setProgress(10);
    this.setState({Loading:true});
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=40144429488f4622b7604251d4ed7f7d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(30);
    let data = await fetch(url);
    this.props.setProgress(70);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading:false
    });
    this.props.setProgress(100);
  }
  async componentDidMount(){
    this.updateNews();
}
  handlePrevClick=async()=>{

    this.setState({page:this.state.page-1},
    ()=>{this.updateNews();}
  );
}
  
  handleNextClick = async () => {
        this.setState({page:this.state.page+1},
          ()=>{this.updateNews();}
        );
    
  }
  
  
  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{margin:'40px 0px'}}>NewsDaily - Top headlines on {this.props.category}</h1>
        <infiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length!==this.totalResults}
        loader={<Spinner/>}>
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return  <div className="col-md-4" key={element.url}>
        <Newsitem  title={element.title?element.title.slice(0,45): " " } description={element.description?element.description.slice(0,88) : " " } imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
        </div>
        
          })}
           </div>
           </infiniteScroll>
           <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
            <button disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
           </div>
        </div>
        
        
      
    )
  }
}



export default News
