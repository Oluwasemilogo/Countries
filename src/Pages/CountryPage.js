import React from "react";

function CountryPage({ item }) {
  return (
    <div className="countries">
      <img
        src={item.flags.png}
        alt={item.name.common}
        className="recipecard_img"
      />
      <div className="countries_content">
        <h2 className="country_name">{item.name.official}</h2>
        <div className="countries_details">
          <p className="countries_population">Population:{item.population}</p>
          <p className="countries_region">Region:{item.region}</p>
          <p className="countries_capital">Capital:{item.capital}</p>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
