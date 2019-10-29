import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

import Category from './Category';
import Title from '../Title';
import Empty from '../Empty';
import { Button } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";

const CategoryList = props => {
  const [setCategory] = "";

  const addCategory = () => {
      alert('This button does nothing.')
  };

  const { categories } = props;
  return (
    <React.Fragment>
      <Title title="Categories" />
      <Grid container justify="flex-end">
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={addCategory}
          >
            Add Category
          </Button>
        </Grid>
      <Box display="flex" flexWrap="wrap">
        {categories && categories.length > 0 ? (
          categories.map(category => (
            <Category key={category} category={category} />
          ))
        ) : (
          <Empty />
        )}
      </Box>
    </React.Fragment>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

const getUniqueCategories = products => {
  if (products) {
    const categories = products.map(product => product.category);
    return categories.filter((category, index) => {
      return categories.indexOf(category) === index;
    });
  }
};

const mapStateToProps = state => {
  const {
    firestore: {
      ordered: { products },
    },
  } = state;
  const categories = getUniqueCategories(products);
  return {
    categories,
  };
};

export default connect(mapStateToProps)(CategoryList);
