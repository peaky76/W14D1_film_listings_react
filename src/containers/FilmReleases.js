import React, { Component } from "react";
import FilmList from "../components/FilmList";

class FilmReleases extends Component {
  render() {
    return (
      <>
        <h1>Latest UK film releases</h1>
        <FilmList></FilmList>
      </>
    );
  }
}

export default FilmReleases;
