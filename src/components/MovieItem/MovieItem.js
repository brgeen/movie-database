import React, { Component } from 'react';
import { connect } from 'react-redux'

class MovieItem extends Component {

    handleClick = () => {
    

        this.props.dispatch({type: "GET_MOVIE_DETAILS", payload: this.props.movie.id})
        
    }

    render() {
        return (
            <>
                <div className="movie-title-image-container">
                    <h3>{this.props.movie.title}</h3>
                    <img src={this.props.movie.poster} alt={this.props.movie.title} onClick={() => this.handleClick()}/>
                </div>
                <div className="movie-description-container">
                    <p>{this.props.movie.description}</p>
                </div>
            </>
        );
    }
}

export default connect()(MovieItem);
