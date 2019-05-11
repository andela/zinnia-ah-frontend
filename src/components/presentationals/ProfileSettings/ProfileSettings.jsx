import React from 'react';
import { Form } from 'semantic-ui-react';

// components
import Button from '../Button/Button';

const ProfileSettings = () => {
  return (
    <div className="settings">
      <div className="edit-profile">
        <Form>
          <Form.Group widths="equal">
            <Form.Input fluid label="First name" placeholder="" />
            <Form.Input fluid label="Last name" placeholder="" />
            <Form.Input fluid label="Username" placeholder="" />
          </Form.Group>
          <Form.TextArea
            label="Bio"
            placeholder="Tell us more about you...(450 characters max)"
            maxLength="450"
            rows={5}
          />
          <div
            className="field"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Button className="btn-dark" value="SAVE CHANGES" type="submit" />
          </div>
        </Form>
      </div>
    </div>
  );
};
export default ProfileSettings;
