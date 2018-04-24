// This will orchestrate all moving parts in Redux.

// Redux store is where the state of the whole
// application lives.

import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;
