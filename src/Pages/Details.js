import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Details() {
  let params = useParams();
  const [details, setDetails] = useState([]);
  const getDetails = async () => {
    const api = await fetch(
      `https://restcountries.com/v3.1/name/${params.name}`
    );
    const data = await api.json();
    setDetails(data[0]);
    console.log(data[0]);
  };
  useEffect(() => {
    getDetails();
  }, [params.name]);

  return (
    <div>
      <h1>Hello world</h1>
      <Link to="/" className="return-link">
        <div className="return-btn">
          <button>Back</button>
        </div>
      </Link>
      <div className="details_content">
        <h1>{details.name.official}</h1>
      </div>
    </div>
  );
}

export default Details;
