import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CartButton extends Component {
  render() {
    return (
      <div style={{ "position": "relative", "top": "2px" }}>
        <Link to="/cart">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
              fill="currentColor"
            />
            <path
              d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
              fill="currentColor"
            />
            <path
              d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
              fill="currentColor"
            />
          </svg>
          <div className="num-cart" style={{
            "position": 'absolute',
            "zIndex": "1",
            "background": "#000",
            "width": "17px",
            "height": "17px",
            "top": "-4px",
            "right": "-7px",
            "borderRadius": "100%",
            "color": "#fff",
            "fontSize": "0.7rem",
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
            "fontWeight": "bold"
            }}>4</div>
        </Link>        
      </div>
    );
  }
}
