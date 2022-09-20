import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "./Context";
import "./Details.css";
import Header from "./Header";

function Details() {
  let { country } = useParams();
  const [details, setDetails] = useState([]);
  const { country0, isToggle } = useContext(ThemeContext);

  useEffect(() => {
    const data = country0.filter(
      (c) => c.name.common.toLowerCase() === country.toLowerCase()
    );
    setDetails(...data);
  }, [country0]);

  return (
    <div className={`details ${isToggle ? "light-mode" : "dark-mode"}`}>
      <Header />
      <Link to="/" className="return-link">
        <div>
          <button
            className={`return-btn ${isToggle ? "light-mode" : "dark-mode"}`}
          >
            <i className="fa-solid fa-arrow-left"></i> Back
          </button>
        </div>
      </Link>
      <div className="details_content">
        <img src={details?.flags?.png} alt="" className="details_img"></img>
        <div className="details_txt_content">
          <h3 className="details_name">{details?.name?.official}</h3>
          <div className="other">
            <div className="other1">
              <h4 className="details_other1_content">
                Native name:{details?.name?.common}
              </h4>
              <h4 className="details_other1_content">
                Population:{details?.population}
              </h4>
              <h4 className="details_other1_content">
                Region:{details?.region}
              </h4>
              <h4 className="details_other1_content">
                Sub Region:{details?.subregion}
              </h4>
              <h4 className="details_other1_content">
                Capital:{details?.capital}
              </h4>
            </div>

            <div className="other2">
              <h4 className="details_other1_content">
                Top Level Domain:{details?.tld}
              </h4>
              <h4 className="details_other1_content">
                Currencies:{details?.currencies?.name}
              </h4>
              {/* <h4 className="details_other1_content">
                Languages:{details?.languages}
              </h4> */}
            </div>
          </div>
          <div className="details_border">
            <h4>Border Countries:</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
