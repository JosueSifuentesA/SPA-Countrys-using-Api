import { useState } from "react";
import "./countryDetailComponent.css";

const CountryDetailComponent = ({ dataCountry, darkMode, dataFunction }) => {
  const country = dataCountry[0];

  const nativeNames = country.name.nativeName;

  const nativeNameList = Object.values(nativeNames)[0];

  const name = Object.values(nativeNameList)[0];

  console.log(country);

  const listOfLenguajes = [];
  const listOfCurrencies = [];
  let listOfBorders = [];

  Object.entries(country.languages).forEach(([keys, values]) => {
    listOfLenguajes.push(values + " ");
  });

  Object.entries(country.currencies).forEach(([keys, values]) => {
    listOfCurrencies.push(values.name);
  });

  if (country.borders != undefined || country.borders != null) {
    const bordersLength = Object.entries(country.borders).length;

    for (let i = 0; i < bordersLength; i++) {
      listOfBorders.push(country.borders[i]);
    }
  } else {
    listOfBorders.push("No borders");
  }

  return (
    <section
      style={
        darkMode == true
          ? { backgroundColor: "hsl(207, 26%, 17%)", color: "white" }
          : { backgroundColor: "hsl(0, 0%, 98%)", color: "black" }
      }
      className="detailSection"
    >
      <button
        style={
          darkMode == true
            ? { backgroundColor: "hsl(207, 26%, 17%)", color: "white" }
            : { backgroundColor: "hsl(0, 0%, 98%)", color: "black" }
        }
        className="detailSection_button"
        onClick={() => {
          dataFunction(false);
        }}
      >
        Regresar
      </button>
      <div className="detailSection_data">
        <img src={country.flags.png} className="data_flag" />
        <div className="data_stats">
          <div className="stats_container">
            <h1 className="stats_title">{country.name.official}</h1>

            <div className="stats_info">
              <div className="info_principalInfo">
                <span>
                  <strong>Native Name : </strong> {name}
                </span>
                <span>
                  <strong>Population : </strong>
                  {country.population}
                </span>
                <span>
                  <strong>Region : </strong>
                  {country.region}
                </span>
                <span>
                  <strong>Sub Region : </strong>
                  {country.subregion}
                </span>
                <span>
                  <strong>Capital : </strong>
                  {country.capital}
                </span>
              </div>

              <div className="info_secundaryInfo">
                <span>
                  <strong>Top Level Domain : </strong>
                  {country.tld}
                </span>
                <span>
                  <strong>Currencies : </strong>
                  {listOfCurrencies}
                </span>
                <span>
                  <strong>Languages : </strong>
                  {listOfLenguajes}
                </span>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <label>Border Countries</label>
            {listOfBorders.map((module) => {
              return (
                <div
                  style={
                    darkMode == true
                      ? {
                          backgroundColor: "hsl(209, 23%, 22%)",
                          color: "white",
                          padding: "5px 15px",
                          borderRadius: "10px",
                        }
                      : {
                          backgroundColor: "hsl(0, 0%, 100%)",
                          color: "black",
                          padding: "5px 15px",
                          borderRadius: "10px",
                        }
                  }
                >
                  {module}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetailComponent;
