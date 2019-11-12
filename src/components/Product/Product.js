import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Product.css'

class Product extends Component {
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
              <button onClick={() => this.props.history.push(`/edit/${this.props.product.id}`)} className='green-button edit'>Edit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Product)