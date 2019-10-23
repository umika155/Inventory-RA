import {
    START_SUPPLIER_ACTION,
    ADD_SUPPLIER_SUCCESS,
    DELETE_SUPPLIER_SUCCESS,
    ERROR,
    UPDATE_SUPPLIER_SUCCESS,
    GET_SUPPLIER_SUCCESS,
  } from '../actions/supplier';
  
  const initialState = {
    isLoading: false,
    error: null,
  };
  
  const supplierReducer = (state = initialState, action) => {
    switch (action.type) {
      case START_SUPPLIER_ACTION:
        return { ...state, error: null, isLoading: true };
      case ADD_SUPPLIER_SUCCESS:
        return { ...state, error: null, isLoading: false };
      case GET_SUPPLIER_SUCCESS:
        return { ...state, error: null, isLoading: false, SUPPLIER: action.payload };
      case UPDATE_SUPPLIER_SUCCESS:
        return { ...state, error: null, isLoading: false };
      case DELETE_SUPPLIER_SUCCESS:
        return { ...state, error: null, isLoading: false };
      case ERROR:
        return { ...state, isLoading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default supplierReducer;
  