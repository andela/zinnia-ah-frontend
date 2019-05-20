import React from 'react';
import { mount } from 'enzyme';

import { BookmarkLists, mapStateToProps } from './BookmarkLists';

const props = {
  getBookmarks: jest.fn(),
  bookmarks: [
    {
      id: '2345rfghujhjk',
      userId: '5a6fab9c-4wf9-4bwef5-973c-5a371165cd57',
      slug: 'Hello-Article-1-db9cwefifhcoiwnf2e4-4d31-9015-288cf41d4092',
      title: 'EMMSDefqefrticle',
      description: 'Emmawkfvgwbvu wubvw djkvhis article',
      body: 'Another cgdsibcod cwdjcb djcubd cjdbc jdwbcikcuic dBody',
      imageThumbnail: 'https://dummy.jpg',
      readTime: '0',
      createdAt: '2019-05-16T11:32:52.024Z',
    },
  ],
  isLoading: false,
  error: {},
};
const propsWithoutImage = {
  getBookmarks: jest.fn(),
  bookmarks: [
    {
      id: '2345rfghujhjk',
      userId: '5a6fab9c-4wf9-4bwef5-973c-5a371165cd57',
      slug: 'Hello-Article-1-db9cwefifhcoiwnf2e4-4d31-9015-288cf41d4092',
      title: 'EMMSDefqefrticle',
      description: 'Emmawkfvgwbvu wubvw djkvhis article',
      body: 'Another cgdsibcod cwdjcb djcubd cjdbc jdwbcikcuic dBody',
      imageThumbnail: '',
      readTime: '0',
      createdAt: '2019-05-16T11:32:52.024Z',
    },
  ],
  isLoading: false,
  error: {},
};

const propsWithoutBookmarks = {
  getBookmarks: jest.fn(),
  bookmarks: [],
  isLoading: false,
  error: {},
};

describe('BookmarkLists', () => {
  it('should render correctly', () => {
    const component = mount(<BookmarkLists {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('mounts correctly without image', () => {
    const shallowWrapper = mount(<BookmarkLists {...propsWithoutImage} />);
    expect(shallowWrapper).toMatchSnapshot();
  });

  it('mounts correctly without bookamrks', () => {
    const shallowWrapper = mount(<BookmarkLists {...propsWithoutBookmarks} />);
    expect(shallowWrapper).toMatchSnapshot();
  });

  it('mounts correctly', () => {
    const DEFAULT_STATE = {
      profile: {
        error: {},
        isLoading: false,
        bookmarks: [],
      },
    };
    const action = mapStateToProps(DEFAULT_STATE);
    expect(action).toEqual(DEFAULT_STATE.profile);
  });
});
