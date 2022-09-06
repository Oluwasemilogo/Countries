import React from "react";
import "./CountryPage.css";

function CountryPage({ item }) {
  return (
    <div className="countries">
      <div className="countries_content">
        <img
          src={item.flags.png}
          alt={item.name.common}
          className="countries_img"
        />
        <div className="countries_content_details">
          <h2 className="country_name">{item.name.official}</h2>
          <div className="countries_details">
            <p className="countries_detail">
              Population:
              <span className="country_details_answers">{item.population}</span>
            </p>
            <p className="countries_detail">
              Region:
              <span className="country_details_answers">{item.region}</span>
            </p>
            <p className="countries_detail">
              Capital:
              <span className="country_details_answers">{item.capital}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
