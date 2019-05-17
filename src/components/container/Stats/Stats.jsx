/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tab, Label, Menu } from 'semantic-ui-react';

import { getUserReadingStats } from '../../../store/modules/stats';

// styles
import './Stats.scss';

//components
import ReadingList from '../../presentationals/ReadingLists/ReadingList';

export class Stats extends Component {
  componentDidMount() {
    this.props.getUserReadingStats();
  }
  render() {
    const { hits, reads } = this.props;
    const panes = [
      {
        menuItem: (
          <Menu.Item key="reads">
            READS<Label>{reads.length}</Label>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            <div
              style={{
                marginTop: '0.0625rem',
              }}
            >
              <ReadingList reads={reads} type="hits" />
            </div>
          </Tab.Pane>
        ),
      },
      {
        menuItem: (
          <Menu.Item key="hits">
            HITS<Label>{hits.length}</Label>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            <div
              style={{
                marginTop: '0.0625rem',
              }}
            >
              <p>No hits yet</p>
            </div>
          </Tab.Pane>
        ),
      },
    ];
    return (
      <div className="count">
        <div className="stats-tab-menu">
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </div>
      </div>
    );
  }
}
Stats.propTypes = {
  hits: PropTypes.array,
  reads: PropTypes.array,
  getUserReadingStats: PropTypes.func,
};
const mapStateToProps = state => ({
  hits: state.stats.hits,
  reads: state.stats.reads,
});

export default connect(
  mapStateToProps,
  { getUserReadingStats },
)(Stats);
