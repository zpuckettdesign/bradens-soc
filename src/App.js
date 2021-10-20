import React from "react";
import "./App.css";
import Select from "./Select";
import Dropdown from './Dropdown';
import vendors from "./vendors.json";

export default function App() {
  return (
    <>
      <div className="App">
        <div className="select">
        <Select
        options={vendors} 
        name={vendors.name}
        prompt="Select Vendor..." />
        </div>
      </div>
    </>
  );
}
