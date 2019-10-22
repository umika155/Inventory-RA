import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Fuse from "fuse.js";

import ProductList from '../contents/product/ProductList'
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Search = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const fuseOptions = {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 50,
    maxPatternLength: 12,
    minMatchCharLength: 3,
    keys: ["name", "category", "partId", "supplier"]
  };

  const fuse = new Fuse(products, fuseOptions);
  const data = searchTerm ? fuse.search(searchTerm).reverse() : [];

  return (
    <div class="row">
      <div class="col s12">
        <h4 className="white-text text-darken-3 center">Roda Awana</h4>
        <h5 className="white-text text-darken-5 center">
          Inventory Management System
        </h5>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">search</i>
            <input
              type="text"
              id="searchTerm"
              class="white-text autocomplete"
              onChange={e => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <label for="searchTerm">Search</label>
          </div>
        </div>
        <Box display="flex" flexwrap="wrap">
          {data.length > 0 ? (
            <ProductList products={data} />
          ) : (
            <Typography variant="body2" color="textSecondary" component="p">
              Enter a search (product name, serial, model, category)
            </Typography>
          )}
        </Box>
      </div>
    </div>
  );
};

Search.propTypes = {
  products: PropTypes.array,
};

const mapStateToProps = ({
  firestore: {
    ordered: { products },
  },
}) => ({ products });

export default connect(
  mapStateToProps,
  {},
)(Search);
