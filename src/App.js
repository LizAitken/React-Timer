import React, { Component } from 'react';
import './App.css';
import Button from './button';
import Wrapper from './wrapper';

class App extends Component {
  state = {
    timer: 0
  };

  countdownInterval = 0;

  addTime = () => {
    let newTime = this.state.timer + 1;
    this.setState({
      timer: newTime
    });
  };

  startTimer = () => {
    this.countdownInterval = setInterval(this.addTime, 1000);
  }

  stopTimer = () => {
    clearInterval(this.countdownInterval);
  }

  resetTimer = () => {
    clearInterval(this.countdownInterval);
    this.setState({
      timer: 0
    });
  }

  render() {
    const { timer } = this.state;

    return (
      <div className="App">
        <Wrapper>
          <p>Timer: {timer}</p>
          <Button clickHandler={this.startTimer} name={"Start Timer"}/>
          <Button clickHandler={this.stopTimer} name={"Stop Timer"}/>
          <Button clickHandler={this.resetTimer} name={"Reset Timer"}/>
          {/* <button onClick={this.startTimer}>Start</button>
          <button onClick={this.stopTimer}>Stop</button>
          <button onClick={this.resetTimer}>Reset</button> */}
        </Wrapper>
      </div>
    );
  }
}

export default App;
