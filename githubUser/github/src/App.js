import React, { Component } from 'react';
import Header from './Header';
import User from './User';

class App extends Component {
  constructor() {
    super();
    this.state= {
      data: {}
    }
  }
  searchUser = (e) => {
    e.preventDefault();
    var userName = document.getElementById("userName").value;
    var url = `https://api.github.com/users/${userName}`;
    fetch(url).then(res => res.json()).then(d => 
      this.setState({
        data: d
      })
    )
  console.log(this.state.data);
  }
  render() {
    return (
      <div className="App">
        <Header searchUser={this.searchUser} />
        <User imgUrl={this.state.data.avatar_url} 
        name={this.state.data.name}
        Follower={this.state.data.followers} 
        Following={this.state.data.following} 
        Repos={this.state.data.public_repos}/>
      </div>
    );
  }
}

export default App;
