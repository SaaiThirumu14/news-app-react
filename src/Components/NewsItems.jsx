import React from "react";
import image from "../assets/images.png"

const NewsItems = ({news}) => {
  return (
    <div>
      <div className="card bg-dark text-light mb-3 d-inline-block my-2 mx-1 px-1 py-2" style={{maxWidth:"340px"
      }}>
        {news.urlToImage ? (
  <img
    src={news.urlToImage}
    alt={news.title}
    className="card-img-top"
  />
) : (
  <img
    src={image}
    alt="No preview available"
    className="card-img-top"
  />
)}
        <div className="card-body">
          <h5 className="card-title">{news.title.slice(0.50)}</h5>
          <p className="card-text">
            {news.description}
          </p>
          <a href={news.url} className="btn btn-primary">
          Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
