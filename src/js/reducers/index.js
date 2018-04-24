// This is where the state lives for the app.

// Initialization of state:
const initialState = {
  articles: []
}

// Set default value of state:
const rootReducer = (state = initialState, action) => state;

export default rootReducer;
