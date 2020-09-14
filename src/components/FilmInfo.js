import React, { Component } from "react";

class FilmInfo extends Component {
  render() {
    return (
      <li className="film">
        <a href={this.props.url}>{this.props.children}</a>
      </li>
    );
  }
}

export default FilmInfo;
