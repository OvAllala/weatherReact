import React from "react";
import Card from "./components/Card";
const API_KEY = "c792484ade42380886f51003cfcaf04d";
const API_URL = "https://api.openweathermap.org";
//https://github.com/Ov-Allala/secondTryWeatherApp вторая попытка упорядочнить код. 
class App extends React.Component {
  state = {
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    days: []
    
}
  componentDidMount = async () => {
    try {
      const api_call = await fetch(
        `${API_URL}/data/2.5/weather?q=Kharkiv&lang=ru&units=metric&mode=json&appid=${API_KEY}`
      );
      const data = await api_call.json();
      const api = await fetch(
        `${API_URL}/data/2.5/forecast?q=Kharkiv&lang=ru&units=metric&mode=json&appid=${API_KEY}`
      );
      const dataforFiveDays = await api.json();
      const dailyData = dataforFiveDays.list.filter(reading =>
        reading.dt_txt.includes("12:00:00")
      );

      this.setState({
        days: dailyData,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description
      });
    } catch (err) {
      console.log("ERROR  " + err.name);
    }
  };
  formatCards = () => {
    return this.state.days.map((day, index) => <Card day={day} key={index} />);
  };
  render() {
    return (
      <div><h2>ПОГОДА В ХАРЬКОВЕ</h2>
      <div className="weather__info">
        <p>Текущая Температура:{this.state.temperature}°C</p>
        <p>Текущая Влажность:{this.state.humidity}%</p>
        <p>Текущая Облачность:{this.state.description}</p>
        {this.formatCards()}
      </div></div>
    );
  }
}

export default App;
