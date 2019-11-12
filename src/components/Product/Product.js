import React, { Component } from 'react'
import './Product.css'

export default class Product extends Component {
  render() {
    const { id, name, price, img } = this.props.product
    return (
      <div>
        <div className='product-box'>
          <img className='product-img' src={img} alt="" />
          <div className='product-sub-box'>
            <div>
              <p style={{ margin: '0' }} >{name}<br />${price}</p>
            </div>
            <div className="sub-button-box">
              <button onClick={() => this.props.deleteProduct(id)} className='green-button delet'>Delete</button>
              <button onClick={() => this.props.selectProduct(this.props.product)} className='green-button edit'>Edit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}