import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import MovieItem from '../MovieItem/MovieItem'

class App extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'GET_MOVIES' })
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">

        {this.props.reduxState.movies.map(movie =>
          <div key={movie.id} className="movie-container">
            <MovieItem movie={movie} />
          </div>
        )}


        {JSON.stringify(this.props.reduxState.movies, null, 2)}
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(App);
