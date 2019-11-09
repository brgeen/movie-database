import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

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
            <div className="movie-title-image-container">
              <h3>{movie.title}</h3>
              <img src={movie.poster} />
            </div>
            <div className="movie-description-container"></div>
            <p>{movie.description}</p>
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
