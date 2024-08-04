import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/ImageCard.css";
import { ImageCardProps } from "./imageCardProps";

class Imagecard extends Component<ImageCardProps> {
  render() {
    const { imagee, title, text, buttonText, path } = this.props;

    return (
      <div className="card">
        <div>
          <img src={imagee} alt={title} className="image" />
        </div>
        <div className="card1">
          <h3 className="title">{title}</h3>
          <p className="text">{text}</p>
          <Link to={path}>
            <button>{buttonText}</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Imagecard;