import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts } from '../../actions/posts';
import posts from '../../reducers/posts';

export class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <Fragment>
          {this.props.posts.map((post) => (
            <div key={post.id} className="card border-primary mb-3">
              <div className="media-body">
                <div className="card-header">
                  <a className="mr-2" href="#">
                    {post.author}
                  </a>
                  <small className="text-muted">{post.date_posted}</small>
                </div>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">{post.title}</a>
                  </h4>
                  <p className="card-text">{post.content}</p>
                </div>
              </div>
            </div>
          ))}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps, { getPosts })(Posts);
