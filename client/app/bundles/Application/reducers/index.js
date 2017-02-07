import railsContextReducer, { initialState as railsContextState } from './railsContextReducer';

export default {
  railsContext: railsContextReducer,
};

export const initialState = {
  railsContextState,
};
