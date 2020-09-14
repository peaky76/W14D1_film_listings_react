import React, { Component } from "react";
import "../App.css";

class MoreLink extends Component {
  render() {
    return (
      <div className="more-link">
        <a href="https://www.imdb.com/calendar/?region=gb">
          More upcoming films >>>
        </a>
      </div>
    );
  }
}

export default MoreLink;
