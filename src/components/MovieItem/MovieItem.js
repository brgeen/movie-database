import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'




class MovieItem extends Component {

    handleClick = () => {
        this.props.dispatch({ type: "GET_MOVIE_DETAILS", payload: this.props.movie.id })
        this.props.dispatch({ type: "GET_MOVIE_GENRES", payload: this.props.movie.id })
        this.props.history.push('/details')
    }
    render() {
        return (
            <>
                <div className="movie-title-image-container">
                    
                    <img src={this.props.movie.poster} alt={this.props.movie.title} onClick={() => this.handleClick()} />
                </div>
                <div className="movie-description-container">
                <h2>{this.props.movie.title}</h2>
                    <p>{this.props.movie.description}</p>
                </div>
            </>
        );
    }
}

export default withRouter(connect()(MovieItem));
