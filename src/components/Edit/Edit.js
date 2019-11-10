import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Edit extends Component {



    state = {
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

        axios.put(`/edit`, {
            data: {
                id: this.state.id,
                title: this.state.title,
                description: this.state.description,
            }
        });

    }


    render() {


        return (
            <div className="App">
                <h1>EDIT</h1>
                <Link to="/details"><button>Cancel</button></Link>
                <Link to='/'><button onClick={() => this.handleSubmit()}>Submit</button></Link>
                {this.props.reduxState.movieDetails.map(movie =>
                    <div key={movie.id} className="movie-container">
                        <img src={movie.poster} alt={movie.title} />


                        <input
                            onChange={(event) => this.handleTitleInput(event)}
                            value={this.state.title}
                            type="text">
                        </input>

                        <textarea
                            rows="10"
                            cols="80"
                            type="text"
                            onChange={(event) => this.handleDescriptionInput(event)}
                            value={this.state.description}>
                        </textarea>




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
