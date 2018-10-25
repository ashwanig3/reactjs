import React, { Component } from 'react';
import Font from './Text';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  changeFont = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <input type="text" className="input-box" onChange={this.changeFont} placeholder="write something here..." />
        <Font value={this.state.input} />
      </div>
    );
  }
}

export default App;
