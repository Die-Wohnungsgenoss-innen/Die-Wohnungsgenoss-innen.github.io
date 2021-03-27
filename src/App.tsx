import logo from './logo.svg';
import './App.css';
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
      <ApartmentTable apartments={apartments} />
    </div>
  );
}

export default App;
