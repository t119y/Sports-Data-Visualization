import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router'
import { ReduxRouter } from 'redux-router';
import App from './components/App';

export default class AppRouter extends Component {
  render() {
    //Each Route below corresponds to a page
    return (
      <ReduxRouter>
        <Route path="/" component={ App }>

        </Route>
      </ReduxRouter>
    )
  }
}
