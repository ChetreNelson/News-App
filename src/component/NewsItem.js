import React from 'react'

const NewsItem = (props) =>{
  
 
    let {title,description,imgUrl,newsUrl,author,date,source}=props;
    return (
      <div>
        <div  className="card">
          <div style={
           { display:'flex',
             justifyContent:'flex-end',
             position:'absolute',
             right:'0'
          }
          }>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
  <img src={!imgUrl?"https://assets1.cbsnewsstatic.com/hub/i/r/2023/04/17/678bf04e-b218-4f64-9cfd-f8978496f31d/thumbnail/1200x630/e4a7ec7a77b1aab83f732e135cf41c89/compton-looting-video.png":imgUrl}  className="card-img-top" alt="..."/>
  <div  className="card-body">
  <h5 className="card-title">{title} </h5>
    <h5  className="card-title">{title}</h5>
    <p  className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"Unkown":author} on {new Date(date).toGMTString()}</small></p>

   
    <a href={newsUrl} rel={'noopener noreferrer'} target={'_blank'}className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )

}
export default NewsItem

