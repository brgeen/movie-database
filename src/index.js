import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies)
    yield takeEvery('GET_MOVIE_DETAILS', getDetails)
    yield takeEvery('GET_MOVIE_GENRES', getGenres)
    yield takeEvery('EDIT_MOVIE', editMovie)
}

function* getMovies() {
    try {
        const movies = yield axios.get('/movies');
        yield put({ type: "SET_MOVIES", payload: movies.data });
    } catch (error) {
        console.log('Error in getMovies', error);
    }

}

function* getDetails(event) {
    try {
        const movies = yield axios.get(`/details`, {
            params: {
                id: event.payload
            }
        }); //, {data: event.payload}
        yield put({ type: "SET_MOVIE_DETAILS", payload: movies.data });
    } catch (error) {
        console.log('Error in getDetails', error);
    }

}

function* getGenres(event) {
    try {
        const movies = yield axios.get(`/genres`, {
            params: {
                id: event.payload
            }
        }); //, {data: event.payload}
        yield put({ type: "SET_MOVIE_GENRES", payload: movies.data });
    } catch (error) {
        console.log('Error in getGenres', error);
    }

}

function* editMovie(event) {

    yield axios.post(`/edit`, {
        data: {
            id: event.payload.id,
            title: event.payload.title,
            description: event.payload.description,
        }
    });
    yield put({ type: "GET_MOVIES" });

}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const movieDetails = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const movieGenres = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        movieGenres,
        movieDetails,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
