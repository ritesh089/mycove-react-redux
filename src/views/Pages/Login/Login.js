import React, {Component} from "react";
import {Container, Row, Col, CardGroup, Card, CardBlock, Button, Input, InputGroup, InputGroupAddon} from "reactstrap";
import { connect } from 'react-redux';
import { Field, Form, Errors, actions } from 'react-redux-form';
import {Link} from 'react-router-dom';
import {userLogin} from '../../../actions/sessionActions';
import {loginPageToggleModel} from '../../../actions/loginActions';
import Modals from '../../Components/Modals';
const isRequired = (val) => val && val.length > 0;
const isEmail = value =>
	{ if( value && value.length > 0){
			 return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		}else{
			return true;
		}
	}

class Login extends Component {

constructor(props) {
     super(props);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.toggle = this.toggle.bind(this);
    };
  
  
  
   handleSubmit(login) {
    const { dispatch,history } = this.props
    dispatch(userLogin(login,history));
  }
  toggle() {
    const { dispatch } = this.props
    dispatch(loginPageToggleModel());
  }
  
  
  render() {
  
  const { loginPageModel,loginPageModelTitle,loginPageModelMessage,loginPageSubmitButton,loginPageModelClassName,loginPageSubmit } = this.props
    return (
      <div className="app flex-row align-items-center">
        <Container>
		<Modals modal={loginPageModel} modelToggle={this.toggle} primaryButtonAction={this.toggle} modalTitle={loginPageModelTitle} modalMessage={loginPageModelMessage} modalPrimaryButton={loginPageSubmitButton}  modelClassName={loginPageModelClassName}/>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup className="mb-0">
                <Card className="p-4">
                  <CardBlock className="card-body">
				    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
					<Form model="login" onSubmit={this.handleSubmit} >
						<Field model="login.email" className="form-group" validators={{ isEmail,isRequired }}>
							<InputGroup className="mb-1">
								<InputGroupAddon><i className="icon-user" ></i></InputGroupAddon>
								<input type="text"  placeholder="Email" className="form-control" />
							</InputGroup>
							<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="login.email" messages={{isRequired: 'Please provide a email.',isEmail: 'Invalid email address',}}/>
						</Field>
						
                    

						<Field model="login.password" className="form-group" validators={{ isRequired }}>
							<InputGroup className="mb-1">
								<InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
								<input type="password" placeholder="Password"  className="form-control"/>
							</InputGroup>
							<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="login.password" messages={{isRequired: 'Please provide a password.',}}/>
						</Field>
					
                    <Row>
                      <Col xs="6">
                        <Button color="primary"  type="submit" disabled={loginPageSubmit}  className="px-4">Login</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">Forgot password?</Button>
                      </Col>
                    </Row>
					 </Form>
                  </CardBlock>
                </Card>
                <Card className="text-white bg-login-logo py-5 d-md-down-none" style={{ 'width': '44%'}}>
                  <CardBlock className="card-body text-center">
                    <div>
                      <p><img src={'img/mycove_login_logo.png'} className="img-login-logo" alt="admin@bootstrapmaster.com"/></p>
					  <Link className="btn btn-primary active"  to="/register" >Register Now!</Link>
                    </div>
                  </CardBlock>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapState = ({ loginPage }) => ({
  loginPageSubmit:loginPage.loginPageSubmit,
  loginPageSubmitButton:loginPage.loginPageSubmitButton,
  loginPageSubmitLoading:loginPage.loginPageSubmitLoading,
  loginPageModel:loginPage.loginPageModel,
  loginPageModelMessage:loginPage.loginPageModelMessage,
  loginPageModelTitle:loginPage.loginPageModelTitle,
  loginPageModelClassName:loginPage.loginPageModelClassName
});

export default connect(mapState)(Login);
