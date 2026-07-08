import React, { Component } from 'react'
import Newsitem from './Newsitem'
export class News extends Component {


  constructor(){
    super();
    console.log("Hello I am a constructor from news component");
    this.state={
      articles:[],
      loading: false,
      page:1
    };
  }
  async componentDidMount(){
    console.log("cdm");
    let url="https://newsapi.org/v2/everything?q=apple&from=2026-07-07&to=2026-07-07&sortBy=popularity&apiKey=40144429488f4622b7604251d4ed7f7d&page=1";
    let data = await fetch(url);
    let parseData=await data.json()
    console.log(parseData);
    this.setState({articles:parseData.articles})
  }
  handlePrevClick=async()=>{
 console.log("Previous");
 let url=`https://newsapi.org/v2/everything?q=apple&from=2026-07-07&to=2026-07-07&sortBy=popularity&apiKey=40144429488f4622b7604251d4ed7f7d&page=${this.state.page-1}`;;
    let data = await fetch(url);
    let parseData=await data.json()
    console.log(parseData);
    this.setState({articles:parseData.articles})
this.setState({
  page:this.state.page-1
})
  }
  handleNextClick=async()=>{
console.log("Next");
let url=`https://newsapi.org/v2/everything?q=apple&from=2026-07-07&to=2026-07-07&sortBy=popularity&apiKey=40144429488f4622b7604251d4ed7f7d&page=${this.state.page+1}`;;
    let data = await fetch(url);
    let parseData=await data.json()
    console.log(parseData);
    this.setState({articles:parseData.articles})
this.setState({
  page:this.state.page+1
})
  }
  
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsDaily - Top headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return  <div className="col-md-4" key={element.url}>
        <Newsitem  title={element.title?element.title.slice(0,45): " " } description={element.description?element.description.slice(0,88) : " " } imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        
          })}
           </div>
           <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1}type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
            <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
           </div>
        </div>
        
        
      
    )
  }
}



export default News
