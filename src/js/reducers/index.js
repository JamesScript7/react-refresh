// This is where the state lives for the app.
import { ADD_ARTICLE } from '../constants/action-types';

// Initialization of state:
const initialState = {
  articles: []
}

// Set default value of state:
// Reducer is a function that takes 2 parameters state and action.
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state, action.payload]
      };
    default:
      return state;
  }
};

export default rootReducer;
