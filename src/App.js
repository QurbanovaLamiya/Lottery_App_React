import { Component, Fragment } from "react";
import "./App.css";
import Lottery from "./components/Lottery";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Lottery title="Lotto" />
        <Lottery title="Mini Daily" numBalls={4} maxNum={10} />
      </Fragment>
    );
  }
}

export default App;
