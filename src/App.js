import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Converter from "./Converter";
import vendors from "./Vendors";
import ComboBox from "./Dropdown";

export default class App extends Component {
  render() {
    return (
      <>
        <div className="header">
          <Header />
        </div>
        <div className="converter">
          <Converter vendors={vendors} />
          <ComboBox />
        </div>
      </>
    );
  }
}
