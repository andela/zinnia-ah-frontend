import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tab, Label, Menu } from 'semantic-ui-react';
// import ArticleLists from '../ArticleLists/ArticleLists';
// import Title from '../Title/Title';
import {
  getUserReadingStats,
  statsReducer,
} from '../../../store/modules/stats';

// styles
import './Stats.scss';

const Stats = props => {
  const { readStats, getUserReadStats } = props;
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
          READS<Label>8{readStats}</Label>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane>
          <div
            style={{
              marginTop: '100px',
            }}
          >
            Reads
            {/* <ReadingList /> */}
          </div>
        </Tab.Pane>
      ),
    },
    {
      menuItem: (
        <Menu.Item key="hits">
          HITS<Label>20</Label>
        </Menu.Item>
      ),
      render: () => <Tab.Pane>Hits</Tab.Pane>,
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
const mapStateToProps = () => ({
  articlesRead: statsReducer.response,
});
const mapDispatchToProps = dispatch => ({
  getUserReadStats: () => dispatch(getUserReadingStats()),
});
Stats.propTypes = {
  readStats: PropTypes.number,
  getUserReadStats: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Stats);
