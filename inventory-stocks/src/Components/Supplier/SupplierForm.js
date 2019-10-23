import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import FormButton from "../shared/FormButton";

import clsx from 'clsx';
import { useStyles } from '../auth/authStyles';
import MenuItem from '@material-ui/core/MenuItem';
import { TextareaAutosize } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

const SupplierForm = props => {
    const classes = useStyles();
    const { addSupplier, isLoading, productById } = props;

    const [ supplier, setSupplier ] = useState({
        name: '',
        description: '',
        address: '',
        contact:'',
        price: '',
    });

    const [values, setValues] = React.useState({
        priceRange: '',
      });
    
    const ranges = [
        {
          value: '0-20',
          label: '0 to 20',
        },
        {
          value: '21-50',
          label: '21 to 50',
        },
        {
          value: '51-100',
          label: '51 to 100',
        },
      ];

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const [ error, setError ] = useState();

    useEffect(() => {
        if (productById) {
            setSupplier(prev => ({
                ...prev,
                ...productById,
                updateAt: new Date(),
            }));
        }
    }, [productById]);

    const handleSubmit = e => {
        e.preventDefault();
        const { name, description } = supplier;
        const formIsValid = name.trim() && description.trim();
        if(formIsValid){
            setError('');
            return chooseFormAction();
        } 
        return setError('All Form Fields are Required');
    };

    const chooseFormAction = () => {
        addSupplier(supplier);
    };

    const inputChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        setSupplier(prev => ({ ...prev, [ name ]: value }));
    };

    return(
        <Container component="main" >
            <form className={classes.form} onSubmit={handleSubmit}>
                {error && <p>{error}</p>}

                <TextField 
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Supplier Name"
                    name="name"
                    autoComplete="supplierName"
                    onChange={inputChange}
                    value={supplier.name}
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
                    value={supplier.description}
                />
                <TextareaAutosize
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    onChange={inputChange}
                    value={supplier.address}
                />
                <TextField
                    select
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    label="With Select"
                    id="price"
                    name="price"
                    value={values.priceRange}
                    onChange={handleChange('priceRange')}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">RM</InputAdornment>,
                    }}
                    >
                    {ranges.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                    ))}
                </TextField>

                <TextareaAutosize
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="contact"
                    label="Contact Number"
                    name="contact"
                    type="tel"
                    onChange={inputChange}
                    value={supplier.contact}
                />
            
                <FormButton
                    isLoading={isLoading}
                    text={'Add New'}
                />
            </form>
        </Container>
    );
};

const mapStateToProps = state => {
    return{
        isLoading: state.supplier.isLoading,
    };
};

export default connect(
    mapStateToProps,
    {},
)(SupplierForm);