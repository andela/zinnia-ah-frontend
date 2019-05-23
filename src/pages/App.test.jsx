import React from 'react';
import { shallow } from 'enzyme/build';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  it('should render correctly', () => {
    const component = shallow(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
