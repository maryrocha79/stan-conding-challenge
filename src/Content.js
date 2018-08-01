import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TitleList from './TitleList';
import ErrorHandler from './404';

class Content extends Component {
  render() {
    return (
      <div>
        <h3>Movies</h3>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              component={props => <TitleList type="menu" {...props} />}
            />
            <Route
              exact
              path="/movie"
              component={props => <TitleList type="movie" {...props} />}
            />
            <Route
              exact
              path="/series"
              component={props => <TitleList type="series" {...props} />}
            />
            <Route component={ErrorHandler} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default Content;
