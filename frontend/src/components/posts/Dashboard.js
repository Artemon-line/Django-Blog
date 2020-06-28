import React, { Fragment } from 'react';
import Posts from './Posts';
import Sidebar from '../layout/Sidebar';

export default function Dashboard() {
  return (
    <Fragment>
      <div className="container-fluid" style={{ padding: 1 + 'rem' }}>
        <div className="row">
          <div className="col-md-8">
            <Posts />
          </div>
          <div className="col-md-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
