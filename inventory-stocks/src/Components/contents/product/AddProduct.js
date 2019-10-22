import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createProduct } from '../../../actions/product'

// Import Materialize
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';

class AddProduct extends Component {
  state = {
    category: "",
    description: ""
  };

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    this.props.addProduct(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="col s12 white">
        <h5 className="grey-text text-darken-3">Add New Part</h5>
          <div className="row">
            <div className="input-field col s12">
              <input id="partNum" type="text"/>
              <label htmlFor="partNum">Part Number</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="partName" type="text"/>
              <label htmlFor="partName">Part Name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <select>
                <option value="" defaultValue>Choose your option</option>
                <option value="1">Footprint 1</option>
                <option value="2">Footprint 2</option>
                <option value="3">Footprint 3</option>
              </select>
              <label htmlFor="footprints">Footprint</label>
            </div>
            <div className="input-field col s6">
              <input id="voltage" type="text"/>
              <label htmlFor="voltage">Voltage</label>
            </div>
            <div className="input-field col s6">
              <input id="watt" type="text"/>
              <label htmlFor="watt">Watts</label>
            </div>
            <div className="input-field col s6">
              <select>
                <option value="" defaultValue>Choose your option</option>
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
              </select>
              <label htmlFor="category">Category</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="manufacturer" type="text"/>
              <label htmlFor="manufacturer">Manufacturer</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="datasheetLink" type="text"/>
              <label htmlFor="datasheetLink">Datasheets</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
            <select>
                <option value="" defaultValue>Choose your option</option>
                <option value="1">Supplier 1</option>
                <option value="2">Supplier 2</option>
                <option value="3">Supplier 3</option>
              </select>
              <label htmlFor="supplier">Supplier</label>
            </div>
            <div className="input-field col s6">
              <input id="price" type="text" />
              <label htmlFor="price">Price</label>
            </div>
            <div className="input-field col s6">
              <input id="qty"  type="text"/>
              <label htmlFor="qty">Quantity</label>
            </div>
          </div>

          <div className="file-field input-field">
            <div className="btn">
              <span>File</span>
              <input type="file" multiple />
            </div>
            <div className="file-path-wrapper">
              <input
                className="file-path validate"
                type="text"
                placeholder="Upload one or more files"
              />
            </div>
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default (AddProduct);
