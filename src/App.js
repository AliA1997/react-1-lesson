import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newName: '',
      names: ['Tyler', 'Adam', 'Sally']
    };
    this.addName = this.addName.bind(this);
  }

  addName() {
    this.setState({
      names: [...this.state.names, this.state.newName]
    });
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>Hello this is my test because I'm not creative :-(</div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="my-list">
          <ul>
            {this.state.names.map(e => <li>{e}</li>)}
          </ul>
          Type your new name:
          <input onChange={e => this.setState({ newName: e.target.value })} value={this.state.newName} />
          <button onClick={this.addName}>Add name</button>
        </div>
      </div>
    );
  }
}

export default App;
