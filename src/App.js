import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Converter from "./Converter";
import vendors from './Vendors'


export default class App extends Component {
  render() {
  return (
    <div className="header">
      <Header />
      <Converter vendors={vendors} />
    </div>
  );
}
}
