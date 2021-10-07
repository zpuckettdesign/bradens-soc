import React from "react";
import "./App.css";
import Header from "./Header";
import Select from "./Select";
import vendors from "./vendors.json";




export default function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="select">
        <Select options={vendors} 
        name={vendors.name} />
        </div>
      </div>
    </>
  );
}
