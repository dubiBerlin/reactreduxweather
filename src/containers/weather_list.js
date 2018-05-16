import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

export default class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hoved">
        <thead>
          <tr>
            <th>City</th>
          </tr>
        </thead>
        <tbody />
      </table>
    );
  }
}
