import React, { Component } from "react";
import Fetch from "./components/Fetch";
import Card from "./components/Card";
class App extends Component {
  render() {
    return (
      <div>
        <h2>Погода в Харькове </h2>

        <div>
          <Fetch
            url="https://api.openweathermap.org/data/2.5/forecast?q=Kharkiv&lang=ru&units=metric&mode=json&appid=c792484ade42380886f51003cfcaf04d"
           
            render={({ days }) => (
              <div>
                <ul>
                  {days.map((day, index, temp, description) => (
                    <Card
                      day={day}
                      key={index}
                      temp={temp}
                      descriptionOfFiveDays={description}
                    />
                  ))}
                </ul>
              </div>
            )}
          />
           <h2>Погода в Харькове сегодня </h2>
          <Fetch
            url="https://api.openweathermap.org/data/2.5/weather?q=Kharkiv&lang=ru&units=metric&mode=json&appid=c792484ade42380886f51003cfcaf04d"
            render={({ temperature, humidity, description }) => (
              <div>
                <ul>
                  <li>Температура: {temperature}</li>
                  <li>Влажность: {humidity}%</li>
                  <li>Облачность: {description}</li>
                </ul>
              </div>
            )}
          />{" "}
        </div>
      </div>
    );
  }
}

export default App;
