import React, { Component } from "react";
import FilmList from "../components/FilmList";

class FilmReleases extends Component {
  constructor() {
    super();
    this.state = {
      films: [{}],
    };
  }
  render() {
    return (
      <>
        <h1>Latest UK film releases</h1>
        <FilmList films={this.state.films}></FilmList>
      </>
    );
  }
}

export default FilmReleases;
