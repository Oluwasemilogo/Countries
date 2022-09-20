import { useContext, useEffect, useState } from "react";
import "./Home.css";
import CountryPage from "./CountryPage";
import Header from "./Header";
import { ThemeContext } from "./Context";

function Home() {
  const [country, setCountry] = useState([]);
  const [region0, setRegion0] = useState("Filter by Region");
  const { isToggle, country0 } = useContext(ThemeContext);

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
    setCountry(country0)
    setRegion0(country0)
  }, [country0]);

;

  return (
    <div className={isToggle ? "light-mode" : "dark-mode"}>
      <div className="App">
        <Header />

        <div className="forms">
          <form className="app_search">
            <input
              type="text"
              placeholder="Search for a Country"
              className={`search_input ${
                isToggle ? "light-mode" : "dark-mode"
              }`}
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
            return <CountryPage key={item.ccn3} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
