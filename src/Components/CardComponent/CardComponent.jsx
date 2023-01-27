import "./cardComponent.css";

const CardComponent = ({
  population,
  region,
  capital,
  name,
  image,
  darkMode,
}) => {
  const typeMode = {
    darkMode: {
      backgroundColor: "hsl(209, 23%, 22%)",
      color: "white",
      filter: "drop-shadow(black 2px 6px 3px)",
    },
    lightMode: {
      backgroundColor: "hsl(0, 0%, 100%)",
      color: "black",
      filter: "drop-shadow(gray 2px 6px 3px)",
    },
  };

  return (
    <div
      className={"componentContainer"}
      style={
        darkMode == true
          ? {
              backgroundColor: typeMode.darkMode.backgroundColor,
            }
          : {
              backgroundColor: typeMode.lightMode.backgroundColor,
            }
      }
    >
      <img className="componentContainer_flag" src={image} />
      <div className="componentContainer_info">
        <label
          className="info_name"
          style={
            darkMode == true
              ? { color: "white" }
              : { color: typeMode.lightMode.color }
          }
        >
          {name}
        </label>
        <div>
          <span
            className="info_Text infoText__Population"
            style={
              darkMode == true
                ? { color: typeMode.darkMode.color }
                : { color: typeMode.lightMode.color }
            }
          >
            <strong>Population:</strong> {population}
          </span>
          <span
            className="info_Text infoText__Region"
            style={
              darkMode == true
                ? { color: typeMode.darkMode.color }
                : { color: typeMode.lightMode.color }
            }
          >
            <strong>Region:</strong> {region}
          </span>
          <span
            className="info_Text infoText__Capital"
            style={
              darkMode == true
                ? { color: typeMode.darkMode.color }
                : { color: typeMode.lightMode.color }
            }
          >
            <strong>Capital:</strong> {capital}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
