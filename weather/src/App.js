import React, { Component } from 'react';
import Header from './Header';
import Weather from './Weather';


class App extends Component {
  constructor() {
    super();
    this.state = {
    	value:'',
      data: {}
    }
  }
  handleChange = (e) => {
    var val = e.target.value
    this.setState({
      value: val
    })
  }
  fetchData = () => {
    const {value} = this.state; 
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=4710a957094b1e3c2becce65a2c3af72`)
    .then(res => res.json())
    .then(d => this.setState({
      data: d
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchData();
  }
  render() {
    let item;
    if(Object.keys(this.state.data).length === 0) {
           item = <div></div>
          } else {
            item = <Weather name={this.state.data.name} temp={this.state.data.main.temp} description={this.state.data.weather[0].description} temp_max={this.state.data.main.temp_max} />
          }
    return (
      <div className="App">
        <Header onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <main>
        {
          item
        }
        </main>
      </div>
    );
  }
}

export default App;
