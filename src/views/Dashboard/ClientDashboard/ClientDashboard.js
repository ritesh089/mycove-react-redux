import React, { Component } from 'react';
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";
import Tables from '../../Components/Tables';
import Tabs from '../../Components/Tabs';
import PropertyRegister from '../../Pages/PropertyRegister/';
class ClientDashboard extends Component {

  render() {
    return (
    <div className="animated fadeIn">
		<Row>
			<Col xs="12" sm="6" md="3">
				<Card>
					<CardBlock className="card-body clearfix p-3">
						<i className="fa fa-user bg-primary p-3 font-2xl mr-3 float-left"></i>
						<div className="h5 mb-0 text-primary mt-2">5</div>
						<div className="text-muted text-uppercase font-weight-bold font-xs">Property Manager</div>
					</CardBlock>
					<CardFooter className="px-3 py-2">
						<a className="font-weight-bold font-xs btn-block text-muted" href="#/home/propertymanager">Add More<i className="fa fa-plus float-right font-lg"></i></a>
					</CardFooter>
				</Card>
			</Col>



			<Col xs="12" sm="6" md="3">
				<Card>
					<CardBlock className="card-body clearfix p-3">
						<i className="fa fa-list-alt bg-primary p-3 font-2xl mr-3 float-left"></i>
						<div className="h5 mb-0 text-primary mt-2">5</div>
						<div className="text-muted text-uppercase font-weight-bold font-xs">Properties</div>
					</CardBlock>
					<CardFooter className="px-3 py-2">
						<a className="font-weight-bold font-xs btn-block text-muted" href="#/home/excelupload">Add More<i className="fa fa-plus float-right font-lg"></i></a>
					</CardFooter>
				</Card>
			</Col>
			<Col xs="12" sm="6" md="3">
				<Card>
					<CardBlock className="card-body clearfix p-3">
						<i className="fa fa-building bg-primary p-3 font-2xl mr-3 float-left"></i>
						<div className="h5 mb-0 text-primary mt-2">5</div>
						<div className="text-muted text-uppercase font-weight-bold font-xs">Buildings</div>
					</CardBlock>
					<CardFooter className="px-3 py-2">
						<a className="font-weight-bold font-xs btn-block text-muted" href="#/home/employee/register">Add More<i className="fa fa-plus float-right font-lg"></i></a>
					</CardFooter>
				</Card>
			</Col>
			<Col xs="12" sm="6" md="3">
				<Card>
					<CardBlock className="card-body clearfix p-3">
						<i className="fa fa-building-o bg-primary p-3 font-2xl mr-3 float-left"></i>
						<div className="h5 mb-0 text-primary mt-2">5</div>
						<div className="text-muted text-uppercase font-weight-bold font-xs">Apartments</div>
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

export default ClientDashboard;
