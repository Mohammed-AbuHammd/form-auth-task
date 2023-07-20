import React, { Component } from "react";
import './style.css'
export default class Typography extends Component {
  render() {
    const { variant, children } = this.props;
    switch (variant) {
      case "h1":
        return <h1 className={`t__${variant}`}>{children}</h1>;
      case "h2":
        return <h2 className={`t__${variant}`}>{children}</h2>;
      case "h3":
        return <h3 className={`t__${variant}`}>{children}</h3>;
      case "body1":
        return <p className={`t__${variant}`}>{children}</p>;
      case "body1-i":
        return <p className={`t__${variant}`}>{children}</p>;
      case "body2":
        return <h6 className={`t__${variant}`}>{children}</h6>;
      case "label":
        return <h6 className={`t__${variant}`}>{children}</h6>;
      case "err":
        return <h6 className={`t__${variant}`}>{children}</h6>;
      default:
        return <p className={`t__${variant}`}>{children}</p>;
    }
  }
}
