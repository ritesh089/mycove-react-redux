import React, {Component} from "react";
import {Container, Row, Col, Card, CardBlock, CardFooter, Button, Input, InputGroup, InputGroupAddon} from "reactstrap";
import { connect } from 'react-redux';
import { Field, Form, Errors, actions } from 'react-redux-form';
import {Link} from 'react-router-dom';
import {updateUserProfile,userConfirmPageToggleModel} from '../../../actions/userConfirmActions';
import Modals from '../../Components/Modals';
import {getUserProfile} from '../../../actions/sessionActions';


const isRequired = (val) => val && val.length > 0;

class Profile extends Component {

constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
	   this.toggle = this.toggle.bind(this);
	   this.redirectPage=this.redirectPage.bind(this);
     this.changeAndSubmit=this.changeAndSubmit.bind(this);
    };
componentDidMount() {
        console.log('Component DID MOUNT!');
        const { dispatch,history } = this.props
        dispatch(getUserProfile());
     }
handleSubmit(user) {
    const { dispatch,history } = this.props
    dispatch(updateUserProfile(user,history));
  }
changeAndSubmit(model, value) {
      const { dispatch } = this.props
      var base64Content="";
      var content="";
      var reader = new FileReader();
      reader.readAsDataURL(value[0]);
      reader.onload = function () {
          content=reader.result;
          content = content.split(",").pop();
          var image=[];
          image.push({
                  'name': value[0].name,
                  "type":"file",
                  "content_type": "image/"+value[0].name.split(".").pop(),
                  "is_base64": true,
                  "content":content
          });
          dispatch(actions.change(model, image[0]));
      };
      reader.onerror = function (error) {
          console.log('Error: ', error);
      };
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
    const { user,userConfirmPageModel,userConfirmPageModelTitle,userConfirmPageModelMessage,userConfirmPageSubmitButton,userConfirmPageModelClassName,userConfirmPageSubmit } = this.props
    return (
      <div className="app flex-row align-items-center">
        <Container>
		      <Modals modal={userConfirmPageModel} modelToggle={this.toggle}  primaryButtonAction={userConfirmPageModelClassName=='modal-success'?this.redirectPage:this.toggle} modalTitle={userConfirmPageModelTitle} modalMessage={userConfirmPageModelMessage} modalPrimaryButton={userConfirmPageSubmitButton}  modelClassName={userConfirmPageModelClassName}/>
          <Row className="justify-content-center">
            <Col md="10">
              <Card className="mx-8">
                <CardBlock className="card-body p-8">
                  <h4>My Profile</h4>
                  <p className="text-muted">Complete account registraion</p>
				          <Form model="user" onSubmit={this.handleSubmit} >
				              <Row>
                        <Col md="6">
                          <Field model="user.firstName" className="form-group" validators={{ isRequired }}>
                            <InputGroup className="mb-1">
                              <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                              <input type="text" className="form-control" placeholder="First Name" />
                            </InputGroup>
                            <Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }}  model="user.firstName" messages={{isRequired: 'Please provide a first name.',}}/>
                          </Field>
              					 </Col>
                         <Col md="6">
                             <Field model="user.lastName" className="form-group" validators={{ isRequired }}>
                             <InputGroup className="mb-1">
                               <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                               <input type="text" className="form-control" placeholder="Last Name" />
                             </InputGroup>
                             <Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="user.lastName" messages={{isRequired: 'Please provide a last name.',}}/>
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
                      <Row>
                        <Col md="4">
                          <label>Upload Property Logo</label>
                          <Field model="user.avatar" changeAction= { this.changeAndSubmit } className="form-group" >
                            <input type="file" className="form-control-file" accept="image/*"   value={ undefined } />
                          </Field>
                          <ul>
                              {user.avatar?
                                (
                                      <div className="uploadImg" >
                                        <img  src={"data:"+user.avatar.content_type+";base64,"+user.avatar.content} className="img-uploadImg" alt="your image" />
                                      </div>
                                ):null
                              }
                          </ul>
                        </Col>
                      </Row>
                    <Button color="success"disabled={userConfirmPageSubmit}  block>Update</Button>
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

const mapState = ({ userConfirmPage,user }) => ({
  userConfirmPageSubmit:userConfirmPage.userConfirmPageSubmit,
  userConfirmPageSubmitButton:userConfirmPage.userConfirmPageSubmitButton,
  userConfirmPageSubmitLoading:userConfirmPage.userConfirmPageSubmitLoading,
  userConfirmPageModel:userConfirmPage.userConfirmPageModel,
  userConfirmPageModelMessage:userConfirmPage.userConfirmPageModelMessage,
  userConfirmPageModelTitle:userConfirmPage.userConfirmPageModelTitle,
  userConfirmPageModelClassName:userConfirmPage.userConfirmPageModelClassName,
  user:user
});

export default connect(mapState)(Profile);
