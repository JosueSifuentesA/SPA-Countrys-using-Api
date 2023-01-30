import { useState } from "react";
import "./countryDetailComponent.css";

const CountryDetailComponent = ({ dataCountry, darkMode, dataFunction }) => {
  const country = dataCountry[0];

  const nativeNames = country.name.nativeName;

  const nativeNameList = Object.values(nativeNames)[0];

  const name = Object.values(nativeNameList)[0];

  console.log(country);

  const [componentSelected, setComponentSelected] = useState(false);

  return (
    <section
      style={
        darkMode == true
          ? { backgroundColor: "hsl(207, 26%, 17%)", color: "white" }
          : { backgroundColor: "hsl(0, 0%, 100%)", color: "black" }
      }
      className="detailSection"
    >
      <button
        style={
          darkMode == true
            ? { backgroundColor: "hsl(207, 26%, 17%)", color: "white" }
            : { backgroundColor: "hsl(0, 0%, 100%)", color: "black" }
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
                  {country.currencies?.name}
                </span>
                <span>
                  <strong>Languages : </strong>
                  {country.languaje}
                </span>
              </div>
            </div>
          </div>
          <label>Border Countries</label>
        </div>
      </div>
    </section>
  );
};

export default CountryDetailComponent;
