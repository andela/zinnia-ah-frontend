import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

class CommentReaction extends Component {
  clickHandler = event => {
    console.log(event);
  };
  render() {
    return (
      <div>
        <button onClick={this.clickHandler} className="like-button">
          <Icon
            name="thumbs up outline"
            style={{
              fontSize: '1.80rem',
            }}
          />
        </button>
        <span className="count">23</span>
      </div>
    );
  }
}

export default CommentReaction;
