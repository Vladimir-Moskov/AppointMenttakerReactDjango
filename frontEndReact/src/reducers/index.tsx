import { combineReducers } from "redux";
//import authorsReducer from "./authorsReducer";

import isLoadingReducer from "./isLoadingReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  //authors: authorsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
