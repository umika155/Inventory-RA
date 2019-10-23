import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";

import MenuItem from "@material-ui/core/MenuItem";
import FormButton from "../shared/FormButton";
import SerialsList from "../shared/SerialsList";
import { useStyles } from '../auth/authStyles';

//import 'materialize-css/dist/css/materialize.min.css';

const ProductForm = props => {
  const currencies = [
    {
      value: "BTC",
      label: "฿"
    },
    {
      value: "JPY",
      label: "¥"
    }
  ];

  const footprint = [
    {
      value: "BTC",
      label: "BTC"
    },
    {
      value: "JPY",
      label: "¥"
    }
  ];

  const [values, setValues] = React.useState({
    currency: "Select"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const classes = useStyles();
  const { update, addProduct, categoryName, productById, isLoading } = props;

  const [serial, setSerial] = useState("");
  const [product, setProduct] = useState({
    name: "",
    partNumber: "",
    footprint: "",
    voltage: "",
    watts: "",
    manufacturer: "",
    datasheet: "",
    supplier: "",
    qty: "",
    price: "",
    serials: [],
    category: "",
    description: ""
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (categoryName) {
      setProduct(prev => ({
        ...prev,
        category: categoryName
      }));
    }
    if (productById) {
      setProduct(prev => ({
        ...prev,
        ...productById,
        updatedAt: new Date()
      }));
    }
  }, [categoryName, productById]);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, model, category } = product;
    const formIsValid = name.trim() && model.trim() && category.trim();
    if (formIsValid) {
      setError("");
      return chooseFormAction();
    }
    return setError("All Form Fields are Required");
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

  const addSerial = () => {
    if (serial.length > 2) {
      setSerial("");
      setProduct(prev => ({
        ...prev,
        serials: [...prev.serials, serial]
      }));
    }
  };

  return (
    <Container component="main">
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
        {error && <p>{error}</p>}
        <div class="file-field input-field">
          <input
            accept="image/*"
            className={classes.input}
            id="outlined-button-file"
            multiple
            type="file"
          />
          <label htmlFor="outlined-button-file">
            <Button
              variant="outlined"
              component="span"
              className={classes.button}
            >
              Upload
            </Button>
          </label>
        </div>
        
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Product Name"
          name="name"
          autoComplete="productName"
          onChange={inputChange}
          value={product.name}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="partNumber"
          label="Part Number"
          name="partNumber"
          autoComplete="partNumber"
          onChange={inputChange}
          value={product.partNumber}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="qty"
          label="Quantity"
          name="qty"
          autoComplete="qty"
          onChange={inputChange}
          value={product.qty}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="price"
          label="Price"
          name="price"
          autoComplete="productPrice"
          onChange={inputChange}
          value={product.price}
          InputProps={{
            startAdornment: <InputAdornment position="start">RM</InputAdornment>,
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="voltage"
          label="Voltage"
          name="voltage"
          autoComplete="productVoltage"
          onChange={inputChange}
          value={product.voltage}
          InputProps={{
            startAdornment: <InputAdornment position="start">V</InputAdornment>,
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="watts"
          label="Watts"
          name="watts"
          autoComplete="productWatts"
          onChange={inputChange}
          value={product.watts}
          InputProps={{
            startAdornment: <InputAdornment position="start">W</InputAdornment>,
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="manufacturer"
          label="Manufacturer"
          name="manufacturer"
          autoComplete="manufacturer"
          onChange={inputChange}
          value={product.manufacturer}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="datasheet"
          label="Datasheet"
          name="datasheet"
          autoComplete="datasheet"
          onChange={inputChange}
          value={product.datasheet}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="model"
          label="Product Model"
          name="model"
          autoComplete="model"
          onChange={inputChange}
          value={product.model}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="description"
          label="Description"
          name="description"
          onChange={inputChange}
          value={product.description}
        />
        {!categoryName && (
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="category"
            label="Product Category"
            name="category"
            autoComplete="category"
            onChange={inputChange}
            value={product.category}
          />
        )}
        
        <TextField
          id="footprint"
          select
          label="Footprint"
          className={classes.textField}
          value={values.footprint}
          onChange={handleChange("footprint")}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Please select your footprint"
          margin="normal"
        >
          {footprint.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="supplier"
          select
          label="Supplier"
          className={classes.textField}
          value={values.supplier}
          onChange={handleChange("supplier")}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Please select your supplier"
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="serial"
          label="Product Serial"
          name="serial"
          autoComplete="serial"
          value={serial}
          onChange={e => setSerial(e.target.value)}
        />

        <Grid container justify="flex-end">
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={addSerial}
          >
            Add Serial
          </Button>
        </Grid>

        <SerialsList serials={product.serials} />

        <FormButton
          isLoading={isLoading}
          text={
            update
              ? "Save Changes"
              : categoryName
              ? `Add New to ${categoryName}`
              : "Add New"
          }
        />
      </form>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.products.isLoading
  };
};

export default connect(
  mapStateToProps,
  {}
)(ProductForm);
