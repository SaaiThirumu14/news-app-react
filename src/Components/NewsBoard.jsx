import { useEffect, useState } from "react";
import React from "react";
import NewsItems from "./NewsItems";

const countries = [
  { code: "us", name: "USA" },
  { code: "in", name: "India" },
  { code: "gb", name: "UK" },
  { code: "ca", name: "Canada" },
  { code: "au", name: "Australia" },
  { code: "de", name: "Germany" },
  { code: "fr", name: "France" },
  { code: "jp", name: "Japan" },
  { code: "ru", name: "Russia" },
  { code: "br", name: "Brazil" },
];

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("us"); // default

  const news = async (countryCode) => {
    try {
      const url = `https://gnews.io/api/v4/top-headlines?token=${import.meta.env.VITE_API_KEY}&lang=en&country=${countryCode}&topic=${category}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setArticles(data.articles || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    news(selectedCountry);
  }, [category, selectedCountry]);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="p-3">
      <h2 className="text-center">
        Latest <span className="badge bg-danger fs-4">News</span>
      </h2>

      {/* Country Checkboxes */}
      <div className="d-flex flex-wrap justify-content-center mb-4 gap-2">
        {countries.map((c) => (
          <div key={c.code} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="country"
              value={c.code}
              id={c.code}
              checked={selectedCountry === c.code}
              onChange={handleCountryChange}
            />
            <label className="form-check-label" htmlFor={c.code}>
              {c.name}
            </label>
          </div>
        ))}
      </div>

      {/* News Articles */}
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
