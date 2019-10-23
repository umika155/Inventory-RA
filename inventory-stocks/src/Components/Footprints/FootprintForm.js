import React, { useState } from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import FormButton from "../shared/FormButton";
import { useStyles } from '../auth/authStyles';

const FootprintForm = props => {
    const classes = useStyles();
    const { update, addFootprint, isLoading } = props;

    const [footprint, setFootprint ] = useState({
        name: '',
        description: ''
    });

    const [ error, setError ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const { name, description } = footprint;
        const formIsValid = name.trim() && description.trim();
        if (formIsValid){
            setError('');
            return chooseFormAction();
        }
        return setError('All Form Fields are Required');
    };

    const chooseFormAction = () => {
        if(!props.update){
            addFootprint(footprint);
        } else {
            update(footprint)
        }
    };

    const inputChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        setFootprint( prev => ({ ...prev, [name]: value }));
    };

    return(
        <Container component="main" maxWidth="xs">
            <form className={classes.form} onSubmit={handleSubmit} noValidate>
                {error && <p>{error}</p>}
                <TextField 
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Footprint Name"
                    name="name"
                    autoComplete="footprintName"
                    onChange={inputChange}
                    value={footprint.name}
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
                    value={footprint.description}
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
        isLoading: state.footprints.isLoading
    };
};

export default connect(
    mapStateToProps,
    {},
  )(FootprintForm);