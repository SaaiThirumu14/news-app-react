import { useEffect, useState } from "react";
import React from "react";
import NewsItems from "./NewsItems";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  const news = async (country) => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setArticles(data.articles || []); // ✅ only store articles
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    news("us"); // ✅ fetch only once
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger fs-4">News</span>
      </h2>
      <div className="text-center my-3">
        <input
          type="text"
          className="form-control w-50 mx-auto text-center fs-4"
          placeholder="Enter text here..."
        />
      </div>
      <div className="text-center my-3">
        <button className="btn btn-danger fs-4 px-4">
          <span className="badge bg-light text-dark">Search</span>
        </button>
      </div>

      <div className="row">
        {articles.length > 0 ? (
          articles.map((val) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              key={val.url}
            >
              <NewsItems news={val} />
            </div>
          ))
        ) : (
          <p className="text-center">No articles available</p>
        )}
      </div>
    </div>
  );
};

export default NewsBoard;
