import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Edit extends Component {

    handleSubmit = () => {
        
        axios.put(`/edit`, {
            data: {
                id: 1,
                title: 'Avatar', 
                description: 'Movie about blue people and stuff',
                
            }
        });

    }


    render() {
        return (
            <div className="App">
                <h1>EDIT</h1>
                <Link to="/details"><button>Cancel</button></Link>
                <button onClick={() => this.handleSubmit() }>Submit</button>
                {this.props.reduxState.movieDetails.map(movie =>
                    <div key={movie.id} className="movie-container">
                        <div className="movie-title-image-container">

                            <input></input>
                            
                            <img src={movie.poster} alt={movie.title} />
                        </div>
                        <div className="movie-description-container">
                            <p>{movie.description}</p>
                        </div>
                    </div>
                )}
                <ul>
                {this.props.reduxState.movieGenres.map((genre, i) =>
                    <li key={i}>{genre.name}</li>
                    )}
                    </ul>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Edit);
