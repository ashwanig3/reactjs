import React, { Component } from 'react';
import Color from './Bg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      R: 0,
      G: 0,
      B: 0
    }
    console.log(this.state)
  }
  Rchange = (e) => {
    this.setState({
      R: e.target.value
    })
    console.log(this.state)
  }
  Gchange = (e) => {
    this.setState({
      G: e.target.value
    })
  }
  Bchange = (e) => {
    this.setState({
      B: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <Color Rchange={this.Rchange} Gchange={this.Gchange} Bchange={this.Bchange}
        R={this.state.R} G={this.state.G} B={this.state.B} />
      </div>
    );
  }
}

export default App;
