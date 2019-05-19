import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import Article from './Article';
import { findByTestAttribute } from '../utils/testHelpers';

const props = {
  match: {
    params: {
      uniqueId: '',
    },
  },
  getArticle: jest.fn(),
};
describe('Article', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Article {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(findByTestAttribute(wrapper, 'article').length).toEqual(1);
  });

  it('should receive props', () => {
    const expectedProps = { uniqueId: '' };

    const propsError = checkPropTypes(
      Article.propTypes,
      expectedProps,
      'props',
      Article.uniqueId,
    );

    expect(propsError).toBeUndefined();
  });
});
