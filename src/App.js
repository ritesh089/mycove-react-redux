// This component handles the App template used on every page.
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
  // Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'

// Containers
import Client from './containers/Client/'

// Views
import Login from './views/Pages/Login/'
import ClientRegister from './views/Pages/ClientRegister/'
import userConfirmation from './views/Pages/userConfirmation/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'
import EmployeeRegister from './views/Pages/EmployeeRegister/';

const history = createBrowserHistory();


const App = ({ authenticated, checked,user}) => (
  <HashRouter history={history}>
    { checked &&
      <Switch>
       <PrivateRoute  path="/home" component={Client} authenticated={authenticated} user={user}/>
		<Route path="/register" name="Register Page" component={ClientRegister}/>
		<Route path="/register-confirm" name="Register Confirmation Page" component={userConfirmation}/>
		<Route path="/404" name="Page 404" component={Page404}/>
		<Route path="/500" name="Page 500" component={Page500}/>
        <Route path="/login" component={Login}/>
		 <Redirect from="/" to="/home"/>
      </Switch>
    }
  </HashRouter>
);

const { bool } = PropTypes;

App.propTypes = {
  authenticated: bool.isRequired,
  checked: bool.isRequired
};

const mapState = ({ session }) => ({
  checked: session.checked,
  authenticated: session.authenticated,
  user: session.user
});

export default connect(mapState)(App);
