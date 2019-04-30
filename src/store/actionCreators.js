import { REDUX_CONSTANT } from './actions';

export function createAction(initialAction) {
  return { type: REDUX_CONSTANT, payload: initialAction };
}
