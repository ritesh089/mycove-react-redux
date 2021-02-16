import React, { Component } from 'react';
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class EmployeeDashboard extends Component {

  render() {
    return (
    <div className="animated fadeIn">
		<Row>
			
			<Col xs="12" sm="6" md="3">
				<Card>
					<CardBlock className="card-body clearfix p-3">
						<i className="fa fa-users bg-primary p-3 font-2xl mr-3 float-left"></i>
						<div className="h5 mb-0 text-primary mt-2">5</div>
						<div className="text-muted text-uppercase font-weight-bold font-xs">Tenant</div>
					</CardBlock>
					<CardFooter className="px-3 py-2">
						<a className="font-weight-bold font-xs btn-block text-muted" href="#/home/employee/register">Add More<i className="fa fa-plus float-right font-lg"></i></a>
					</CardFooter>
				</Card>
			</Col>
		</Row>
	</div>
    )
  }
}

export default EmployeeDashboard;
