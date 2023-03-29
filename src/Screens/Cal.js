import React, { Component } from "react";
import "./Cal.js";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "0",
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    debugger;
    const value = event.target.value;
    const { input } = this.state;

    switch (value) {
      case "C":
        this.setState({ input: "0" });
        break;
        case "CE":
            if (typeof input === "string") {
                this.setState({ input: input.slice(0, -1) });
            }
            break;
        case "AC":
    this.setState({ input: "" });
    break;
      case "=":
        this.setState({ input: eval(input) });
        break;
      default:
        if (input === "0") {
          this.setState({ input: value });
        } else {
          this.setState({ input: input + value });
        }
    }
  }

  render() {
    const { input } = this.state;

    return (
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="buttons">
          <button onClick={this.handleButtonClick} value="7">
            7
          </button>
          <button onClick={this.handleButtonClick} value="8">
            8
          </button>
          <button onClick={this.handleButtonClick} value="9">
            9
          </button>
          <button onClick={this.handleButtonClick} value="/">
            /
          </button>
          <button onClick={this.handleButtonClick} value="4">
            4
          </button>
          <button onClick={this.handleButtonClick} value="5">
            5
          </button>
          <button onClick={this.handleButtonClick} value="6">
            6
          </button>
          <button onClick={this.handleButtonClick} value="*">
            *
          </button>
          <button onClick={this.handleButtonClick} value="1">
            1
          </button>
          <button onClick={this.handleButtonClick} value="2">
            2
          </button>
          <button onClick={this.handleButtonClick} value="3">
            3
          </button>
          <button onClick={this.handleButtonClick} value="-">
            -
          </button>
          <button onClick={this.handleButtonClick} value="0">
            0
          </button>
          <button onClick={this.handleButtonClick} value=".">
            .
          </button>
          <button onClick={this.handleButtonClick} value="+">
            +
          </button>
          <button onClick={this.handleButtonClick} value="CE">
            CE
          </button>
          <button onClick={this.handleButtonClick} value="AC">
            AC
          </button>
          <button onClick={this.handleButtonClick} value="=">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;