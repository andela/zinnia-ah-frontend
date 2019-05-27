import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import checkPropTypes from 'check-prop-types';

const mockStore = configureStore([thunk]);

export const setupStore = initialState => mockStore(initialState);

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name,
  );
  return propsErr;
};

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};
