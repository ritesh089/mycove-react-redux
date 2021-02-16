import React, { Component } from 'react';
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";
import PropertyList from '../TableList/PropertyList';
class Property extends Component {

  render() {
    return (
    <div className="animated fadeIn">

    <Row>
      <Col>
        <Card>
          <CardHeader>
              Property List
              <span className="float-right">
                <a className="btn-block" href="#/home/property/register">
                &nbsp;&nbsp;
                <i className="fa fa-plus"></i>
                Add Property
                </a>
              </span>
            </CardHeader>
            <CardBlock className="card-body">
              <PropertyList/>
            </CardBlock>
          </Card>
        </Col>
    </Row>
	</div>



    )
  }
}

export default Property;
