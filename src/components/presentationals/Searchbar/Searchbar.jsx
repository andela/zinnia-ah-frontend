import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Searchbar.scss';

class Searchbar extends Component {
  state = { term: '' };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search">
        <form onSubmit={this.onFormSubmit} className="ui form search-bar">
          <div className="field">
            <div className="ui icon input">
              <input
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func,
};

export default Searchbar;
