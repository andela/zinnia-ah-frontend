import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import Author from './Author';
import { findByTestAttribute } from '../../../utils/testHelpers';

const props = {
  profile: {
    lastName: '',
    firstName: '',
    username: '',
  },
};

describe('Author', () => {
  describe('Render', () => {
    it('should render without errors', () => {
      const component = shallow(<Author {...props} />);
      expect(component).toMatchSnapshot();
      const wrapper = findByTestAttribute(component, 'author');
      expect(wrapper.length).toBe(1);
    });
  });

  describe('Proptypes', () => {
    it('should receive props', () => {
      const expectedProps = {
        ...props,
      };

      const propsErrors = checkPropTypes(
        Author.propTypes,
        expectedProps,
        'props',
        Author,
      );

      expect(propsErrors).toBeUndefined();
    });
  });
});
