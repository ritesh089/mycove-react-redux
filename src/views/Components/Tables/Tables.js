import React, {Component} from "react";
import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBlock,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";


class Tables extends Component {
  render() {
    return (
      <div>
        <Col>
          <Card>
            <CardHeader>
            Property Manager List
              <span className="float-right">
              <a className="btn-block" href="#/home/propertymanager/register">
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

              <Table hover responsive  className="table-outline mb-0 d-none d-sm-table">

                <thead className="thead-default">
                <tr className="text-center">
                  <th className="text-center">Property Manager</th>
                  <th className="text-center">PM Mobile No</th>
                  <th className="text-center">Email</th>
                  <th className="text-center">Status</th>
                </tr>
                </thead>
                <tbody>
                <tr className="text-center">
                  <td>Jomon Joseph</td>
                  <td>787387777</td>
                  <td>jomon143@gmail.com</td>
                  <td>
                    <Badge color="success">Active</Badge>
                  </td>
                </tr>
                </tbody>
              </Table>
              <br/>
              <nav>
                <Pagination>
                  <PaginationItem><PaginationLink previous href="#">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next href="#">Next</PaginationLink></PaginationItem>
                </Pagination>
              </nav>
            </CardBlock>
          </Card>
        </Col>
      </div>

    )
  }
}

export default Tables;
