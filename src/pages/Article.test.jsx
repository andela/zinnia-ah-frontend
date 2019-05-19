import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import { Article } from './Article';
import { findByTestAttribute } from '../utils/testHelpers';

const props = {
  match: {
    params: {
      articleId: '',
    },
  },
  getSingleArticle: jest.fn(),
  isLoading: false,
  article: {},
};

describe('Article', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Article {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(findByTestAttribute(wrapper, 'article').length).toEqual(1);
  });

  it('should receive props', () => {
    const expectedProps = { ...props };

    const propsError = checkPropTypes(
      Article.propTypes,
      expectedProps,
      'props',
      Article,
    );

    expect(propsError).toBeUndefined();
  });
});
