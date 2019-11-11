import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Details extends Component {


    render() {
        return (
            <div className="App">

                {this.props.reduxState.movieDetails.map(movie =>
                    <div key={movie.id} className="movie-container">
                        <div className="movie-title-image-container">
                            <h2>{movie.title}</h2>
                            <img src={movie.poster} alt={movie.title} />
                            <ul>
                                {this.props.reduxState.movieGenres.map((genre, i) =>
                                    <li key={i}>{genre.name}</li>
                                )}
                            </ul>
                        </div>
                        <div className="movie-description-container">
                            <p>{movie.description}</p>
                            
                            <Link to="/"><button>Back To List</button></Link>
                            <Link to="/edit"><button>Edit Movie</button></Link>
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
