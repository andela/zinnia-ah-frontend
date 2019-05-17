import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState } from '../store/modules/auth';

export const findByTestAttribute = (component, attribute) => {
  const wrapper = component.find(`[data-test='${attribute}']`);
  return wrapper;
};

const mockStore = configureStore([thunk]);

export const setupStore = () => mockStore(initialState);
