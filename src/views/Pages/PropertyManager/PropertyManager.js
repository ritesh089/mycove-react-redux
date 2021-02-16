import React, { Component } from 'react';
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";
import PMList from '../TableList/PMList';
class PropertyManager extends Component {

  render() {
    return (
    <div className="animated fadeIn">

    <Row>
      <Col>
        <Card>
          <CardHeader>
              Property Manager List
              <span className="float-right">
                <a className="btn-block" href="#/home/propertymanager/bulkRegister">
                &nbsp;&nbsp;
                <i className="fa fa-upload"></i>
                Bulk Upload
                </a>
              </span>
              <span className="float-right">
                <a className="btn-block" href="#/home/propertymanager/register">
                &nbsp;&nbsp;
                <i className="fa fa-plus"></i>
                Add Property Manager
                </a>
              </span>
            </CardHeader>
            <CardBlock className="card-body">
              <PMList/>
            </CardBlock>
          </Card>
        </Col>
    </Row>
	</div>



    )
  }
}

export default PropertyManager;
