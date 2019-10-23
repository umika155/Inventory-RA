import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createFootprint } from '../../actions/footprint';
import FootprintForm from './FootprintForm';
import Title from '../Title';
import { DASHBOARD } from '../Routes/routes';

const AddFootprint = props => {
    const{
        createFootprint,
        history,
    } = props;

    const addFootprint = footprint => {
        createFootprint(footprint).then(res => {
            if(res){
                history.push(`${DASHBOARD}/${footprint.category}`);
            }
        });
    };

    return(
        <div>
            <Title title="Add Footprint" />
            <FootprintForm addFootprint={addFootprint} />
        </div>
    );
};

AddFootprint.propTypes = {
    createFootprint: PropTypes.func,
    history: PropTypes.shape({ shape: PropTypes.string }),
};

export default connect(
    null,
    { createFootprint },
)(AddFootprint);