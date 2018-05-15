import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };

    // Methode onInputchange wird an die Component gebunden
    this.onInputChange = this.onInputChange.bind(this);
    //  this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // Methode setzt den State "term" der in den value des input fields gesetzt wird
  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  // blocks the browser to send a request to the server when user tries to submi the form
  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}
