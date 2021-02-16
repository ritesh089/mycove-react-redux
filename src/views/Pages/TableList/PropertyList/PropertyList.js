
import React from "react";
import { render } from "react-dom";
import {getPropertyListAction} from '../../../../actions/propertyRegisterActions';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { connect } from 'react-redux';
const qualityType = {
'Active': 'Active',
'Not Active': 'Not Active'
};

function enumFormatter(cell, row, enumObject) {
return enumObject[cell];
}


class ActiveFormatter extends React.Component {
  render() {
    return (
    <div>  <a  href={'#/home/property/register/'+this.props.active} ><i className="fa fa-pencil btn btn-primary "></i></a>   <a href="#" ><i className="fa fa-trash-o btn btn-danger "></i></a></div>
    );
  }
}

function activeFormatter(cell, row) {
  return (
    <ActiveFormatter active={ cell } />
  );
}

class PropertyList extends React.Component {

  constructor(props) {
    super(props);


  }




  componentDidMount() {
      console.log('Component DID MOUNT!');
      const { dispatch,history } = this.props
      dispatch(getPropertyListAction());
   }



  render() {



    const { propertyList } = this.props


    const options = {
      page: 1,  // which page you want to show as default
      sizePerPageList: [ {
        text: '10', value: 10
      }, {
        text: '20', value: 20
      }], // you can change the dropdown list for size per page
      sizePerPage: 10,  // which size per page you want to locate as default
      pageStartIndex: 1, // where to start counting the pages
      paginationSize: 3,  // the pagination bar size.
      prePage: 'Prev', // Previous page button text
      nextPage: 'Next', // Next page button text
      firstPage: 'First', // First page button text
      lastPage: 'Last', // Last page button text
      //paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
      //paginationPosition: 'top'  // default is bottom, top and both is all available
      // hideSizePerPage: true > You can hide the dropdown for sizePerPage
       alwaysShowAllBtns: true // Always show next and previous button
      // withFirstAndLast: false > Hide the going to First and Last page button
    };

    return (
      <BootstrapTable data={ propertyList } pagination={ true } options={ options }  bordered={ false }
      tableHeaderClass='thead-default'
            tableBodyClass='table-outline mb-0 d-none d-sm-table table table-hover'
            containerClass=''
            tableContainerClass=''
            headerContainerClass=''
            bodyContainerClass='table-responsive'>


        <TableHeaderColumn   dataField='property_name' filter={ { type: 'TextFilter', delay: 500 } } isKey dataSort>Property Name</TableHeaderColumn>
        <TableHeaderColumn  dataField='property_manager' filter={ { type: 'TextFilter', delay: 500 } }  dataSort> Property Manager</TableHeaderColumn>
        <TableHeaderColumn   dataField='mobile_no' filter={ { type: 'RegexFilter', delay: 500 } } dataSort>PM Mobile No</TableHeaderColumn>
        <TableHeaderColumn dataField='email' filter={ { type: 'TextFilter', delay: 500 } } dataSort>Email</TableHeaderColumn>
        <TableHeaderColumn  dataField='property_id' dataFormat={ activeFormatter } >Action</TableHeaderColumn>

      </BootstrapTable>
    );
  }
}

const mapState = ({ propertyRegisterPage }) => ({
  propertyList: propertyRegisterPage.propertyList
});

export default connect(mapState)(PropertyList);
