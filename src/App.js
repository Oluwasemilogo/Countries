import { useEffect, useState } from "react";
import "./App.css";
// import Header from "./Components/Header";
import CountryPage from "./Pages/CountryPage";

function App() {
  const [country, setCountry] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

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
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="App">
        <div className="header">
          <div className="header_txt">
            <h2>Where in the World?</h2>
          </div>
          <div className="theme_mode">
            <p className="app_theme" onClick={() => setDarkMode(!darkMode)}>
              <i class="fa-regular fa-moon"></i>Dark Mode
            </p>
          </div>
        </div>
        <div className="app_country">
          {country.map((item) => {
            return <CountryPage item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
