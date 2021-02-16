import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/EmployeeSidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import EmployeeDashboard from '../../views/Dashboard/EmployeeDashboard/';
import EmployeeRegister from '../../views/Pages/EmployeeRegister/';
import Forms from '../../views/Components/Forms/';

class Employee extends Component {
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
                <Route  exact path="/home"  component={EmployeeDashboard}/>
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

export default Employee;
