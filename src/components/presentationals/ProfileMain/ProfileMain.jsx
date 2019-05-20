/* eslint-disable react/display-name */
import React from 'react';
import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// components
import Title from '../Title/Title';
import ArticleLists from '../ArticleLists/ArticleLists';
import ProfileSettings from '../ProfileSettings/ProfileSettings';
import BookmarkLists from '../../container/BookmarkLists/BookmarkLists';

// styles
import './ProfileMain.scss';

const ProfileMain = ({
  firstName,
  lastName,
  bio,
  publications,
  deleteArticle,
  isDeleting,
  view,
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
      render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
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
      render: () => (
        <Tab.Pane attached={false}>
          <BookmarkLists articles={publications} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Reports',
      render: () => <Tab.Pane attached={false}>Tab 6 Content</Tab.Pane>,
    },
    {
      menuItem: 'Settings',
      render: () => (
        <Tab.Pane attached={false}>
          <ProfileSettings currentView={view} />
        </Tab.Pane>
      ),
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
  view: PropTypes.func,
};

export default ProfileMain;
