import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { useStyles } from '../../auth/authStyles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const ProductDetails = props => {
  const classes = useStyles();
  const { update, addProduct, categoryName, productById, isLoading } = props;

  const [product, setProduct] = useState({
    name: '',
    model: '',
    serials: [],
    category: '',
    description: '',
  });

  const [error, setError] = useState('');

  useEffect(() => {
    if (categoryName) {
      setProduct(prev => ({
        ...prev,
        category: categoryName,
      }));
    }
    if (productById) {
      setProduct(prev => ({
        ...prev,
        ...productById,
        updatedAt: new Date(),
      }));
    }
  }, [categoryName, productById]);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, model, category } = product;
    const formIsValid = name.trim() && model.trim() && category.trim();

    if (formIsValid) {
      setError ('');
      return chooseFormAction();
    }
    return setError('All Form Fields are Required');
  };

  const chooseFormAction = () => {
    if (!props.update) {
      addProduct(product);
    } else {
      update(product);
    }
  };

  const inputChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

    return (
      <div className="container section part-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Product Name</span>
            {/* <p>{product.PartNumber}f</p> */}
          </div>
          <div className="card-action grey lighten-4 grey text">
            <div>Quantity: 1</div>
            <div>Picture</div>
          </div>
        </div>
      </div>
    );
  } 

  const mapStateToProps = state => {
    return {
      isLoading: state.products.isLoading,
    };
  };
  
  export default connect(
    mapStateToProps,
    {},
  )(ProductDetails);