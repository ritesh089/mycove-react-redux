import React, {Component} from "react";
import {Container, Row, Col, Card, CardBlock, CardFooter, Button, Input, InputGroup, InputGroupAddon} from "reactstrap";
import { connect } from 'react-redux';
import { Field, Form, Errors, actions } from 'react-redux-form';
import {Link} from 'react-router-dom';
import {clientRegistration,clientRegisterPageToggleModel} from '../../../actions/clientRegisterActions';
import Modals from '../../Components/Modals';
const isRequired = (val) => val && val.length > 0;
const isEmail = value =>
	{ if( value && value.length > 0){
			 return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		}else{
			return true;
		}
	}

class ClientRegister extends Component {

constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
		this.toggle = this.toggle.bind(this);
		this.redirectPage=this.redirectPage.bind(this);
};
handleSubmit(register) {
    const { dispatch,history } = this.props
    dispatch(clientRegistration(register,history));
}
toggle() {
    const { dispatch } = this.props
    dispatch(clientRegisterPageToggleModel());
}
redirectPage() {
    const { history,dispatch } = this.props
		dispatch(clientRegisterPageToggleModel());
    history.push('/register-confirm');
}
render() {
  const { clientRegisterPageModel,clientRegisterPageModelTitle,clientRegisterPageModelMessage,clientRegisterPageSubmitButton,clientRegisterPageModelClassName,clientRegisterPageSubmit } = this.props
    return (
      <div className="app flex-row align-items-center">
        <Container>
				<Modals modal={clientRegisterPageModel} modelToggle={this.toggle}  primaryButtonAction={clientRegisterPageModelClassName=='modal-success'?this.redirectPage:this.toggle} modalTitle={clientRegisterPageModelTitle} modalMessage={clientRegisterPageModelMessage} modalPrimaryButton={clientRegisterPageSubmitButton}  modelClassName={clientRegisterPageModelClassName}/>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBlock className="card-body p-4">
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
									<Form model="registerConfirm" onSubmit={this.handleSubmit} >
										<Field model="registerConfirm.firstName" className="form-group" validators={{ isRequired }}>
											<InputGroup className="mb-1">
												<InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
												<input type="text" className="form-control" placeholder="First Name" />
											</InputGroup>
											<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }}  model="registerConfirm.firstName" messages={{isRequired: 'Please provide a first name.',}}/>
										</Field>
										<Field model="registerConfirm.lastName" className="form-group" validators={{ isRequired }}>
											<InputGroup className="mb-1">
												<InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
												<input type="text" className="form-control" placeholder="Last Name" />
											</InputGroup>
											<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="registerConfirm.lastName" messages={{isRequired: 'Please provide a last name.',}}/>
									   </Field>
										 <Field model="registerConfirm.email" className="form-group" validators={{ isEmail,isRequired }}>
											<InputGroup className="mb-1">
												<InputGroupAddon>@</InputGroupAddon>
												<input type="email" className="form-control" placeholder="Email"/>
											</InputGroup>
											<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="registerConfirm.email" messages={{isRequired: 'Please provide a email.',isEmail: 'Invalid email address',}}/>
									  </Field>
					         	<Button color="success" disabled={clientRegisterPageSubmit} block>Create Account</Button>
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


const mapState = ({ clientRegisterPage }) => ({
  clientRegisterPageSubmit:clientRegisterPage.clientRegisterPageSubmit,
  clientRegisterPageSubmitButton:clientRegisterPage.clientRegisterPageSubmitButton,
  clientRegisterPageSubmitLoading:clientRegisterPage.clientRegisterPageSubmitLoading,
  clientRegisterPageModel:clientRegisterPage.clientRegisterPageModel,
  clientRegisterPageModelMessage:clientRegisterPage.clientRegisterPageModelMessage,
  clientRegisterPageModelTitle:clientRegisterPage.clientRegisterPageModelTitle,
  clientRegisterPageModelClassName:clientRegisterPage.clientRegisterPageModelClassName
});

export default connect(mapState)(ClientRegister);
