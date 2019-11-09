import React, { Component } from 'react';
import { connect } from 'react-redux'

class Details extends Component {

    render() {
        return (
            <div className="App">
                {this.props.reduxState.movieDetails.map(movie =>
                    <div key={movie.id} className="movie-container">
                        <div className="movie-title-image-container">
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} />
                        </div>
                        <div className="movie-description-container">
                            <p>{movie.description}</p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Details);
