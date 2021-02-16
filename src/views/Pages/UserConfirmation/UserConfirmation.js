import React, {Component} from "react";
import {Container, Row, Col, Card, CardBlock, CardFooter, Button, Input, InputGroup, InputGroupAddon} from "reactstrap";
import { connect } from 'react-redux';
import { Field, Form, Errors, actions } from 'react-redux-form';
import {Link} from 'react-router-dom';
import {userConfirmation,userConfirmPageToggleModel} from '../../../actions/userConfirmActions';
import Modals from '../../Components/Modals';
const isRequired = (val) => val && val.length > 0;

class UserConfirmation extends Component {
  constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
	   this.toggle = this.toggle.bind(this);
	   this.redirectPage=this.redirectPage.bind(this);
  };
  handleSubmit(registerConfirm) {
    const { dispatch,history } = this.props
    dispatch(userConfirmation(registerConfirm,history));
  }
  toggle() {
    const { dispatch } = this.props
    dispatch(userConfirmPageToggleModel());
  }
  redirectPage() {
    const { history,dispatch } = this.props
	   dispatch(userConfirmPageToggleModel());
    history.push('/login');
  }
  render() {
    const { userConfirmPageModel,userConfirmPageModelTitle,userConfirmPageModelMessage,userConfirmPageSubmitButton,userConfirmPageModelClassName,userConfirmPageSubmit } = this.props

    return (
      <div className="app flex-row align-items-center">
        <Container>
		<Modals modal={userConfirmPageModel} modelToggle={this.toggle}  primaryButtonAction={userConfirmPageModelClassName=='modal-success'?this.redirectPage:this.toggle} modalTitle={userConfirmPageModelTitle} modalMessage={userConfirmPageModelMessage} modalPrimaryButton={userConfirmPageSubmitButton}  modelClassName={userConfirmPageModelClassName}/>
          <Row className="justify-content-center">
            <Col md="10">
              <Card className="mx-8">
                <CardBlock className="card-body p-8">
                  <h1>Register Confirmation</h1>
                  <p className="text-muted">Complete account registraion</p>
				  <Form model="user" onSubmit={this.handleSubmit} >
				<Row>
				<Col md="6">
                    <Field model="user.email"  className="form-group"  validators={{ isRequired }}>
						<input type="email" className="form-control" placeholder="Enter email" />
						<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="user.email" messages={{isRequired: 'Please provide email.',}}/>
					</Field>
					 </Col>

				 <Col md="6">
                   <Field model="user.code" className="form-group" validators={{ isRequired }}>
						<input type="text" className="form-control" placeholder="Enter confirmation code" />
						<Errors wrapper="span"  className="invalid-feedback-custom" show={{ touched: true, focus: false }} model="user.code" messages={{isRequired: 'Please provide code.',}}/>
				</Field>
				 </Col>
                 </Row>

				 <Row>
				<Col md="6">
                    <Field model="user.new_password" className="form-group" validators={{ isRequired }}>
						<input type="password" className="form-control" placeholder="Create new password" />
						<Errors wrapper="span" className="invalid-feedback-custom" show={{ touched: true, focus: false }} model="user.new_password" messages={{isRequired: 'Please provide a password.',}}/>
				 	</Field>
				</Col>

				 <Col md="6">
                   <Field model="user.verify_password"  className="form-group" validators={{ isRequired }}>
						<input type="password" className="form-control" placeholder="Verify new password" />
						<Errors wrapper="span" className="invalid-feedback-custom" show={{ touched: true, focus: false }} model="user.verify_password" messages={{isRequired: 'Please provide a password.',}}/>
                 </Field>
				</Col>
                 </Row>


				 <Row>
				 <Col md="12">
                    <Field model="user.address_1"  className="form-group" validators={{ isRequired }}>
						<input type="text" className="form-control" placeholder="Enter address 1" />
						 <Errors wrapper="span" className="invalid-feedback-custom" show={{ touched: true, focus: false }} model="user.address_1" messages={{isRequired: 'Please provide address1.',}}/>
					</Field>
				  </Col>
                </Row>
				<Row>
				<Col md="12">
                    <Field model="user.address_2" className="form-group" validators={{ isRequired }}>
						<input type="text" className="form-control" placeholder="Enter address 2" />
					  <Errors wrapper="span" className="invalid-feedback-custom" show={{ touched: true, focus: false }} model="user.address_2" messages={{isRequired: 'Please provide address2.',}}/>
				</Field>
                  </Col>

				 </Row>
				<Row>
				<Col md="2">
				<label  className=" form-control-label">Upload a photo</label>
				</Col>
				<Col md="10">
					<Field model="user.avatar" className="form-group" validators={{ isRequired }}>
						<input type="file" className="form-control-file" value={ undefined } />
						<Errors wrapper="span" className="invalid-feedback-custom" show={{ touched: true, focus: false }} model="user.avatar" messages={{isRequired: 'Please upload a photo.',}}/>
					</Field>
                 </Col>

				 </Row>

				 <Row>
				<Col md="6">
                    <Field model="user.phone"  className="form-group" validators={{ isRequired }}>
						<input type="text" className="form-control" placeholder="Enter phone number" />
							<Errors wrapper="span" className="invalid-feedback-custom" show={{ touched: true, focus: false }} model="user.phone" messages={{isRequired: 'Please provide phone number.',}}/>
				</Field>
				</Col>
				 <Col md="6">
                    <Field model="user.zip"  className="form-group" validators={{ isRequired }}>
						<input type="text" className="form-control" placeholder="Enter zip code" />
					  <Errors wrapper="span" className="invalid-feedback-custom" show={{ touched: true, focus: false }} model="user.zip" messages={{isRequired: 'Please provide zip code.',}}/>
				</Field>
                 </Col>

				 </Row>



				 <Row>
				<Col md="4">
                    <Field model="user.city"  className="form-group" validators={{ isRequired }}>
						<input type="text" className="form-control" placeholder="Enter city" />
					<Errors wrapper="span" className="invalid-feedback-custom" show={{ touched: true, focus: false }} model="user.city" messages={{isRequired: 'Please provide city.',}}/>
				</Field>
                 </Col>

				 <Col md="4">
                    <Field model="user.state"  className="form-group" validators={{ isRequired }}>
						<input type="text" className="form-control" placeholder="Enter state" />
					<Errors wrapper="span" className="invalid-feedback-custom" show={{ touched: true, focus: false }} model="user.state" messages={{isRequired: 'Please provide state.',}}/>
				</Field>
                </Col>
				 <Col md="4">
                    <Field model="user.country"  className="form-group" validators={{ isRequired }}>
						<input type="text" className="form-control" placeholder="Enter country" />
						<Errors wrapper="span" className="invalid-feedback-custom" show={{ touched: true, focus: false }} model="user.country" messages={{isRequired: 'Please provide country.',}}/>
					</Field>
                </Col>

                 </Row>

                  <Button color="success"disabled={userConfirmPageSubmit}  block>Create Account</Button>
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

const mapState = ({ userConfirmPage }) => ({
  userConfirmPageSubmit:userConfirmPage.userConfirmPageSubmit,
  userConfirmPageSubmitButton:userConfirmPage.userConfirmPageSubmitButton,
  userConfirmPageSubmitLoading:userConfirmPage.userConfirmPageSubmitLoading,
  userConfirmPageModel:userConfirmPage.userConfirmPageModel,
  userConfirmPageModelMessage:userConfirmPage.userConfirmPageModelMessage,
  userConfirmPageModelTitle:userConfirmPage.userConfirmPageModelTitle,
  userConfirmPageModelClassName:userConfirmPage.userConfirmPageModelClassName
});

export default connect(mapState)(UserConfirmation);
