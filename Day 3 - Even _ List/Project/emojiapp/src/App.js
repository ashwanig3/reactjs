import React, { Component } from 'react';
import data from './data.json';
import Emoji from './Emoji';
import Header from './Header';
 

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Header />
        {
          data.map(emo => <Emoji expression={emo.symbol} title={emo.title} />)
        }
      </div>
    );
  }
}

export default App;
