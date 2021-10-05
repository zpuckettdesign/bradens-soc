import React from "react";
import "./App.css";
import Header from "./Header";

import vendors from "./vendors.json";
import Select from "./Select";

export default function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Select options={vendors} prompt="Vendor" />
      </div>
    </>
  );
}
