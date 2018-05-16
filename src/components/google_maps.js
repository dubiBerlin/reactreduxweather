import React, { Component } from "react";

class GoogleMap extends Component {
  /* 2. Code innerhalb von componentDidMount() wird erst dann ausgeführt nachdem
    die Komponente in den DOM hinzugefügt wurde. */
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  /* 1. gibt ein leeres div zurück mit property ref. Über ref kann die
        Komponente auf das element zugreifen */
  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
