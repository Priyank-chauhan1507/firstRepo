import React, { Component } from 'react'

export class NewsItem extends Component {
  

  
  render() {
   let  {title , description ,ImgUrl , newsUrl,source} = this.props
    return (
      <div className ="my-3">
         
    
        <div className="card">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"40px"}}>{source}</span>
        
  <img src={!ImgUrl?"https://c.ndtvimg.com/2022-03/0e79gj4_hypersonic-missile_625x300_19_March_22.jpg":ImgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}.</p>
    <a href={newsUrl}  target ="_blank" className="btn  btn-sm btn-dark">Read more</a>
  </div>
</div>
     </div>
    )
  }
}

export default NewsItem
