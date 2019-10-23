import React from 'react';
import { connect } from 'react-redux';

import { updateFootprint } from '../../actions/footprint';
import FootprintForm from './FootprintForm';
import Title from '../Title';
import { DASHBOARD } from '../Routes/routes';

const UpdateFootprint = props => {
  const {
    updateFootprint,
    history,
    footprintById,
    match: { params },
  } = props;

  const update = footprint => {
    updateFootprint(params.footprintId, footprint).then(res => {
      if (res) {
        history.push(`${DASHBOARD}/${params.category}`);
      }
    });
  };

  return (
    <div>
      <Title title="Update Footprint" />
      <FootprintForm update={update} footprintById={footprintById} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    firestore: {
      ordered: { footprints },
    },
  } = state;
  const footprintId = ownProps.match.params.footprintId;
  const footprintById = footprints && footprints.find(item => item.id === footprintId);
  return { footprintById };
};

export default connect(
  mapStateToProps,
  { updateFootprint },
)(UpdateFootprint);
