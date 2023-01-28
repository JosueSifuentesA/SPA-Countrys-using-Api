import "../../root.css";
import { useEffect, useState } from "react";
import CardComponent from "../CardComponent/CardComponent";
import iconMoon from "../../assets/moon.svg";
import iconSun from "../../assets/sun.svg";

const CountryListComponent = () => {
  const typeMode = {
    darkMode: {
      backgroundColor: "hsl(207, 26%, 17%)",
      color: "white",
      backgroundColorNav: "hsl(209, 23%, 22%)",
    },
    lightMode: {
      backgroundColor: "hsl(0, 0%, 96%)",
      color: "black",
      backgroundColorNav: "white",
    },
  };

  const URL_API_ALLCOUNTRYS = "https://restcountries.com/v3.1/all";
  const URL_API_REGIONS = `https://restcountries.com/v3.1/region/`;

  const [countryList, setCountryList] = useState();
  const [region, setRegion] = useState();
  const [nameCountry, setNameCountry] = useState();
  const [dataName, setDataName] = useState();
  const [notFound, setNotFound] = useState(false);

  const [darkStyle, setDarkStyle] = useState(true);
  const [darkIcon, setDarkIcon] = useState(true);
  const [iconSelected, setIconSelected] = useState(iconMoon);
  const [styleModeText, setStyleModeText] = useState("Light Mode");

  const callApi = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountryList(data);
      })
      .catch((err) => {
        console.log("ERROR API NOT FOUND " + err);
        setNotFound(true);
      });
  };

  useEffect(() => {
    callApi(URL_API_ALLCOUNTRYS);
  }, []);

  useEffect(() => {
    console.log(region);
    if (!region) return;
    if (region == "Filter by region") return;
    callApi(`${URL_API_REGIONS}${region}`);
  }, [region]);

  useEffect(() => {
    console.log(nameCountry);
    if (!nameCountry) return;
    callApi(`https://restcountries.com/v3.1/name/${nameCountry}`);
  }, [nameCountry]);

  const handleIcons = () => {
    if (darkIcon == true) {
      setIconSelected(iconSun);
      setStyleModeText("Light Mode");
    } else {
      setIconSelected(iconMoon);
      setStyleModeText("Dark Mode");
    }
  };

  useEffect(() => {
    handleIcons();
  }, [darkIcon]);

  useEffect(() => {
    console.log("rendered");
  }, [countryList]);

  const dataReciever = (data) => {
    setDataName(data);
    setModule(moduleTwo);
    //console.log(dataName);
  };

  return (
    <>
      <header
        className="main_header"
        style={
          darkStyle == true
            ? { backgroundColor: typeMode.darkMode.backgroundColor }
            : { backgroundColor: typeMode.lightMode.backgroundColor }
        }
      >
        <nav
          className="header_nav"
          style={
            darkStyle == true
              ? { backgroundColor: typeMode.darkMode.backgroundColorNav }
              : { backgroundColor: typeMode.lightMode.backgroundColorNav }
          }
        >
          <label
            className="nav_title"
            style={
              darkStyle == true
                ? { color: typeMode.darkMode.color }
                : { color: typeMode.lightMode.color }
            }
          >
            Where in the world?
          </label>
          <div style={{ display: "flex", gap: "5px" }}>
            <img style={{ width: "20px", height: "20px" }} src={iconSelected} />
            <label
              onClick={() => {
                setDarkStyle(!darkStyle);
                setDarkIcon(!darkIcon);
              }}
              className="nav_mode"
              style={
                darkStyle == true
                  ? { color: typeMode.darkMode.color }
                  : { color: typeMode.lightMode.color }
              }
            >
              {styleModeText}
            </label>
          </div>
        </nav>

        <section className="header_inputs">
          <input
            onChange={(e) => {
              setNameCountry(e.target.value);
            }}
            className="inputs_search"
            style={
              darkStyle == true
                ? {
                    backgroundColor: typeMode.darkMode.backgroundColor,
                    color: typeMode.darkMode.color,
                  }
                : {
                    backgroundColor: typeMode.lightMode.backgroundColor,
                    color: typeMode.lightMode.color,
                  }
            }
            type="text"
            placeholder="Search for country..."
          />
          <select
            className="inputs_selection"
            style={
              darkStyle == true
                ? {
                    backgroundColor: typeMode.darkMode.backgroundColor,
                    color: typeMode.darkMode.color,
                  }
                : {
                    backgroundColor: typeMode.lightMode.backgroundColor,
                    color: typeMode.lightMode.color,
                  }
            }
            name="Region"
            onChange={(e) => {
              setRegion(e.target.value);
            }}
          >
            <option>Filter by region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </section>
      </header>

      {countryList && notFound == false && (
        <div
          className="main_cardContainer"
          style={
            darkStyle == true
              ? {
                  backgroundColor: typeMode.darkMode.backgroundColor,
                  color: typeMode.darkMode.color,
                }
              : {
                  backgroundColor: typeMode.lightMode.backgroundColor,
                  color: typeMode.lightMode.color,
                }
          }
        >
          {countryList.map((module, index) => {
            return (
              <CardComponent
                dataFunction={dataReciever}
                key={`component_${index}`}
                darkMode={darkStyle}
                image={module.flags.png}
                name={module.name.common}
                region={module.region}
                capital={module.capital}
                population={module.population}
              />
            );
          })}
        </div>
      )}

      {notFound == true && <h1>Pais no encontrado</h1>}
    </>
  );
};

export default CountryListComponent;
