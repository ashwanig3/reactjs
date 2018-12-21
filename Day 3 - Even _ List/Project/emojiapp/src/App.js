import React, { Component } from 'react';
import data from './data.json';
import Emoji from './components/Emoji';
import { Header, Search } from './components/Header';
 

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    }
    this.searchEmoji = this.searchEmoji.bind(this);
  }

  //Search Emoji method
  searchEmoji(e){
    var filteredData = data.filter(d => d.keywords.includes(e.target.value));
    this.setState({
      data: filteredData
    })
  }

  //copy Emoji
  copyEmoji = (e) => {
    e.preventDefault();
    const elm = e.target.firstChild;
    navigator.clipboard.writeText(elm.innerHTML)
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Search searchEmoji = {this.searchEmoji} />
        {
          this.state.data.map(emo => <Emoji expression={emo.symbol} title={emo.title}
          copyEmoji={this.copyEmoji} />)
        }
      </div>
    );
  }
}


export default App;
