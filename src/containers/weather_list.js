import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hoved">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody />
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // { weather } === { weather:weather }
}
// function mapStateToProps(state) {
//   return { weather: state.weather };
// }

export default connect(mapStateToProps)(WeatherList);
