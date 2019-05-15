/* eslint-disable react/display-name */
import React from 'react';
import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// components
import Title from '../Title/Title';
import ArticleLists from '../ArticleLists/ArticleLists';
import Stats from '../Stats/Stats';

// styles
import './ProfileMain.scss';

const ProfileMain = ({
  firstName,
  lastName,
  bio,
  publications,
  deleteArticle,
  isDeleting,
}) => {
  const panes = [
    {
      menuItem: 'Posts',
      render: () => (
        <Tab.Pane attached={false}>
          <ArticleLists
            articles={publications}
            deleteArticle={deleteArticle}
            isDeleting={isDeleting}
          />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Stats',
      render: () => (
        <Tab.Pane attached={false}>
          <Stats />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Likes',
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },
    {
      menuItem: 'Comments',
      render: () => <Tab.Pane attached={false}>Tab 4 Content</Tab.Pane>,
    },
    {
      menuItem: 'Bookmarks',
      render: () => <Tab.Pane attached={false}>Tab 5 Content</Tab.Pane>,
    },
    {
      menuItem: 'Reports',
      render: () => <Tab.Pane attached={false}>Tab 6 Content</Tab.Pane>,
    },
    {
      menuItem: 'Settings',
      render: () => <Tab.Pane attached={false}>Tab 6 Content</Tab.Pane>,
    },
  ];

  return (
    <div className="main">
      <Title content={`${firstName} ${lastName}`} className="title-lg" />
      <div
        style={{
          maxHeight: '200px',
        }}
      >
        {bio}
      </div>
      <div className="profile-tab-menu">
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </div>
    </div>
  );
};

ProfileMain.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  bio: PropTypes.string,
  publications: PropTypes.array,
  deleteArticle: PropTypes.func,
  isDeleting: PropTypes.bool,
};

export default ProfileMain;
