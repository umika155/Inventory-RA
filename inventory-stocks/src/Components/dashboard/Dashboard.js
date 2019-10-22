import React, { Component } from "react";
import Search from "./SearchBar";
import Recent from './Recent'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <Search />
        </div>
        <div className="row">
          <Recent />
        </div>
      </div>
    );
  }
}


export default Dashboard;
