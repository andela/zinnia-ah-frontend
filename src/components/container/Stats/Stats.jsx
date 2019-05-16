import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tab, Label, Menu } from 'semantic-ui-react';

import { getUserReadingStats } from '../../../store/modules/stats';

// styles
import './Stats.scss';

//components
import ReadingList from '../../presentationals/ReadingLists/ReadingList';

const Stats = props => {
  const {
    stats: { hits, reads },
    getUserReadStats,
  } = props;

  const getStats = async () => {
    await getUserReadStats();
  };

  React.useEffect(() => {
    getStats();
  }, []);

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
            <ReadingList articles={reads} type="reads" />
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
            <ReadingList articles={hits} type="hits" />
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
};
const mapStateToProps = state => ({
  stats: state.stats,
});
const mapDispatchToProps = dispatch => ({
  getUserReadStats: () => dispatch(getUserReadingStats()),
});
Stats.propTypes = {
  stats: PropTypes.object.isRequired,
  getUserReadStats: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Stats);
