import React, { Component } from 'react';
import { connect } from 'react-redux'

class MovieItem extends Component {

    render() {
        return (
            <>
                <div className="movie-title-image-container">
                    <h3>{this.props.movie.title}</h3>
                    <img src={this.props.movie.poster} alt={this.props.movie.title} />
                </div>
                <div className="movie-description-container">
                    <p>{this.props.movie.description}</p>
                </div>
            </>
        );
    }
}

export default connect()(MovieItem);
