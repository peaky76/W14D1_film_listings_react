import React, { Component } from "react";
import FilmInfo from "./FilmInfo";

class FilmList extends Component {
  render() {
    return (
      <div className="film-list">
        <h2>Films</h2>
        <FilmInfo></FilmInfo>
      </div>
    );
  }
}

export default FilmList;
