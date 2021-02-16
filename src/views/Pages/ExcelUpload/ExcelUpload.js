import React, {Component} from "react";
import {Container, Row, Col, Card, CardBlock,CardHeader, CardFooter, Button, Input, InputGroup, InputGroupAddon} from "reactstrap";
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { Field, Form, Errors, actions } from 'react-redux-form';
import {Link} from 'react-router-dom';
import xlsParser from 'xls-parser';

import {employeeRegistration,employeeRegisterPageToggleModel,systemUserAction} from '../../../actions/propertyManagerRegisterActions';
import Modals from '../../Components/Modals';
const isRequired = (val) => val && val.length > 0;
const isEmail = value =>
	{ if( value && value.length > 0){
			 return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		}else{
			return true;
		}
	}

class ExcelUpload extends Component {

constructor(props) {
     super(props);
    this.handleFileUpload = this.handleFileUpload.bind(this);
	this.toggle = this.toggle.bind(this);
	this.redirectPage=this.redirectPage.bind(this);
    };



   handleSubmit(employeeRegister) {
    const { dispatch,history } = this.props
    dispatch(employeeRegistration(employeeRegister,history));
  }
   toggle() {
    const { dispatch } = this.props
    dispatch(employeeRegisterPageToggleModel());
  }

   redirectPage() {
    const { history,dispatch } = this.props
	dispatch(employeeRegisterPageToggleModel());
    history.push('/register-confirm');
  }

	handleFileUpload( e ) {
		const { history,dispatch } = this.props
  var file = e.target.files[0];

	//console.log(JSON.stringify(data))
	//var test=eval(JSON.stringify(data))
	//console.log(xlsParser.onFileSelection(file)=>data=>JSON.stringify(data))



	new Promise(function(resolve) {
		var data=xlsParser.onFileSelection(file);
    resolve(data);
}).then(data=>{
	console.log(data)
	dispatch(systemUserAction(data));

});
//console.log(data);



}


  render() {
  const { employeeRegisterPageModel,employeeRegisterPageModelTitle,employeeRegisterPageModelMessage,employeeRegisterPageSubmitButton,employeeRegisterPageModelClassName,employeeRegisterPageSubmit } = this.props
    return (
       <div className="animated fadeIn">
        <Container>
		<Modals modal={employeeRegisterPageModel} modelToggle={this.toggle}  primaryButtonAction={employeeRegisterPageModelClassName=='modal-success'?this.redirectPage:this.toggle} modalTitle={employeeRegisterPageModelTitle} modalMessage={employeeRegisterPageModelMessage} modalPrimaryButton={employeeRegisterPageSubmitButton}  modelClassName={employeeRegisterPageModelClassName}/>
          <Row >
            <Col md="6">
              <Card className="mx-6">
                <CardHeader>
				<strong>Employee Registration</strong>
				</CardHeader>
				<CardBlock className="card-body p-6">
                  <p className="text-muted">Add your employees</p>
				  <Col md="10">
						<input type="file" onChange={this.handleFileUpload} />
	        </Col>
				</CardBlock>
				</Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


const mapState = ({ employeeRegisterPage }) => ({
  employeeRegisterPageSubmit:employeeRegisterPage.employeeRegisterPageSubmit,
  employeeRegisterPageSubmitButton:employeeRegisterPage.employeeRegisterPageSubmitButton,
  employeeRegisterPageSubmitLoading:employeeRegisterPage.employeeRegisterPageSubmitLoading,
  employeeRegisterPageModel:employeeRegisterPage.employeeRegisterPageModel,
  employeeRegisterPageModelMessage:employeeRegisterPage.employeeRegisterPageModelMessage,
  employeeRegisterPageModelTitle:employeeRegisterPage.employeeRegisterPageModelTitle,
  employeeRegisterPageModelClassName:employeeRegisterPage.employeeRegisterPageModelClassName
});

export default connect(mapState)(ExcelUpload);
