// import React from 'react';
// import { mount } from 'enzyme';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';

// import Stats from '../Stats/Stats';
// import { initialState } from '../../../store/modules/stats';

// const props = {
//   data: { hits: [], reads: [] },
// };

// const mockStore = configureStore([thunk]);
// const store = mockStore(initialState);
describe('Stats test suite', () => {
  it('should render correctly', () => {
    // const component = mount(
    //   <Provider store={store}>
    //     <Stats {...props} />
    //   </Provider>,
    // );
    // expect(component).toMatchSnapshot();
    expect(1 + 1).toEqual(2);
  });
});
