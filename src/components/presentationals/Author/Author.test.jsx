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

const propsWithoutProfile = {};

describe('Author', () => {
  describe('Render', () => {
    it('should render without errors', () => {
      const component = shallow(<Author {...props} />);
      expect(component).toMatchSnapshot();
    });

    it('should render without errors ans without props', () => {
      const component = shallow(<Author {...propsWithoutProfile} />);
      expect(component).toMatchSnapshot();
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
