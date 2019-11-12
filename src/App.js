import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [],
      selectedProduct: {}
    }
  }

  componentDidMount() {
    this.getInventory()
  }

  getInventory = () => {
    axios
      .get('/api/inventory')
      .then(res => this.setState({ inventory: res.data }))
      .catch(err => console.log(err))
  }

  selectProduct = product => {
    this.setState({ selectedProduct: product })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className='main-container'>
          <Dashboard selectProduct={this.selectProduct} getInventory={this.getInventory} inventory={this.state.inventory} />
          <Form product={this.state.selectedProduct} selectProduct={this.selectProduct} getInventory={this.getInventory} />
        </div>
      </div>
    );
  }
}

export default App;
