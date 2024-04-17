import { useState } from 'react';
import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handlePlusClick = (count) => {
    this.setState({ count: this.state.count + 1 });
  };

  handleMiusClick = (count) => {
    this.setState({ count: this.state.count - 1 });
  };

  handleResetClick = (count) => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <br />
        <button onClick={this.handlePlusClick}>+</button>
        <button onClick={this.handleMiusClick}>-</button>
        <button onClick={this.handleResetClick}>Reset</button>
      </div>
    );
  }
}

export default App;
