import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";
import Reducer from "./Reducer";
const rootreducer = combineReducers({ Reducer, MovieReducer });
export default rootreducer;