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
            <p className="countries_population">Population:{item.population}</p>
            <p className="countries_region">Region:{item.region}</p>
            <p className="countries_capital">Capital:{item.capital}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
