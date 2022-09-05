import { useEffect, useState } from "react";
import "./App.css";
// import Forms from "./Components/Forms";
import CountryPage from "./Pages/CountryPage";

function App() {
  const [country, setCountry] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [country0, setCountry0] = useState([]);
  const [region0, setRegion0] = useState("Filter by Region");

  const onChangeHandler = (value) => {
    if (value) {
      let placeholder = [...country0];
      placeholder = placeholder.filter((place) =>
        place.name.official.toLowerCase().includes(value.toLowerCase())
      );
      setCountry(placeholder);
      return;
    }

    setCountry(country0);
  };

  const regionSwitch = (value) => {
    if (value) {
      let dropdown = [...region0];
      dropdown = dropdown.filter((drop) =>
        drop.region.toLowerCase().includes(value.toLowerCase())
      );
      setCountry(dropdown);
      return;
    }

    setCountry(region0);
  };

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    const api = await fetch("https://restcountries.com/v3.1/all");
    const data = await api.json();
    setCountry(data);
    setCountry0(data);
    setRegion0(data);
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
              <i className="fa-regular fa-moon"></i>
              {darkMode ? "Light" : "Dark"} Mode
            </p>
          </div>
        </div>
        <div className="forms">
          <form className="app_search">
            <input
              type="text"
              placeholder="Search for a Country"
              className="search_input"
              onInput={(e) => onChangeHandler(e.target.value)}
            />
          </form>
          <form className="region_section">
            <label htmlFor="Country Regions">
              Filter by Regions:
              <select
                className="app_regions"
                onChange={(e) => regionSwitch(e.target.value)}
              >
                {/* <option>Filter by Regions</option> */}
                <option>Africa</option>
                <option>America</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
              </select>
            </label>
          </form>
        </div>
        <div className="app_country">
          {country.map((item) => {
            return <CountryPage item={item} key={item.ccn3} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
