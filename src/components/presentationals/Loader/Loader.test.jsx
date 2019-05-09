import React from 'react';
import { shallow } from 'enzyme';

import Loader from './Loader';

const text = 'signing up';
const size = 'large';

const component = shallow(<Loader text={text} size={size} />);

describe('<Loader />', () => {
  it('mounts without exploding', () => {
    expect(component).toMatchSnapshot();
  });

  it('should receive the correct props', () => {
    const { className, children } = component.props().children.props;

    expect(className).toContain(size);
    expect(children).toBe(text);
  });
});
