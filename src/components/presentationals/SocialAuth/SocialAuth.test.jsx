import React from 'react';
import { shallow } from 'enzyme';

import { setupStore } from '../../../utils/testHelpers';
import SocialAuth from './SocialAuth';
const initialState = {};
export const findByTestAttribute = (component, attribute) => {
  const wrapper = component.find(`[data-test='${attribute}']`);
  return wrapper;
};
describe('SOCIAL LOGIN', () => {
  let store;
  beforeEach(() => {
    store = setupStore(initialState);
  });

  let location = {
    search:
      '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI3MGEzN2Y3LTc2NWEtNDYyNi04MzE3LTI5ZTZhNjJkOTdiOSIsImVtYWlsIjoiZmF2b3VyYWZvbGF5YW5AZ21haWwuY29tIiwidXNlcm5hbWUiOiJmYXZvdXJhZm9sYXlhbkBnbWFpbC5jb20iLCJpYXQiOjE1NTc5ODA2NjAsImV4cCI6MTU2MDU3MjY2MH0.WUI2HrAEelHEWobpIV9_saSeZghfdC8tUwfwrHTEStI&isNewRecord=false',
  };

  const props = {
    history: {
      push: jest.fn(),
    },
    location,
  };

  it('Mounts correctly without errors', () => {
    const component = shallow(<SocialAuth {...props} store={store} />).dive();
    const wrapper = findByTestAttribute(component, 'loader');
    expect(wrapper.length).toBe(1);
  });
});
