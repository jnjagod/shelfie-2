import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Form.css'
import axios from 'axios'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: 0,
      img: '',
      edit: false
    }
  }

  componentDidMount() {
    let { id } = this.props.match.params
    if (id) {
      axios
        .get(`/api/product/${id}`)
        .then(res => {this.setState({ ...res.data[0], edit: true }); console.log(res.data)})
        .catch(err => console.log(err))
    }
  }

  componentDidUpdate(oldProps) {
    if (this.props.match.path !== oldProps.match.path) {
      this.setState({
        // id: null,
        name: '',
        price: 0,
        img: '',
        edit: false
      })
    }
  }

  addProduct = () => {
    let { name, price, img } = this.state
    let product = { name, price, img }
    axios
      .post('/api/product', product)
      .then(res => this.props.history.push('/'))
      .catch(err => console.log(err))
  }

  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  clearFields = () => {
    if (this.props.match.params.id) {
      this.props.history.push('/')
    } else {
      this.setState({
        name: '',
        price: 0,
        img: '',
        edit: false
      })
    }
  }

  handleEdit = () => {
    let { id, name, price, img } = this.state
    let product = { name, price, img }
    axios
      .put(`/api/product/${id}`, product)
      .then(res => this.props.history.push('/'))
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
            {this.state.edit ?
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

export default withRouter(Form)