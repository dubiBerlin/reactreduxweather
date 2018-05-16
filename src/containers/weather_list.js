import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";

class WeatherList extends Component {
  // 4. definieren der renderWeather Funktion
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather =>
      (weather.main.temp - 273).toFixed(2)
    );
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    console.log(temps);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="orange" />
        </td>
        <td>
          <Chart data={pressures} color="red" />
        </td>
        <td>
          <Chart data={humidity} color="blue" />
        </td>
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
