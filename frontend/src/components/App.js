import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Dashboard from './posts/Dashboard';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <main role="main" className="container">
            <Dashboard />
          </main>
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
