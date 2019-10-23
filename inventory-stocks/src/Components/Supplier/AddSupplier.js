import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createSupplier } from '../../actions/supplier'
import SupplierForm from './SupplierForm'
import Title from '../Title';
import { DASHBOARD } from '../Routes/routes';

const AddSupplier = props => {
    const{
        createSupplier,
        history,
    } = props;

    const addSupplier = supplier => {
        createSupplier(supplier).then(res => {
            if(res){
                history.push(`${DASHBOARD}/${supplier.category}`);
            }
        });
    };

    return(
        <div>
            <Title title="Add Supplier" />
            <SupplierForm addSupplier={addSupplier} />
        </div>
    );
};

AddSupplier.propTypes = {
    createSupplier: PropTypes.func,
    history: PropTypes.shape({ shape: PropTypes.string }),
};

export default connect(
    null,
    { createSupplier },
)(AddSupplier);