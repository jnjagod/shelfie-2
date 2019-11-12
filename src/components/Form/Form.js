import React, { Component } from 'react'
import './Form.css'
import axios from 'axios'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      id: null,
      name: '',
      price: 0,
      img: ''
    }
  }

  componentDidUpdate(oldProps) {
    let { id, name, price, img } = this.props.product
    if (oldProps.product.id !== this.props.product.id) {
      this.setState({ id, name, price, img })
    }
  }

  addProduct = () => {
    const { name, price, img } = this.state
    axios
      .post('/api/product', { name, price, img })
      .then(res => this.props.getInventory())
      .catch(err => console.log(err))
  }

  handleChange = (e) => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  clearFields = () => {
    this.setState({
      id: null,
      name: '',
      price: 0,
      img: ''
    })
  }

  handleEdit() {
    let { id, name, price, img } = this.state
    let product = { name, price, img }
    axios
      .put(`/api/product/${id}`, product)
      .then(res => this.props.getInventory())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='form-container'>
        <div className='form-box'>
          <div className="img-preview">
            {this.state.img ?
              <img className='preview-img' src={this.state.img} alt="" />
              :
              <img className='preview-img' src="https://via.placeholder.com/300x199?text=Image+Preview" alt="" />
            }
          </div>
          <p>Image URL:</p>
          <input name='img' value={this.state.img} autoComplete='off' onChange={this.handleChange} type="text" />
          <p>Product Name:</p>
          <input name='name' value={this.state.name} autoComplete='off' onChange={this.handleChange} type="text" />
          <p>Price:</p>
          <input name='price' value={this.state.price} autoComplete='off' onChange={this.handleChange} type="number" />
          <div className="button-box">
            <button onClick={this.clearFields} className='red-button'>Cancel</button>
            {this.state.id ?
              <button
                className='red-button'
                onClick={() => { this.handleEdit(); this.clearFields() }}
              >Save Changes</button>
              :
              <button
                onClick={() => { this.addProduct(); this.clearFields() }}
                className='red-button'
              > Add to Inventory</button>
            }
          </div>
        </div>
      </div>
    )
  }
}