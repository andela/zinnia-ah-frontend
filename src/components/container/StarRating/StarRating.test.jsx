import React from 'react';
import { shallow } from 'enzyme';

import { StarRating as Rating } from './StarRating';
import { findByTestAttr, checkProps } from '../../../utils/testHelpers';

const setUp = (props = {}) => {
  const component = shallow(<Rating {...props} />);
  return component;
};

describe('<StarRating />', () => {
  describe('Checking PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        starRatingRequest: jest.fn(),
        rating: 4,
      };

      const propsError = checkProps(Rating, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Have props', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        starRatingRequest: jest.fn(),
        rating: 2,
      };
      wrapper = setUp(props);
    });

    it('should render correctly', () => {
      const starRating = findByTestAttr(wrapper, 'starRatingComponent');
      expect(starRating.length).toBe(1);
    });
  });
});
