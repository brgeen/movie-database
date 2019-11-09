import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom';
import Details from '../Details/Details'
import Movies from '../Movies/Movies'


class App extends Component {



  render() {
    return (
      <Router>
        <div className="App">

          <Route path="/" exact component={Movies} />
          <Route path="/details" component={Details} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
