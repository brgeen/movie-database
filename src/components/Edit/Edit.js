import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Edit extends Component {

    state = { // creating local state for handle event changes, and later sending to Saga for Axios PUT
        id: this.props.reduxState.movieDetails[0].id,
        title: this.props.reduxState.movieDetails[0].title,
        description: this.props.reduxState.movieDetails[0].description,
    }

    handleTitleInput = (event) => {
        this.setState({
            title: event.target.value,
        })
    }

    handleDescriptionInput = (event) => {
        this.setState({
            description: event.target.value,
        })
    }

    handleSubmit = () => {
        this.props.dispatch({ type: "EDIT_MOVIE", payload: this.state })
    }

    render() {
        return (
            <div className="App">
                {this.props.reduxState.movieDetails.map(movie => // mapping movie details to the DOM
                    <div key={movie.id} className="edit-movie-container">
                        <div className="movie-title-image-container">
                            <img src={movie.poster} alt={movie.title} />
                        </div>
                        <div>
                            <input
                                onChange={(event) => this.handleTitleInput(event)}
                                value={this.state.title}
                                type="text">
                            </input>
                        </div>
                        <div>
                            <textarea
                                rows="10"
                                cols="80"
                                type="text"
                                onChange={(event) => this.handleDescriptionInput(event)}
                                value={this.state.description}>
                            </textarea>
                        </div>
                        <div>
                        <Link to='/'><button onClick={() => this.handleSubmit()}>Submit</button></Link>
                        <Link to="/details"><button>Cancel</button></Link>
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

export default connect(mapStateToProps)(Edit);
