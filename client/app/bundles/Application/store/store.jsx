import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import reducers, { initialStates } from '../reducers';

export default (props, railsContext) => {
  const initialState = {
    railsContext,
  };

  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  });

  const finalCreateStore = compose(
    applyMiddleware(thunkMiddleware),
  )(createStore);

  return finalCreateStore(reducer, initialState);
};
