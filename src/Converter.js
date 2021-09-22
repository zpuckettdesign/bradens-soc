import React, { Component } from "react";
import vendors from "./Vendors";

export default class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    const result = vendors.find(({ name }) => name === this.state.value);
    const math = document.getElementById("cost").value;
    e.preventDefault();

    this.setState({value: result.markup * math});
  }

  render() {
    let vendors = this.props.vendors;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select Vendor:
          <select value={this.state.value} onChange={this.handleChange}>
            {vendors.map((item) => (
              <option key="id">{item.name}</option>
            ))}
          </select>
        </label>
        <input id="cost" type="number" />
        <input type="submit" value="Calculate" />
        <h4 value={this.state.value} >Sales Price: {this.state.value}</h4>
      </form>
    );
  }
}

