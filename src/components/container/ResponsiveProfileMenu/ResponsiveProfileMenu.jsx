import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ResponsiveProfileMenu extends Component {
  render() {
    return (
      <p>fghnjhgvbnhg</p>
    )
  }
}

export const mapStateToProps = state => ({
  isAuthenticated: state.auth.loggedInUser !== null,
});

export default connect()(ResponsiveProfileMenu);
