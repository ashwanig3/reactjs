import React, { Component } from 'react';
import Card from './Card';
import Header from './Header'

class App extends Component {

  constructor(props) {
    super(props);
    this.state= {
      movies: []
    }
    
  }


  componentWillMount() {
    fetch("https://yts.am/api/v2/list_movies.json")
        .then(res => res.json())
        .then(json => this.setState({
          movies : json.data.movies
        }))
  }

  render() {
    const {title_english, medium_cover_image } = this.props
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
        {
          this.state.movies.map(movie => <Card name={movie.title_english} 
            src={movie.medium_cover_image} />)
        }
        </div>
      </div>
    );
  }
}

export default App;
