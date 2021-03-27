import './App.css'
import { IApartment } from "./Interfaces"
import { ApartmentTable } from './Components/ApartmentTable';
import React from "react"

const { useEffect, useState } = React;

function App() {
  const [apartments, setApartments] = useState<IApartment[]>([])

  useEffect(() => {
    async function loadData() {
      const resp = await fetch("../data.json");
      const apartmentData = await resp.json();
      setApartments(apartmentData)
    }


    loadData();
    
  }, [])

  return (
    <div className="App">
      <div className="header">
        <h1>☭ die wohnungsgenoss*innen</h1>
      </div>
      <ApartmentTable style={{width: "70%", height: "800px", background: "rgba(255,255,255, 0.8)"}} apartments={apartments} />
    </div>
  );
}

export default App;
