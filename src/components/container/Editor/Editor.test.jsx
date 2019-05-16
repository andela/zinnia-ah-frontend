import React from 'react';
import { mount } from 'enzyme';
import { EditorContainer } from './Editor';

const props = {
  article: {
    isLoading: true,
    successResponse: {
      status: 'success',
      message: '',
    },
    errorResponse: [],
  },
  createArticle: jest.fn(),
};

const wrapper = mount(<EditorContainer {...props} />);

describe('<EditorContainer />', () => {
  it('renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
