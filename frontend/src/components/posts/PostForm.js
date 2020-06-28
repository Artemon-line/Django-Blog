import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';

const PostForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Post Title</label>
        <div>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Post title"
            className="form-control"
          />
        </div>
        <small id="titleHelp" className="form-text text-muted">Enter post title</small>
      </div>
      <div className="form-group">
        <label>Post Content</label>
        <div>
          <Field
            name="content"
            component="textarea"
            className="form-control"
          />
        </div>
        <small id="contextHelp" className="form-text text-muted">Enter post context</small>
      </div>
      <div className="clearfix" role="group">
        <button className="btn btn-primary float-left" type="submit" disabled={pristine || submitting}>Submit</button>
        <button className="btn btn-secondary float-right" type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'postForm'
})(PostForm);
