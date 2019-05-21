import React from 'react';
import { mount } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import UserThumbnail from './UserThumbnail';

const imageSample = {
  url: 'http://example.com/randomuser',
  name: 'sample name',
  image: 'image_url.png',
  info: '@sample_name',
};

describe('UserThumbnail', () => {
  it('should render UserThumbnail correctly', () => {
    const component = mount(<UserThumbnail {...imageSample} />);
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it('should receive props', () => {
    const propsError = checkPropTypes(
      UserThumbnail.propTypes,
      imageSample,
      'props',
      UserThumbnail.imageSample,
    );
    expect(propsError).toBeUndefined();
  });
});
