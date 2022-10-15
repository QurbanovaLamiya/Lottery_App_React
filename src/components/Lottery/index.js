import { Component } from "react";
import Ball from "../Ball.js";
import lotteryStyle from "./lottery.module.css";
import PropTypes from "prop-types";

class Lottery extends Component {
  static defaultProps = {
    numBalls: 6,
    maxNum: 40,
  };
  constructor(props) {
    super(props);

    this.state = {
      nums: Array.from({ length: this.props.numBalls }),
    };

    // this.generate = this.generate.bind(this)
  }

  generate() {
    this.setState({
      nums: this.state.nums.map(
        () => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    });
  }

  render() {
    return (
      <div className={lotteryStyle.lottery}>
        <h1 className={lotteryStyle.title}>{this.props.title}</h1>
        <div className={lotteryStyle.lottoBall}>
          {this.state.nums.map((num, index) => (
            <Ball key={`nums-index-${index}`} num={num} />
          ))}
        </div>
        <button className={lotteryStyle.button} onClick={() => this.generate()}>
          Generate
        </button>
      </div>
    );
  }
}

Lottery.propTypes = {
  title: PropTypes.string,
  numBalls: PropTypes.number,
  maxNum: PropTypes.number,
};

export default Lottery;
