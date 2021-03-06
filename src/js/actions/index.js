// This sends the signal to the store. Best
// practice is to wrap the object in a function.

import { ADD_ARTICLE } from '../constants/action-types';

// The parameter, article, will come in as an Object
export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
});
