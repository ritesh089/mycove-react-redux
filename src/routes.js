import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { sessionService } from 'redux-react-session';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Full from './containers/Full/'
import Login from './views/Pages/Login/'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'
import RegisterConfirm from './views/Pages/RegisterConfirm/'
import EmployeeRegister from '../../views/Pages/EmployeeRegister/';




export default (
  <Route path="/" component={App}>
    <IndexRoute onEnter={sessionService.checkAuth} component={Full} />
    <Route path="login" component={Login} />
	<Route path="/test" component={EmployeeRegister} />
	<Route path="/register" name="Register Page" component={Register}/>
	<Route path="/register-confirm" name="Register Confirmation Page" component={RegisterConfirm}/>
	<Route path="/404" name="Page 404" component={Page404}/>
	<Route path="/500" name="Page 500" component={Page500}/>
  </Route>
);