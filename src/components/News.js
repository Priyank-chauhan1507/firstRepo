import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class News extends Component {
  static dafaultProps= {
    country:'in',
    pageSize:6,
    
    category:'general',
  }
  static propTypes ={
    country: PropTypes.string,
    PageSize: PropTypes.number,
    category: PropTypes.string,
  }
   
 
 
  
  constructor(){
    super();
    this.state ={
      articles: [],
      loading: false,
      page:1,
      load: true
    }
  }
   async componentDidMount(){
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6e84e60b506340a5b6b2799ab54bf6e7&page=1&pageSize=6`
    let data = await fetch(url);
    let parsedData =  await data.json();
    
    this.setState({articles: parsedData.articles, 
                        load: false})
  }
  handleprevClick =async()=>{
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6e84e60b506340a5b6b2799ab54bf6e7&page=${this.state.page-1}&pageSize=6`
    this.setState({load:true})
  let data = await fetch(url);
  let parsedData =  await data.json();
  
  this.setState({articles: parsedData.articles,
                    page: this.state.page-1,
                     load:false })

  }
  handlenextClick = async()=>{
  
  let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6e84e60b506340a5b6b2799ab54bf6e7&page=${this.state.page+1}&pageSize=6`
    this.setState({load:true})
  let data = await fetch(url);
  let parsedData =  await data.json();
  
  this.setState({articles: parsedData.articles,
                    page: this.state.page+1,
                  load:false })

}
  render() {
    return (
      <div className ="container my-2">
        
        <h2 className= "text-center">Top headlines on {this.props.category} category</h2>
        {this.state.load && <Spinner/>}
        
        <div className ="row">
       { !this.state.load && this.state.articles.map((element)=>{return <div className ="col-md-4" key = {element.url}>
        <NewsItem title ={element.title} description ={element.description} ImgUrl = {element.urlToImage} newsUrl ={element.url} source ={element.source.name}/>
      </div> })}
        
       </div>
      <div className ="container d-flex justify-content-between">
          <button  disabled ={this.state.page<=1}type="button" className="btn btn-dark" onClick ={this.handleprevClick}> &larr; previous</button>
         <button disabled ={this.state.page==7} type="button" className="btn btn-dark" onClick = {this.handlenextClick}>next &rarr;</button>
  

    </div>
        </div>

        
      
    )
  }
}

export default News
