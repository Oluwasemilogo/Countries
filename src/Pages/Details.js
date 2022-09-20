import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "./Context";

function Details() {
  let { country } = useParams();
  const [details, setDetails] = useState([]);
  const { country0 } = useContext(ThemeContext);

  useEffect(() => {
    const data = country0.filter(
      (c) => c.name.common.toLowerCase() === country.toLowerCase()
    );
    setDetails(...data);
  }, [country0]);

  return (
    <div>
      <h1>Hello world</h1>
      <Link to="/" className="return-link">
        <div className="return-btn">
          <button>Back</button>
        </div>
      </Link>
      <div className="details_content">
        <h3>{details?.name?.common}</h3>
        <img
          src={details?.flags?.png}
          alt=""
          style={{ height: "260px", width: "250px" }}
        ></img>
        <img
          src={details?.coatOfArms?.png}
          alt=""
          style={{ height: "50px", width: "50px" }}
        ></img>
      </div>
    </div>
  );
}

export default Details;
