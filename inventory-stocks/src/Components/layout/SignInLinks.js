import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div>
      <ul id="dropdown1" className="dropdown-content">
        <li><NavLink to='/addProduct'>Part</NavLink></li>
        <li><NavLink to='/addCategory'>Category</NavLink></li>
        <li><NavLink to='/addSupplier'>Supplier</NavLink></li>
        <li><NavLink to='/addFootprint'>Footprint</NavLink></li>
      </ul>

      <ul className="right">
        {/* <!-- Dropdown Trigger --> */}
        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/addProduct'>Part</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">US</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInLinks