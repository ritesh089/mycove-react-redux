import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/ClientSidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import ClientDashboard from '../../views/Dashboard/ClientDashboard/';
import EmployeeRegister from '../../views/Pages/EmployeeRegister/';
import ExcelUpload from '../../views/Pages/ExcelUpload/';
import PropertyManagerRegister from '../../views/Pages/PropertyManagerRegister/';
import PropertyManager from '../../views/Pages/PropertyManager/';
import Property from '../../views/Pages/Property/';
import PropertyManagerBulkRegister from '../../views/Pages/PropertyManagerBulkRegister/';
import Forms from '../../views/Components/Forms/';
import PropertyRegister from '../../views/Pages/PropertyRegister/';
import Profile from '../../views/Pages/Profile/';

class Client extends Component {
  render() {
    return (
      <div className="app">
        <Header {...this.props} />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route  exact path="/home"  component={ClientDashboard}/>
				        <Route   path="/home/propertymanager/register" name="Forms" component={PropertyManagerRegister}/>
                <Route   path="/home/propertymanager/bulkRegister" name="Forms" component={PropertyManagerBulkRegister}/>
                <Route   path="/home/property/register/:name"  component={PropertyRegister}/>
                <Route   path="/home/propertymanager" name="Forms" component={PropertyManager}/>
                <Route   path="/home/property" name="Forms" component={Property}/>
                <Route   path="/home/profile" name="Forms" component={Profile}/>
                <Route   path="/home/excelupload" name="Forms" component={ExcelUpload}/>

				        <Redirect from="/" to="/home"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Client;
