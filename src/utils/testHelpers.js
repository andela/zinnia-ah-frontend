import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState } from '../store/modules/auth';

export const findByTestAttribute = (component, attribute) => {
  const wrapper = component.find(`[data-test='${attribute}']`);
  return wrapper;
};

export const getLocation = () => ({
  search:
    '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI3MGEzN2Y3LTc2NWEtNDYyNi04MzE3LTI5ZTZhNjJkOTdiOSIsImVtYWlsIjoiZmF2b3VyYWZvbGF5YW5AZ21haWwuY29tIiwidXNlcm5hbWUiOiJmYXZvdXJhZm9sYXlhbkBnbWFpbC5jb20iLCJpYXQiOjE1NTc5ODA2NjAsImV4cCI6MTU2MDU3MjY2MH0.WUI2HrAEelHEWobpIV9_saSeZghfdC8tUwfwrHTEStI&isNewRecord=false',
});

const mockStore = configureStore([thunk]);
export const setupStore = () => mockStore(initialState);

export const signupMockData = {
  status: 'success',
  message: 'Please check your mail to verify your account',
  data: {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhN2RmMzY5LTgyNTYtNDZhZS05ZDZmLTEwODhmMzg4M2U5MyIsImVtYWlsIjoia2tAemFoLmNvbSIsImlhdCI6MTU1NzQxMDc3NSwiZXhwIjoxNTYwMDAyNzc1fQ.MgpJl20ZjZmQIOcXJ7KjHgilwOjW9DrGCUhXJV7rjwM',
  },
};

export const loggedInUser = {
  id: '270a37f7-765a-4626-8317-29e6a62d97b9',
  email: 'favourafolayan@gmail.com',
  username: 'favourafolayan@gmail.com',
};
