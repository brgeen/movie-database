import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Details extends Component {

    render() {
        return (
            <div className="App">
                <Link to="/"><button>Back To List</button></Link>
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
