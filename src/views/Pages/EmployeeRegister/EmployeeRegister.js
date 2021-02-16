import React, {Component} from "react";
import {Container, Row, Col, Card, CardBlock,CardHeader, CardFooter, Button, Input, InputGroup, InputGroupAddon} from "reactstrap";
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { Field, Form, Errors, actions } from 'react-redux-form';
import {Link} from 'react-router-dom';
import {employeeRegistration,employeeRegisterPageToggleModel} from '../../../actions/employeeRegisterActions';
import Modals from '../../Components/Modals';
const isRequired = (val) => val && val.length > 0;
const isEmail = value =>
	{ if( value && value.length > 0){
			 return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		}else{
			return true;
		}
	}

class EmployeeRegister extends Component {

constructor(props) {
     super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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
				  <Form model="employeeRegister" onSubmit={this.handleSubmit} >
					<Field model="employeeRegister.firstName" className="form-group" validators={{ isRequired }}>
						<InputGroup className="mb-1">
							<InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
							<input type="text" className="form-control" placeholder="First Name" />
						</InputGroup>
						<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }}  model="employeeRegister.firstName" messages={{isRequired: 'Please provide a first name.',}}/>
					</Field>
				  
				    <Field model="employeeRegister.lastName" className="form-group" validators={{ isRequired }}>
						<InputGroup className="mb-1">
							<InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
							<input type="text" className="form-control" placeholder="Last Name" />
						</InputGroup>
						<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="employeeRegister.lastName" messages={{isRequired: 'Please provide a last name.',}}/>
				   </Field>
                                 
				    <Field model="employeeRegister.email" className="form-group" validators={{ isEmail,isRequired }}>
						<InputGroup className="mb-1">
							<InputGroupAddon>@</InputGroupAddon>
							<input type="email" className="form-control" placeholder="Email"/>
						</InputGroup>
						<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="employeeRegister.email" messages={{isRequired: 'Please provide a email.',isEmail: 'Invalid email address',}}/>
				  </Field>
                  <Button color="success" disabled={employeeRegisterPageSubmit} block>Create Account</Button>
				 </Form>
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

export default connect(mapState)(EmployeeRegister);
