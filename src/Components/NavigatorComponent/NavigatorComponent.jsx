const NavigatorComponent = () => {
  return (
    <>
      <section
        className="header_inputs"
        style={
          darkStyle == true
            ? { backgroundColor: typeMode.darkMode.backgroundColor }
            : { backgroundColor: typeMode.lightMode.backgroundColor }
        }
      >
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
    </>
  );
};
