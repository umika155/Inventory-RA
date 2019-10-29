import {
    START_FOOTPRINT_ACTION,
    ADD_FOOTPRINT_SUCCESS,
    DELETE_FOOTPRINT_SUCCESS,
    ERROR,
    UPDATE_FOOTPRINT_SUCCESS,
    GET_FOOTPRINT_SUCCESS,
  } from '../actions/footprint';
  
  const initialState = {
    isLoading: false,
    error: null,
  };
  
  const footprintReducer = (state = initialState, action) => {
    switch (action.type) {
      case START_FOOTPRINT_ACTION:
        return { ...state, error: null, isLoading: true };
      case ADD_FOOTPRINT_SUCCESS:
        console.log('created footprint', action.footprint)
        return { ...state, error: null, isLoading: false };
      case GET_FOOTPRINT_SUCCESS:
        return { ...state, error: null, isLoading: false, FOOTPRINT: action.payload };
      case UPDATE_FOOTPRINT_SUCCESS:
        return { ...state, error: null, isLoading: false };
      case DELETE_FOOTPRINT_SUCCESS:
        return { ...state, error: null, isLoading: false };
      case ERROR:
        return { ...state, isLoading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default footprintReducer;
  