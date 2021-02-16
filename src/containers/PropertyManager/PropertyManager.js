import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import PropertyManagerSidebar from '../../components/Sidebar/PropertyManagerSidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import PropertyManagerDashboard from '../../views/Dashboard/PropertyManagerDashboard/';
import EmployeeRegister from '../../views/Pages/EmployeeRegister/';
import Forms from '../../views/Components/Forms/';
import Property from '../../views/Pages/Property/';
import PropertyRegister from '../../views/Pages/PropertyRegister/';

class PropertyManager extends Component {
  render() {
    return (
      <div className="app">
        <Header {...this.props} />
        <div className="app-body">
          <PropertyManagerSidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route  exact path="/home"  component={PropertyManagerDashboard}/>
                <Route   path="/home/employee/register" name="Forms" component={EmployeeRegister}/>
                <Route   path="/home/property/register/:name"  component={PropertyRegister}/>
                <Route   path="/home/property" name="Forms" component={Property}/>
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

export default PropertyManager;
