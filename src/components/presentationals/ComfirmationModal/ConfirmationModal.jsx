import React from 'react';
import PropTypes from 'prop-types';
import { Header, Icon, Modal, Button } from 'semantic-ui-react';

const ConfirmationModal = ({ acceptFunction, rejectFunction }) => {
  return (
    <Modal
      className="comment-delete-modal"
      key="delete-modal"
      open={true}
      basic
      size="small"
    >
      <Header
        icon="trash"
        content="Are you sure you want to delete this comment?"
      />
      <Modal.Content>
        <p>This action is not reversible</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={() => rejectFunction()}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" inverted onClick={() => acceptFunction()}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

ConfirmationModal.propTypes = {
  acceptFunction: PropTypes.func,
  rejectFunction: PropTypes.func,
};

export default ConfirmationModal;
