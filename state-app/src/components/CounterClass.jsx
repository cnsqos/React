import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props){
    super(props);
    // 1. 상태를 정의
    this.state = {
      count : 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <h2>클래스 컴포넌트 카운터</h2>
        <p>현재 숫자: {this.state.count}</p>
        <button onClick={this.handleClick}>
          + 1 증가
        </button>
      </div>
    );
  }
}

export default CounterClass;