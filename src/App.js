import React from "react";

// function component ----> class component
class App extends React.Component {
  state = {
    count: 0,
  };
  //   setState를 사용하는 이유- state에 변화를 줌(=new state 반환)과 동시에 render functiond이 호출될 수 있도록 하기 위해
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("I'm updated");
  }

  render() {
    console.log("I am rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
