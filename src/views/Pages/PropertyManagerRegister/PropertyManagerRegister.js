import React, {Component} from "react";
import {Container, Row, Col, Card, CardBlock,CardHeader, CardFooter, Button, Input, InputGroup, InputGroupAddon} from "reactstrap";
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { Field, Form, Errors, actions } from 'react-redux-form';
import {Link} from 'react-router-dom';
import {propertyManagerRegistration,propertyManagerRegisterPageToggleModel,systemUserAction} from '../../../actions/propertyManagerRegisterActions';
import Modals from '../../Components/Modals';
import xlsParser from 'xls-parser';
const isRequired = (val) => val && val.length > 0;
const isEmail = value =>
	{ if( value && value.length > 0){
			 return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		}else{
			return true;
		}
	}

class PropertyManagerRegister extends Component {

constructor(props) {
     super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
	this.toggle = this.toggle.bind(this);
	this.redirectPage=this.redirectPage.bind(this);
	this.handleFileUpload = this.handleFileUpload.bind(this);
    };



   handleSubmit(propertyManagerRegister) {
    const { dispatch,history } = this.props
    dispatch(propertyManagerRegistration(propertyManagerRegister,history));
  }
   toggle() {
    const { dispatch } = this.props
    dispatch(propertyManagerRegisterPageToggleModel());
  }

   redirectPage() {
    const { history,dispatch } = this.props
	dispatch(propertyManagerRegisterPageToggleModel());
    history.push('/register-confirm');
  }

	handleFileUpload( e ) {
		const { history,dispatch } = this.props
	  var file = e.target.files[0];
		new Promise(function(resolve) {
			var data=xlsParser.onFileSelection(file);
			console.log(data)
	    resolve(data);
			console.log('tete1')
		}).then(data=>{
			console.log(data)
			console.log(JSON.stringify(data));

			dispatch(systemUserAction(data));
		});
	}


  render() {
  const { propertyManagerRegisterPageModel,propertyManagerRegisterPageModelTitle,propertyManagerRegisterPageModelMessage,propertyManagerRegisterPageSubmitButton,propertyManagerRegisterPageModelClassName,propertyManagerRegisterPageSubmit } = this.props
    return (
       <div className="animated fadeIn">
        <Container>
		<Modals modal={propertyManagerRegisterPageModel} modelToggle={this.toggle}  primaryButtonAction={propertyManagerRegisterPageModelClassName=='modal-success'?this.redirectPage:this.toggle} modalTitle={propertyManagerRegisterPageModelTitle} modalMessage={propertyManagerRegisterPageModelMessage} modalPrimaryButton={propertyManagerRegisterPageSubmitButton}  modelClassName={propertyManagerRegisterPageModelClassName}/>
          <Row >
            <Col md="5">
              <Card className="mx-6">
                <CardHeader>
				<strong>Property Manager Registration</strong>
				</CardHeader>
				<CardBlock className="card-body p-6">
                  <p className="text-muted">Add your property manager</p>
				  <Form model="propertyManagerRegister" onSubmit={this.handleSubmit} >
					<Field model="propertyManagerRegister.firstName" className="form-group" validators={{ isRequired }}>
						<InputGroup className="mb-1">
							<InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
							<input type="text" className="form-control" placeholder="First Name" />
						</InputGroup>
						<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }}  model="propertyManagerRegister.firstName" messages={{isRequired: 'Please provide a first name.',}}/>
					</Field>

				    <Field model="propertyManagerRegister.lastName" className="form-group" validators={{ isRequired }}>
						<InputGroup className="mb-1">
							<InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
							<input type="text" className="form-control" placeholder="Last Name" />
						</InputGroup>
						<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="propertyManagerRegister.lastName" messages={{isRequired: 'Please provide a last name.',}}/>
				   </Field>

				    <Field model="propertyManagerRegister.email" className="form-group" validators={{ isEmail,isRequired }}>
						<InputGroup className="mb-1">
							<InputGroupAddon>@</InputGroupAddon>
							<input type="email" className="form-control" placeholder="Email"/>
						</InputGroup>
						<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="propertyManagerRegister.email" messages={{isRequired: 'Please provide a email.',isEmail: 'Invalid email address',}}/>
				  </Field>

				  <Field model="propertyManagerRegister.propertyName" className="form-group" validators={{ isRequired }}>
						<InputGroup className="mb-1">
							<InputGroupAddon><i className="fa fa-list-alt"></i></InputGroupAddon>
							<input type="text" className="form-control" placeholder="Property Name"/>
						</InputGroup>
						<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="propertyManagerRegister.propertyName" messages={{isRequired: 'Please provide a property.',}}/>
				  </Field>
                  <Button color="success" disabled={propertyManagerRegisterPageSubmit} block>Create Account</Button>
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


const mapState = ({ propertyManagerRegisterPage }) => ({
  propertyManagerRegisterPageSubmit:propertyManagerRegisterPage.propertyManagerRegisterPageSubmit,
  propertyManagerRegisterPageSubmitButton:propertyManagerRegisterPage.propertyManagerRegisterPageSubmitButton,
  propertyManagerRegisterPageSubmitLoading:propertyManagerRegisterPage.propertyManagerRegisterPageSubmitLoading,
  propertyManagerRegisterPageModel:propertyManagerRegisterPage.propertyManagerRegisterPageModel,
  propertyManagerRegisterPageModelMessage:propertyManagerRegisterPage.propertyManagerRegisterPageModelMessage,
  propertyManagerRegisterPageModelTitle:propertyManagerRegisterPage.propertyManagerRegisterPageModelTitle,
  propertyManagerRegisterPageModelClassName:propertyManagerRegisterPage.propertyManagerRegisterPageModelClassName
});

export default connect(mapState)(PropertyManagerRegister);
