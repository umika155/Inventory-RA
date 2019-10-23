export const ADD_FOOTPRINT_SUCCESS = 'ADD_FOOTPRINT_SUCCESS';
export const DELETE_FOOTPRINT_SUCCESS = 'DELETE_FOOTPRINT_SUCCESS';
export const UPDATE_FOOTPRINT_SUCCESS = 'UPDATE_FOOTPRINT_SUCCESS';
export const GET_FOOTPRINT_SUCCESS = 'UPDATE_FOOTPRINT_SUCCESS';
export const START_FOOTPRINT_ACTION = 'START_FOOTPRINT_ACTION';

export const ERROR = 'ERROR';

export const createFootprint = footprint => {
  return (dispatch, getState, { getFirestore }) => {
    dispatch({ type: START_FOOTPRINT_ACTION });
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid; //to get the user ID
    return firestore
      .collection('footprints')
      .add({
        ...footprint,
        userId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: ADD_FOOTPRINT_SUCCESS });
        return true;
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err.message });
      });
  };
};

export const removeFootprint = id => {
  return (dispatch, getState, { getFirestore }) => {
    dispatch({ type: START_FOOTPRINT_ACTION });
    const firestore = getFirestore();
    return firestore
      .collection('footprints')
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: DELETE_FOOTPRINT_SUCCESS });
        return true;
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err.message });
      });
  };
};

export const updateFootprint = (id, footprint) => {
  return (dispatch, getState, { getFirestore }) => {
    dispatch({ type: START_FOOTPRINT_ACTION });
    const firestore = getFirestore();
    return firestore
      .collection('footprints')
      .doc(id)
      .set({
        ...footprint,
      })
      .then(() => {
        dispatch({ type: UPDATE_FOOTPRINT_SUCCESS });
        return true;
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err.message });
      });
  };
};