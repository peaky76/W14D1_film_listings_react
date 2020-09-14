import React, { Component } from "react";
import FilmInfo from "./FilmInfo";

class FilmList extends Component {
  render() {
    const filmNodes = this.props.films.map((film) => {
      return (
        <FilmInfo key={film.id} url={film.url}>
          {film.name}
        </FilmInfo>
      );
    });

    return (
      <ul className="film-list">
        <h2>Films</h2>
        {filmNodes}
      </ul>
    );
  }
}

export default FilmList;
