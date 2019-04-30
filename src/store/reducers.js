import { REDUX_CONSTANT } from './actions';

const DEFAULT_STATE = {
  initialAction: '',
};

const setAction = (state, action) => {
  return Object.assign({}, state, { initialAction: action.payload });
};
const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case REDUX_CONSTANT:
      return setAction(state, action);
    default:
      return state;
  }
};

export default rootReducer;
