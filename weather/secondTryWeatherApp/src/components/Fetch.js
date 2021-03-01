import PropTypes from "prop-types";
import React from "react";
export default class Fetch extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
    //setState:PropTypes.func.isRequired Здесь я пыталась как-то упростить то колличество try-catch и вывести все в абстрактныо-универсальный тип. Что бы через этот Fetch можно было не только те условия выводить, а и любые другие. Я уверенна, что это как-то можно сделать, но я не знаю как
  };

  state = {
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    days: []
  };

  _fetch = async () => {
    const res = await fetch(this.props.url);
    const json = await res.json();
    try {
      this.setState({
        days: json.list.filter(reading => reading.dt_txt.includes("12:00:00"))
      });
    } catch (e) {
      if (e instanceof TypeError) {
        this.setState({
          temperature: json.main.temp,
          humidity: json.main.humidity,
          description: json.weather[0].description
        });
      } else {
        console.log(e);
      }
    }
  };

  componentDidMount() {
    this.setState(this._fetch);
  }

  render() {
    return this.props.render(this.state);
  }
}

