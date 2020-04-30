import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStats } from '../../actions/stats';
import stats from '../../reducers/stats';

export class Sidebar extends Component {
  static propTypes = {
    stats: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getStats();
  }

  render() {
    return (
      <div className="content-section">
        <h3>Our Sidebar</h3>
        <p className="text-muted">
          You can put any information here you'd like.
        </p>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-cente">
            Posts
            <span className="badge badge-primary badge-pill">14</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-cente">
            Users
            <span className="badge badge-primary badge-pill">7</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-cente">
            Comments
            <span className="badge badge-primary badge-pill">3</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-cente">
            Likes
            <span className="badge badge-primary badge-pill">1</span>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stats: state.stats.stats,
});

export default connect(mapStateToProps, { getStats })(Sidebar);
