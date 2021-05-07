import { combineReducers } from "redux";

import testReducer from "./test";
import langReducer from "./lang";

export const reducers = combineReducers({ testReducer, langReducer });
