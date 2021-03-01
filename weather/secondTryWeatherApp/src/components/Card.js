import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {
  // Props: day, key(index)

  render() {
    const ms = this.props.day.dt * 1000;
    const weekdayName = new Date(ms).toLocaleString("ru", { weekday: "long" });
    const imgURL =
      "wi wi-" + this.props.day.weather[0].id + " owf-5x icon-style";
    return (
      <div className="card">
        <h3 className="card-title">{weekdayName}</h3>
        <i className={imgURL}></i>
        <p>{Math.round(this.props.day.main.temp)} °C</p>
        <div className="card">
          <p>{this.props.day.weather[0].description}</p>
        </div>
      </div>
    );
  }
}
Card.propTypes = {
  day: PropTypes.object.isRequired,
  temp: PropTypes.array.isRequired,
  //description: PropTypes.string.isRequired
};
export default Card;
