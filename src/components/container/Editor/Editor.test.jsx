import React from 'react';
import { shallow, mount } from 'enzyme';
import { EditorContainer } from './Editor';

jest.mock(
  '../../../../node_modules/draft-js/lib/generateRandomKey.js',
  () => () => '123',
);

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

const wrapper = shallow(<EditorContainer {...props} />);
const MountWrapper = mount(<EditorContainer {...props} />);

describe('<EditorContainer />', () => {
  it('renders the component', () => {
    const input = MountWrapper.find('.ReactTags__tagInputField');
    input.instance().value = 'dc';
    input.simulate('change');
    MountWrapper.instance().handleDelete();
    MountWrapper.instance().handleDrag({ id: 'tat', text: 'tat' }, 3, 4);
    MountWrapper.instance().fileUploadHandler();
    expect(wrapper).toMatchSnapshot();
  });
});
