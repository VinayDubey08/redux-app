// this is  root reducers becoz any projects are many reducers are create but all reducers are declare only one
//file and also that's this main file export in store file ...

// import { changeTheNumber } from "./upDemo";

// import { combineReducers } from "redux";

// export const rootReducers = combineReducers({
//changeTheNumber,
//and various reducer import in this area like
//one click pe color change ho form ka data ya many more activities..
//});

import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer";

export default combineReducers({
  contact: contactReducer,
});
