import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Dashboard from './posts/Dashboard';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import history from '../history';
import PostCreate from "./posts/PostCreate";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Fragment>
            <Header />
            <main role="main" className="container">
              <Switch>
                <Route exact path='/react/' component={Dashboard}/>
                <Route exact path='/react/addPost/' component={PostCreate}/>
              </Switch>
            </main>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
