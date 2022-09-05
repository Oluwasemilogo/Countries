import { useEffect, useState } from "react";
import "./App.css";
import CountryPage from "./Pages/CountryPage";

function App() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    const api = await fetch("https://restcountries.com/v3.1/all");
    const data = await api.json();
    setCountry(data);
    console.log(data);
  };
  return (
    <div className="App">
      <h1>Countries</h1>
      <div className="app_country">
        {country.map((item) => {
          return <CountryPage item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
