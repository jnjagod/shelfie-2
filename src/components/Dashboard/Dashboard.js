import React, {Component} from 'react'
import './Dashboard.css'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends Component {
  deleteProduct = id => {
    axios
      .delete(`/api/product/${id}`)
      .then(res => this.props.getInventory())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='dash'>
        {this.props.inventory.map(el => (
          <Product selectProduct={this.props.selectProduct} deleteProduct={this.deleteProduct} key={el.id} product={el} />
        ))}
      </div>
    )
  }
}