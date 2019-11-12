import React, { Component } from 'react'
import './Dashboard.css'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      inventory: []
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

  deleteProduct = id => {
    axios
      .delete(`/api/product/${id}`)
      .then(res => this.getInventory())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="dash-container">
        <div className='dash'>
          {this.state.inventory.map(el => (
            <Product deleteProduct={this.deleteProduct} key={el.id} product={el} />
          ))}
        </div>
      </div>
    )
  }
}