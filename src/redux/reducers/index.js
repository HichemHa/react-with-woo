import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cardReducer from './cardReducer';


const rootReducer = combineReducers({
  productReducer,
  cardReducer
});

export default rootReducer;