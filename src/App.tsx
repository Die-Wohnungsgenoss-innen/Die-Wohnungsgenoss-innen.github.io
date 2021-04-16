import "./App.css";
import { IApartment } from "./Interfaces";
import React from "react";
import { Apartment } from "./Components/Apartment";

const { useEffect, useState } = React;

function App() {
  const [apartments, setApartments] = useState<IApartment[]>([]);

  useEffect(() => {
    async function loadData() {
      const resp = await fetch("../data.json");
      const apartmentData = await resp.json();
      console.log(apartmentData);

      setApartments(apartmentData);
    }

    loadData();
  }, []);

  return (
    <div className="App">
        <div className="header">
      <div className="wrapper">
          <h1>
            <span>☭</span> die wohnungsgenoss*innen
          </h1>
        </div>
      </div>
      <div className="apartment-container">
        {apartments.map((apartment) => (
          <Apartment {...apartment} />
        ))}
      </div>
    </div>
  );
}

export default App;
