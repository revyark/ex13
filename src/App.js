import React, { Component, useState } from "react";
import "./App.css";

const HelloReactWithJSX = () => <h1 className="title">Hello, React!</h1>;

const FruitList = () => {
  const fruits = ["Apple", "Banana", "Cherry"];
  return (
    <ul className="fruit-list">
      {fruits.map((fruit, index) => (
        <li key={index} className="fruit-item">{fruit}</li>
      ))}
    </ul>
  );
};

const StyledMessage = () => (
  <p className="styled-message">This is a styled message.</p>
);

const SumOfSquares = ({ num1, num2 }) => <p className="sum-result">{num1 ** 2 + num2 ** 2}</p>;

const Greeting = ({ isMorning }) => <p className="greeting">{isMorning ? "Good Morning" : "Good Evening"}</p>;

const CurrentDay = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return <p className="current-day">Today is {days[new Date().getDay()]}</p>;
};

const PrimeCheck = ({ number }) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  return <p className="prime-check">{number} is {isPrime(number) ? "a Prime Number" : "not a Prime Number"}</p>;
};

class TemperatureConverter extends Component {
  state = { temp: "", scale: "C" };

  handleChange = (e) => this.setState({ temp: e.target.value, scale: e.target.name });

  convertTemperature = () => {
    const { temp, scale } = this.state;
    if (isNaN(temp)) return "Invalid Input";
    return scale === "C"
      ? `${(temp * 9) / 5 + 32}°F`
      : `${((temp - 32) * 5) / 9}°C`;
  };

  render() {
    return (
      <div className="temp-converter">
        <input type="text" name="C" placeholder="Celsius" onChange={this.handleChange} className="input-box"/>
        <input type="text" name="F" placeholder="Fahrenheit" onChange={this.handleChange} className="input-box"/>
        <p className="converted-temp">Converted: {this.convertTemperature()}</p>
      </div>
    );
  }
}

const ReverseString = ({ text }) => {
  const reversed = text.split("").reverse().join("");
  return (
    <p className="reverse-result">
      {reversed} - {text === reversed ? "Palindrome" : "Not Palindrome"}
    </p>
  );
};

const RandomNumber = () => {
  const [number, setNumber] = useState(null);
  return (
    <div className="random-number">
      <button onClick={() => setNumber(Math.floor(Math.random() * 100) + 1)} className="random-btn">Generate Number</button>
      <p>{number !== null && `Random Number: ${number}`}</p>
    </div>
  );
};

const LeapYearCheck = ({ year }) => {
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return <p className="leap-year">{year} is {isLeapYear ? "a Leap Year" : "not a Leap Year"}</p>;
};

class UserGreeting extends Component {
  render() {
    return <h1 className="user-greeting">Hello, {this.props.firstName} {this.props.lastName}!</h1>;
  }
}

const App = () => {
  return (
    <div className="container">
      <HelloReactWithJSX />
      <FruitList />
      <StyledMessage />
      <SumOfSquares num1={3} num2={4} />
      <Greeting isMorning={true} />
      <CurrentDay />
      <PrimeCheck number={7} />
      <TemperatureConverter />
      <ReverseString text="React" />
      <RandomNumber />
      <LeapYearCheck year={2024} />
      <UserGreeting firstName="John" lastName="Doe" />
    </div>
  );
};

export default App;

