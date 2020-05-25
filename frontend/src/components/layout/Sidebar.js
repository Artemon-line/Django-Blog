import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStats } from '../../actions/stats';
import stats from '../../reducers/stats';

export class Sidebar extends Component {
  static propTypes = {
    stats: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getStats();
  }

  render() {
    return (
      <Fragment>
        <div className="content-section">
          <h3>Our Sidebar</h3>
          <p className="text-muted">
            You can put any information here you'd like.
          </p>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-cente">
              Posts
              <span className="badge badge-primary badge-pill">
                {this.props.stats.posts}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-cente">
              Users
              <span className="badge badge-primary badge-pill">
                {this.props.stats.users}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-cente">
              Comments
              <span className="badge badge-primary badge-pill">
                {this.props.stats.comments}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-cente">
              Likes
              <span className="badge badge-primary badge-pill">
                {this.props.stats.likes}
              </span>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  stats: state.stats,
});

export default connect(mapStateToProps, { getStats })(Sidebar);
