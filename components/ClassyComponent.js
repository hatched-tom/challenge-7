import React, { Component } from "react";

const ONE_DAY = 24 * 60 * 60 * 1000;

class ClassyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: `${new Date().getFullYear()}`,
    };
  }

  componentDidMount() {
    const now = Date.now();
    const tomorrow = new Date(now + ONE_DAY);
    tomorrow.setHours(0);
    tomorrow.setMinutes(0);
    tomorrow.setSeconds(0);
    tomorrow.setMilliseconds(0);

    const msTilTomorrow = tomorrow.getTime() - now;

    this.timeout = setTimeout(() => {
      this.tick();
      this.interval = setInterval(() => {
        this.tick();
      }, ONE_DAY);
    }, msTilTomorrow);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({ year: `${new Date().getFullYear()}` });
  };

  render() {
    return (
      <div className="number-wrapper">
        <div className="number">
          {this.state.year}
        </div>
      </div>
    );
  }
}

export default ClassyComponent;
