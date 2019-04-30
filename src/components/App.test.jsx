import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  it('should render correctly', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
    expect(component.html()).toEqual(
      '<div><h1 class="toothy"> My React App!! </h1></div>',
    );
  });
});
