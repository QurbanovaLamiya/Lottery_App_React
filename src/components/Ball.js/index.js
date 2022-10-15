import { Component, Fragment } from "react";
import ballStyle from "./ball.module.css";
import PropTypes from "prop-types";

class Ball extends Component {
  render() {
    return (
      <Fragment>
        <div className={ballStyle.ball}>{this.props.num}</div>
      </Fragment>
    );
  }
}

Ball.propTypes = {
  num: PropTypes.number,
};

export default Ball;
