import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import Client from './containers/Client/'
import Employee from './containers/Employee/'
import PropertyManager from './containers/PropertyManager/'

// Views
import Login from './views/Pages/Login/'


const PrivateRoute = ({ component, exact = false, path, authenticated,user }) => (

  <Route
    exact={exact}
    path={path}
    render={props => (
		authenticated ? (
			user.role=='client'?
				React.createElement(Client, props):
			user.role=='employee'?
					React.createElement(Employee, props):
			user.role=='propertymanager'?
					React.createElement(PropertyManager, props):
					React.createElement(Login, props)
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}
  />
);

const { object, bool, string, func } = PropTypes;

PrivateRoute.propTypes = {
  component: func.isRequired,
  exact: bool,
  path: string.isRequired,
  authenticated: bool.isRequired,
  location: object
};

export default PrivateRoute;
