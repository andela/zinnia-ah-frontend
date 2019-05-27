import React, { Component } from 'react';

import PropTypes from 'prop-types';

import CommentCard from './CommentCard';
import ConfirmationModal from '../ComfirmationModal/ConfirmationModal';

class CommentList extends Component {
  state = {
    isModalActive: false,
    modalAcceptFunction: () => {},
    modalRejectFunction: () => {},
  };

  closeModal = () => {
    this.setState({
      isModalActive: false,
    });
  };

  displayModal = (acceptFunction, rejectFunction = this.closeModal) => {
    const onAccept = () => {
      acceptFunction();
      this.closeModal();
    };
    this.setState({
      isModalActive: true,
      modalAcceptFunction: onAccept,
      modalRejectFunction: rejectFunction,
    });
  };

  processComments = comments => {
    return comments.sort((a, b) => {
      const previousDate = new Date(a.createdAt);
      const newDate = new Date(b.createdAt);
      return newDate - previousDate;
    });
  };

  confirmationModal = () => {};
  render() {
    return (
      <div>
        {this.state.isModalActive && (
          <ConfirmationModal
            acceptFunction={this.state.modalAcceptFunction}
            rejectFunction={this.state.modalRejectFunction}
          />
        )}
        {this.props.comments === []
          ? 'There are no comments'
          : this.processComments(this.props.comments).map(comment => (
              <CommentCard
                key={comment.id}
                commentDetails={comment}
                displayModal={this.displayModal}
              />
            ))}
      </div>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentList;
