import React, { Component } from 'react'

const Newsitem =(props)=> {

  
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="card" >
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
            {source}
            <span class="visually-hidden"></span>
          </span></h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} className="btn btn-primary">Read More</a>
        </div>
      </div>
    )
  
}

export default Newsitem