import React, { Component } from "react";
import { connect } from "react-redux";

class WeatherList extends Component {
  // 4. definieren der renderWeather Funktion
  renderWeather(cityData) {
    return (
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
      </tr>
    );
  }

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
        {/*3. durchläuft die props weather und ruft die Funktion renderWeather
        // auf.*/}
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

// 1. importiert den app state
function mapStateToProps({ weather }) {
  return { weather }; // { weather } === { weather:weather }
}
// function mapStateToProps(state) {
//   return { weather: state.weather };
// }

// 2. fügt den state an die props dieses containers
export default connect(mapStateToProps)(WeatherList);
