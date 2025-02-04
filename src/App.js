import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default withRouter(App);