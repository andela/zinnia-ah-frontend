import React from 'react';
import { shallow } from 'enzyme';

import { Search } from './Search';

import { findByTestAttribute } from '../components/presentationals/SocialAuth/SocialAuth.test';

const component = shallow(<Search />);

describe('Custom Search', () => {
  it('renders without errors', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders a search input field', () => {
    const wrapper = findByTestAttribute(component, 'search-input');
    expect(wrapper.length).toBe(1);
  });

  it('renders a search button', () => {
    const wrapper = findByTestAttribute(component, 'button');
    expect(wrapper.length).toBe(1);
  });
});
