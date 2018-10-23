import React, { Component } from 'react';
import data from './data.json';
import Emoji from './Emoji';
import { Header, Search } from './Header';
 

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    }
    this.searchEmoji = this.searchEmoji.bind(this);
    console.log(data);
  }
  searchEmoji(e){
    var filteredData = data.filter(d => d.keywords.includes(e.target.value));
    this.setState({
      data: filteredData
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search searchEmoji = {this.searchEmoji} />
        {
          this.state.data.map(emo => <Emoji expression={emo.symbol} title={emo.title} />)
        }
      </div>
    );
  }
}


export default App;
