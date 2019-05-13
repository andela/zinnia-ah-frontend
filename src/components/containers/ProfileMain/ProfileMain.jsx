/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { Tab, Icon } from 'semantic-ui-react';

import Title from '../../presentationals/Title/Title.jsx';
import ProfileSettings from '../ProfileSettings/ProfileSettings.jsx';
import './ProfileMain.scss';

export default function ProfileMain(props) {
  const { firstName, lastName, bio, publications } = props.profile;
  const panes = [
    {
      menuItem: 'Posts',
      render: () => <Tab.Pane attached={false}>{publications}</Tab.Pane>,
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
      render: () => <Tab.Pane attached={false}>Tab 5 Content</Tab.Pane>,
    },
    {
      menuItem: 'Reports',
      render: () => <Tab.Pane attached={false}>Tab 6 Content</Tab.Pane>,
    },
    {
      menuItem: 'Settings',
      render: () => (
        <Tab.Pane attached={false}>
          <ProfileSettings />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <div className="main">
      {!firstName || !lastName ? (
        <div
          style={{
            display: 'flex',
          }}
        >
          <Title content="Full Name" className="title-lg fade-2" />
          <Icon
            name="edit outline"
            style={{
              fontSize: '20px',
              marginLeft: '40px',
            }}
          />
        </div>
      ) : (
        <Title content={`${firstName} ${lastName}`} className="title-lg" />
      )}

      <div
        style={{
          maxHeight: '200px',
        }}
      >
        {bio ? (
          <p
            style={{
              fontWeight: 'lighter',
              fontSize: '18px',
              lineHeight: '27px',
              marginBottom: '20px',
            }}
          >
            {bio}
          </p>
        ) : (
          <p
            style={{
              fontWeight: 'lighter',
              fontSize: '18px',
              lineHeight: '27px',
              marginBottom: '20px',
            }}
          >
            Please tell us about yourself by editing your profile
          </p>
        )}
      </div>
      <div className="profile-tab-menu">
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </div>
    </div>
  );
}
