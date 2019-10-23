import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import authReducer from './authReducer';
import productReducer from './productReducer';
import footprintReducer from './footprintReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  footprints: footprintReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
 