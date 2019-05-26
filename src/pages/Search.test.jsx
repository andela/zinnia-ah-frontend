import React from 'react';
import { shallow } from 'enzyme';

import { Search } from './Search';

const dataProps = {
  articles: [
    {
      title: 'Messi: the GOAT',
      description: 'Description goes here',
      slug: 'Messi-the-GOAT-b75505e0-70f3-4fbd-934c-5bfc71151dd8',
      status: 'DRAFT',
      readTime: '0',
      imageThumbnail:
        'https://res.cloudinary.com/nedy123/image/upload/v1531499318/mbppkzeehprspnbbcym8.png',
      createdAt: '2019-05-23T04:57:06.905Z',
    },
    {
      title: 'How to live long',
      description: 'Description goes here',
      slug: 'How-to-live-long-c396d648-21b4-4090-bb21-22fdb8002da3',
      status: 'DRAFT',
      readTime: '0',
      imageThumbnail:
        'https://res.cloudinary.com/nedy123/image/upload/v1531499267/zfzagvwapebjvr5tzxbt.svg',
      createdAt: '2019-05-23T04:57:06.905Z',
    },
    {
      title: 'Giving back to the community',
      description: 'Description goes here',
      slug: 'Giving-back-to-the-community-d5a18ca3-4301-441e-b7b9-589027c480a5',
      status: 'DRAFT',
      readTime: '0',
      imageThumbnail:
        'https://res.cloudinary.com/nedy123/image/upload/v1531498302/w5pxscssyqtgft2lhuny.svg',
      createdAt: '2019-05-23T04:57:06.905Z',
    },
    {
      title: 'Owning your learning in life',
      description: 'Description goes here',
      slug: 'Owning-your-learning-in-life-9f852c3a-6fc0-4102-9f18-67f30fcaa2d1',
      status: 'DRAFT',
      readTime: '0',
      imageThumbnail:
        'https://res.cloudinary.com/nedy123/image/upload/v1509347819/stay_connected_iru4aq.jpg',
      createdAt: '2019-05-23T04:57:06.905Z',
    },
    {
      title: 'Highlights Test Article',
      description: 'Description goes here, Eben',
      slug: 'Hello-Article-5-842afa04-cc9e-43ad-9384-007793d3fdcb',
      status: 'DRAFT',
      readTime: '0',
      imageThumbnail:
        'https://res.cloudinary.com/nedy123/image/upload/v1531499318/mbppkzeehprspnbbcym8.png',
      createdAt: '2019-05-23T04:57:06.907Z',
    },
    {
      title: 'Magnam.',
      description:
        'Odio molestias molestiae excepturi quia quia quo. Ea aut expedita et. Assumenda et illum accusantium voluptas ipsum. Fugit earum est perferendis et natus.',
      slug: 'why-i-kill-the-bird-fde6799275c1',
      status: 'DRAFT',
      readTime: '0',
      imageThumbnail:
        'https://res.cloudinary.com/nedy123/image/upload/v1533036618/mb0zefwbaccwnsuwretb.jpg',
      createdAt: '2019-05-23T04:57:06.909Z',
    },
  ],
  authors: [
    {
      username: 'gentlejane',
      firstName: 'gentle',
      lastName: 'jane',
      image: null,
    },
    {
      username: 'igbominadeveloper',
      firstName: 'igbomina',
      lastName: 'developer',
      image:
        'https://res.cloudinary.com/emmsdan/image/upload/v1558798049/authors-haven/favour_ql6nkl.jpg',
    },
    {
      username: 'smileygiant',
      firstName: null,
      lastName: null,
      image: null,
    },
    {
      username: 'tinawhatsgood',
      firstName: 'tina',
      lastName: 'whatsgood',
      image: null,
    },
    {
      username: 'igbominadeveloperhjdhjdjhjdhjh',
      firstName: null,
      lastName: null,
      image: null,
    },
    {
      username: 'igbominadeveloperunder',
      firstName: null,
      lastName: null,
      image: null,
    },
    {
      username: 'igbominadeveloperunderhh',
      firstName: null,
      lastName: null,
      image: null,
    },
    {
      username: 'igbominadeveloperjhdj',
      firstName: null,
      lastName: null,
      image: null,
    },
    {
      username: 'igbominadeveloperhghg',
      firstName: null,
      lastName: null,
      image: null,
    },
  ],
  tags: [
    {
      name: 'technology',
    },
  ],
  tagArticleSearch: jest.fn(),
};

const emptyProps = {
  articles: [],
  authors: [],
  tags: [],
  tagArticleSearch: jest.fn(),
};
const dataComponent = shallow(<Search {...dataProps} />);
const emptyComponent = shallow(<Search {...emptyProps} />);

describe('Custom Search', () => {
  it('renders without errors when props are not empty', () => {
    expect(dataComponent).toMatchSnapshot();
  });

  it('renders without errors when props are empty', () => {
    expect(emptyComponent).toMatchSnapshot();
  });
});
