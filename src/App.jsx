import { useEffect, useState } from "react";
import CountryListComponent from "./Components/CountryListComponent/CountryListComponent.jsx";
import "./root.css";

const App = () => {
  return (
    <main className="main">
      <CountryListComponent darkMode={false}></CountryListComponent>
    </main>
  );
};

export default App;
