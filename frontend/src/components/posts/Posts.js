import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts } from '../../actions/posts';
import posts from '../../reducers/posts';

export class Posts extends Component {

  static propTypes = {
    posts: PropTypes.array.isRequired
  }

  componentDidMount(){
    this.props.getPosts();
  }

  render() {
    return (
      <Fragment>
        <h1>Posts list</h1>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
})

export default connect(mapStateToProps, { getPosts })(Posts);
