import cartReducer from './cartReducer.js';
import {combineReducers} from 'redux';
import Recommended from './recommeded.js'
import Womancategory from './womancategory.js';
const allReducers = combineReducers({
  Recommended: Recommended,
  Womancategory: Womancategory,
  cartReducer:cartReducer
});

export default allReducers;
