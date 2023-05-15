import React, { Component } from "react";

export class Timerclass extends Component {
  constructor(props) {
    super(props);
    this.countRef = React.createRef();

    this.state = {
      setTimer: 0,
      setIsActive: false,
      setIsPaused: false,
    };
  }
  formatTime = (timer) => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };
  handleStart = () => {
    this.setState({ setIsActive: true });
    this.setState({ setIsPaused: true });
    this.countRef.current = setInterval(() => {
      this.setState({ setTimer: this.state.setTimer + 1 });
    }, 1000);
  };
  handlePause = () => {
    clearInterval(this.countRef.current);
    this.setState({ setIsPaused: false });
  };

  render() {
    return (
      <div>
        <div>
          <div className="app">
            <h3>React Stopwatch</h3>
            <div className="stopwatch-card">
              <p>{this.formatTime(this.state.setTimer)}</p>
              <div className="buttons">
                {/* {!isActive && !isPaused ? (
                  <button onClick={handleStart}>Start</button>
                ) : isPaused ? (
                  <button onClick={handlePause}>Pause</button>
                ) : (
                  <button onClick={handleResume}>Resume</button>
                )}
                <button onClick={handleReset} disabled={!isActive}>
                  Reset
                </button> */}
                <button onClick={this.handleStart}>Handler Start</button>
                <button onClick={this.handlePause}>Handler Pause</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Timerclass;
