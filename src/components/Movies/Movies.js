import React, { Component } from 'react';
import { connect } from 'react-redux'
import MovieItem from '../MovieItem/MovieItem'


class App extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_MOVIES' })
    }

    render() {
        return (
            <div className="App">
                {this.props.reduxState.movies.map(movie =>
                    <div key={movie.id} className="movie-container">
                        <MovieItem movie={movie} />
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(App);
