export const ADD_SUPPLIER_SUCCESS = 'ADD_SUPPLIER_SUCCESS';
export const DELETE_SUPPLIER_SUCCESS = 'DELETE_SUPPLIER_SUCCESS';
export const UPDATE_SUPPLIER_SUCCESS = 'UPDATE_SUPPLIER_SUCCESS';
export const GET_SUPPLIER_SUCCESS = 'UPDATE_SUPPLIER_SUCCESS';
export const START_SUPPLIER_ACTION = 'START_SUPPLIER_ACTION';

export const ERROR = 'ERROR';

export const createSupplier = supplier => {
  return (dispatch, getState, { getFirestore }) => {
    dispatch({ type: START_SUPPLIER_ACTION });
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid; //to get the user ID
    return firestore
      .collection('suppliers')
      .add({
        ...supplier,
        userId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: ADD_SUPPLIER_SUCCESS });
        return true;
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err.message });
      });
  };
};

export const removeSupplier = id => {
  return (dispatch, getState, { getFirestore }) => {
    dispatch({ type: START_SUPPLIER_ACTION });
    const firestore = getFirestore();
    return firestore
      .collection('suppliers')
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: DELETE_SUPPLIER_SUCCESS });
        return true;
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err.message });
      });
  };
};

export const updateSupplier = (id, supplier) => {
  return (dispatch, getState, { getFirestore }) => {
    dispatch({ type: START_SUPPLIER_ACTION });
    const firestore = getFirestore();
    return firestore
      .collection('suppliers')
      .doc(id)
      .set({
        ...supplier,
      })
      .then(() => {
        dispatch({ type: UPDATE_SUPPLIER_SUCCESS });
        return true;
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err.message });
      });
  };
};