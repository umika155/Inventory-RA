import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/layout/Navbar"

import 'materialize-css/dist/css/materialize.min.css';

import Dashboard from './Components/dashboard/Dashboard'
import ProductDetails from './Components/contents/product/ProductDetails'
import CategoryList from './Components/contents/category/CategoryList'
import SignIn from './Components/auth/SignIn'
import SignUp from './Components/auth/SignUp'

import AddCategory from './Components/contents/category/AddCategory'
import AddProduct from './Components/contents/product/AddProduct'
import AddSuppliers from './Components/contents/supplier/AddSuppliers'
import AddFootprint from './Components/contents/footprint/AddFootprint'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/product/:id' component={ProductDetails} />
            <Route path='/category' component={CategoryList} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/addCategory' component={AddCategory} />
            <Route path='/addProduct' component={AddProduct} />
            <Route path='/addSupplier' component={AddSuppliers} />
            <Route path='/addFootprint' component={AddFootprint} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
