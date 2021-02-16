
import React, {Component} from "react";
import {Container, Row, Col, Card, CardBlock,CardHeader, CardFooter, Button, Input, InputGroup, InputGroupAddon} from "reactstrap";
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { Field, Form, Errors, actions,createFieldClass, Control } from 'react-redux-form';
import {getPropertyManagerList,getPropertyAmenityType,getPropertyFeatureType,getPropertyType,propertyRegistration,propertyRegisterPageToggleModel,systemUserAction} from '../../../actions/propertyRegisterActions';
import Modals from '../../Components/Modals';
import DropdownList from 'react-widgets/lib/DropdownList'
import SelectList from 'react-widgets/lib/SelectList'
import Multiselect from 'react-widgets/lib/Multiselect'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import Calendar from 'react-widgets/lib/Calendar'
import moment from 'moment'
import momentLocalizer from 'react-widgets-moment'
import 'react-widgets/dist/css/react-widgets.css'
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {getPropertyAction} from '../../../actions/propertyRegisterActions';
moment.locale('en')
momentLocalizer()
const isRequired = (val) => val && val.length > 0;
const isEmail = value =>
	{ if( value && value.length > 0){
			 return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		}else{
			return true;
		}
	}



const RenderMultiselect = (props) => (
  <Control.select
    component={Multiselect }
		mapProps={{
      data: (props) => props.data,
    }}
    {...props}
  />
);

const RenderDropdownList = (props) => (
  <Control.select
    component={DropdownList }
		mapProps={{
      data: (props) => props.data,
    }}
    {...props}
  />
);
const RenderDateTimePicker = (props) => (
  <Control.select
    component={DateTimePicker }
		mapProps={{
      data: (props) => props.data,
    }}
    {...props}
  />
);


const RenderImageUploader = (props) => (
  <Control
    component={ImageUploader }
		mapProps={{
			testValue: (props) => props.modelValue,
    }}
    {...props}
  />
);


class PropertyRegister extends Component {

	constructor(props) {
			super(props);
			this.state = { pictures: [], testimage:[] };
	    this.handleSubmit = this.handleSubmit.bind(this);
			this.toggle = this.toggle.bind(this);
			this.redirectPage=this.redirectPage.bind(this);
			this.changeAndSubmit = this.changeAndSubmit.bind(this);
			this.addressCopyChange = this.addressCopyChange.bind(this);
			this.fieldCopy = this.fieldCopy.bind(this);


	};
	handleSubmit(propertyRegister) {
	    const { dispatch,history } = this.props
	    dispatch(propertyRegistration(propertyRegister,history));
	}
  toggle() {
    const { dispatch } = this.props
    dispatch(propertyRegisterPageToggleModel());
  }
	redirectPage() {
    const { history,dispatch } = this.props
		dispatch(propertyRegisterPageToggleModel());
    history.push('/home/property');
  }
	fieldCopy(model,value) {
		const { dispatch,propertyRegister } = this.props

		console.log("$$$$$ "+model+"  dfd "+value+" dff "+propertyRegister.addressCopy);
			if(model=="propertyRegister.street_address_1" && propertyRegister.addressCopy==true ){
				dispatch(actions.change("propertyRegister.mailing_street_address_1", value));
			}
			if(model=="propertyRegister.street_address_2" && propertyRegister.addressCopy==true ){
				dispatch(actions.change("propertyRegister.mailing_street_address_2", value));
			}
			if(model=="propertyRegister.zip" && propertyRegister.addressCopy==true ){
				dispatch(actions.change("propertyRegister.mailing_zip", value));
			}
			if(model=="propertyRegister.state" && propertyRegister.addressCopy==true ){
				dispatch(actions.change("propertyRegister.mailing_state", value));
			}
			if(model=="propertyRegister.city" && propertyRegister.addressCopy==true ){
				dispatch(actions.change("propertyRegister.mailing_city", value));
			}
			if(model=="propertyRegister.country" && propertyRegister.addressCopy==true ){
				dispatch(actions.change("propertyRegister.mailing_country", value));
			}
			dispatch(actions.change(model, value));
	}


	addressCopyChange() {
		console.log("$$$$$ addressCopyChange");
		const { dispatch,propertyRegister } = this.props

		console.log("$$$$$ "+propertyRegister.addressCopy);
		if(propertyRegister.addressCopy==false){
			dispatch(actions.change("propertyRegister.mailing_street_address_1", propertyRegister.street_address_1));
			dispatch(actions.change("propertyRegister.mailing_street_address_2", propertyRegister.street_address_2));
			dispatch(actions.change("propertyRegister.mailing_zip", propertyRegister.zip));
			dispatch(actions.change("propertyRegister.mailing_state", propertyRegister.state));
			dispatch(actions.change("propertyRegister.mailing_city", propertyRegister.city));
			dispatch(actions.change("propertyRegister.mailing_country", propertyRegister.country));
		}else{
			dispatch(actions.change("propertyRegister.mailing_street_address_1",""));
			dispatch(actions.change("propertyRegister.mailing_street_address_2", ""));
			dispatch(actions.change("propertyRegister.mailing_zip",""));
			dispatch(actions.change("propertyRegister.mailing_state", ""));
			dispatch(actions.change("propertyRegister.mailing_city", ""));
			dispatch(actions.change("propertyRegister.mailing_country", ""));
		}
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
					dispatch(actions.push(model, image[0]));
			};
			reader.onerror = function (error) {
					console.log('Error: ', error);
			};
	}
	componentDidMount() {
	 	const { match: { params } } = this.props;
 		const { dispatch,history } = this.props
		dispatch(getPropertyType());
		dispatch(getPropertyManagerList());
		dispatch(getPropertyFeatureType());
		dispatch(getPropertyAmenityType());
		dispatch(getPropertyAction(params.name));
	}
	render() {
		const {dispatch,propertyRegister,propertyManagerList,propertyAmenityList,propertyFeatureList, propertyTypeList,propertyRegisterPageModel,propertyRegisterPageModelTitle,propertyRegisterPageModelMessage,propertyRegisterPageSubmitButton,propertyRegisterPageModelClassName,propertyRegisterPageSubmit } = this.props
		function toAge(value,previous) {
	 	 return value+previous|| 0;
	  }
		function toPropertyTypeId(value) {
	 	 return value.property_type;
	  }
	  return (
			<div className="animated fadeIn">
			 	<Container>
					<Modals modal={propertyRegisterPageModel} modelToggle={this.toggle}  primaryButtonAction={propertyRegisterPageModelClassName=='modal-success'?this.redirectPage:this.toggle} modalTitle={propertyRegisterPageModelTitle} modalMessage={propertyRegisterPageModelMessage} modalPrimaryButton={propertyRegisterPageSubmitButton}  modelClassName={propertyRegisterPageModelClassName}/>
          	<Row >
            	<Col md="12">
              	<Card className="mx-12">
                	<CardHeader>
										<strong>Property Registration</strong>
										</CardHeader>
									<CardBlock className="card-body p-12">
                  	<p className="text-muted">Update your property details</p>
										<Form model="propertyRegister" onSubmit={this.handleSubmit} >
										<Row>
										<Col md="7">
										<label>Property Name :*</label>
				            	<Field model="propertyRegister.property_name"  className="form-group"  validators={{ isRequired }}>
												<input type="text" className="form-control" placeholder="Enter Property Name" />
												<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="propertyRegister.property_name" messages={{isRequired: 'Please provide property name.',}}/>
											</Field>
									 	</Col>
									 	<Col md="3">
										<label>Property Construction Date :</label>
										<RenderDateTimePicker  model="propertyRegister.property_age_date"  defaultValue={new Date()} format="YYYY-DD-MM" time={false}>
											<DateTimePicker />
										</RenderDateTimePicker>

									 	</Col>
									 	<Col md="2">
										<label>Area Sqft:</label>
									 		<Field model="propertyRegister.property_sqft"  className="form-group" >
										 		<input type="text" className="form-control" placeholder="Enter Area Sqft" />
											</Field>
										</Col>
									</Row>
									<Row>
								 		<Col md="3">
											<label>Property Type: *</label>
											<RenderDropdownList placeholder="Select Property Type" model="propertyRegister.property_type_id"
												data={propertyTypeList}
												valueField="value"
           							textField="label">
											 	<DropdownList />
											</RenderDropdownList>
										</Col>
										<Col md="4">
										<label>Property Taxcode:</label>
					         		<Field model="propertyRegister.property_tax_code" className="form-group" >
												<input type="text" className="form-control" placeholder="Enter Property Tax Code" />
											</Field>
										</Col>
										<Col md="5">
										<label>Property Amenity Tags :</label>
										<RenderMultiselect placeholder="Select Property Amenity Tags..."
										 model="propertyRegister.property_amenity"
										 data={propertyAmenityList}
										 valueField="value"
										 textField="label">
											<Multiselect />
										</RenderMultiselect>
										</Col>
									</Row>
									<Row>
								 		<Col md="6">
										<label>Property Phone: *</label>
											<Field model="propertyRegister.property_office_number"  className="form-group" validators={{ isRequired }}>
									 			<input type="text" className="form-control" placeholder="Enter Phone" />
									 			<Errors wrapper="span" className="invalid-feedback-custom" show={{ touched: true, focus: false }} model="propertyRegister.property_office_number" messages={{isRequired: 'Please provide phone number.',}}/>
											</Field>
							 			</Col>
										<Col md="6">
										<label>Property Email : *</label>
								 		<Field model="propertyRegister.property_email"  className="form-group" validators={{ isRequired }}>
												<input type="email" className="form-control" placeholder="Enter Email" />
												<Errors wrapper="span" className="invalid-feedback-custom" show={{ touched: true, focus: false }} model="propertyRegister.property_email" messages={{isRequired: 'Please provide email.',}}/>
											</Field>
								 		</Col>
									 </Row>
									 <Row>
										<Col md="3">
										<label>Property manager: *</label>
											<RenderDropdownList placeholder="Select Property Manager"
											model="propertyRegister.property_manager_id"
											data={propertyManagerList}
											valueField="value"
											textField="label">
												<DropdownList />
											</RenderDropdownList>

				          	</Col>
										<Col md="4">
										<label>Property Feature Tags :</label>
											<RenderMultiselect placeholder="Select Property Feature Tags..." size="10"
											model="propertyRegister.property_features_tags"
											data={propertyFeatureList}
											valueField="value"
											textField="label">

												<Multiselect />
											</RenderMultiselect>
				          	</Col>
										<Col md="5">
										<label>Property Description:</label>
						        	<Field model="propertyRegister.property_description"  className="form-group" validators={{ isRequired }}>
												<input type="text" className="form-control" placeholder="Enter Property Description" />
													</Field>
										</Col>
									</Row>
									<Row>
										<Col md="4">
											<label>Upload Property Logo</label>
											<Field model="propertyRegister.property_logo_url" changeAction= { this.changeAndSubmit } className="form-group" >
												<input type="file" className="form-control-file" accept="image/*"   value={ undefined } />
											</Field>
											<ul>
          								{propertyRegister.property_logo_url.map(function(listValue,row){
  													return(
																	<div className="uploadImg" key={row}>
																		<button type="button"  onClick= {() => dispatch(actions.remove("propertyRegister.property_logo_url", row))}  className="uploadImg-status fa fa-remove btn-danger"></button>
																		<img  id={row} src={"data:"+listValue.content_type+";base64,"+listValue.content} className="img-uploadImg" alt="your image" />
																	</div>
														);
          								})}
        							</ul>
										</Col>
									</Row>

									<Row>
										<Col md="6">
										<h5 class="mb-0 card-title">Property Location Address</h5>
										</Col>
										<Col md="6">
										<h5 class="mb-0 card-title">Property Mailing Address</h5>
										</Col>
									</Row>
									<Row>
										<Col md="6">
										</Col>
										<Col md="6">
										<label>Same as Location Address</label>
											<Field model="propertyRegister.addressCopy"      className="form-group"  >
												<input type="checkbox" onChange={ this.addressCopyChange } className="form-control" />
											</Field>
										</Col>
									</Row>
									<Row>
										<Col md="6">
										<label>Street Address 1 :*</label>
											<Field model="propertyRegister.street_address_1" changeAction={ this.fieldCopy }   className="form-group"  validators={{ isRequired }}>
												<input type="text" className="form-control" placeholder="Enter Street Address 1" />
												<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="propertyRegister.street_address_1" messages={{isRequired: 'Please provide street address 1.',}}/>
											</Field>
										</Col>
										<Col md="6">
										<label>Street Address 1 :*</label>
											<Field model="propertyRegister.mailing_street_address_1"  className="form-group"  validators={{ isRequired }}>
												<input type="text" className="form-control" placeholder="Enter Street Address 1" />
												<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="propertyRegister.mailing_street_address_1" messages={{isRequired: 'Please provide street address 1.',}}/>
											</Field>
										</Col>
									</Row>
									<Row>
										<Col md="6">
										<label>Street Address 2 :</label>
											<Field model="propertyRegister.street_address_2" changeAction={ this.fieldCopy }   className="form-group"  >
												<input type="text" className="form-control" placeholder="Enter Street Address 2" />
											</Field>
										</Col>
										<Col md="6">
										<label>Street Address 2 :</label>
											<Field model="propertyRegister.mailing_street_address_2"  className="form-group"  >
												<input type="text" className="form-control" placeholder="Enter Street Address 2" />
											</Field>
										</Col>
									</Row>
									<Row>
										<Col md="2">
										<label>Zip Code :*</label>
											<Field model="propertyRegister.zip" changeAction={ this.fieldCopy }  className="form-group"  validators={{ isRequired }}>
												<input type="text" className="form-control" placeholder="Enter Zip" />
												<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="propertyRegister.zip" messages={{isRequired: 'Please provide zip.',}}/>
											</Field>
										</Col>
										<Col md="4">
										<label>City :*</label>
											<Field model="propertyRegister.city" changeAction={ this.fieldCopy }  className="form-group"  validators={{ isRequired }}>
												<input type="text" className="form-control" placeholder="Enter City" />
												<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="propertyRegister.city" messages={{isRequired: 'Please provide city.',}}/>
											</Field>
										</Col>
										<Col md="2">
										<label>Zip Code :*</label>
											<Field model="propertyRegister.mailing_zip"  className="form-group"  validators={{ isRequired }}>
												<input type="text" className="form-control" placeholder="Enter Zip" />
												<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="propertyRegister.mailing_zip" messages={{isRequired: 'Please provide zip.',}}/>
											</Field>
										</Col>
										<Col md="4">
										<label>City :*</label>
											<Field model="propertyRegister.mailing_city"  className="form-group"  validators={{ isRequired }}>
												<input type="text" className="form-control" placeholder="Enter City" />
												<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="propertyRegister.mailing_city" messages={{isRequired: 'Please provide city.',}}/>
											</Field>
										</Col>
									</Row>
									<Row>
										<Col md="3">
										<label>State :*</label>
											<Field model="propertyRegister.state" changeAction={ this.fieldCopy }  className="form-group"  validators={{ isRequired }}>
												<input type="text" className="form-control" placeholder="Enter State" />
												<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="propertyRegister.state" messages={{isRequired: 'Please provide state.',}}/>
											</Field>
										</Col>
										<Col md="3">
										<label>Country :*</label>
											<Field model="propertyRegister.country" changeAction={ this.fieldCopy }  className="form-group"  validators={{ isRequired }}>
												<input type="text" className="form-control" placeholder="Enter Country" />
												<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="propertyRegister.country" messages={{isRequired: 'Please provide country.',}}/>
											</Field>
										</Col>
										<Col md="3">
										<label>State :*</label>
											<Field model="propertyRegister.mailing_state"  className="form-group"  validators={{ isRequired }}>
												<input type="text" className="form-control" placeholder="Enter State" />
												<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="propertyRegister.mailing_state" messages={{isRequired: 'Please provide state.',}}/>
											</Field>
										</Col>
										<Col md="3">
										<label>Country :*</label>
											<Field model="propertyRegister.mailing_country"  className="form-group"  validators={{ isRequired }}>
												<input type="text" className="form-control" placeholder="Enter Country" />
												<Errors className="form-group invalid-feedback-custom" show={{ touched: true, focus: false }} model="propertyRegister.mailing_country" messages={{isRequired: 'Please provide country.',}}/>
											</Field>
										</Col>
									</Row>
 									<Button color="success"disabled={propertyRegisterPageSubmit}  block>Submit</Button>
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



const mapState = ({ propertyRegisterPage,propertyRegister }) => ({
  propertyRegisterPageSubmit:propertyRegisterPage.propertyRegisterPageSubmit,
  propertyRegisterPageSubmitButton:propertyRegisterPage.propertyRegisterPageSubmitButton,
  propertyRegisterPageSubmitLoading:propertyRegisterPage.propertyRegisterPageSubmitLoading,
  propertyRegisterPageModel:propertyRegisterPage.propertyRegisterPageModel,
  propertyRegisterPageModelMessage:propertyRegisterPage.propertyRegisterPageModelMessage,
  propertyRegisterPageModelTitle:propertyRegisterPage.propertyRegisterPageModelTitle,
  propertyRegisterPageModelClassName:propertyRegisterPage.propertyRegisterPageModelClassName,
	propertyTypeList:propertyRegisterPage.propertyTypeList,
	propertyManagerList:propertyRegisterPage.propertyManagerList,
	propertyFeatureList:propertyRegisterPage.propertyFeatureList,
	propertyAmenityList:propertyRegisterPage.propertyAmenityList,
	propertyRegister:propertyRegister
});

export default connect(mapState)(PropertyRegister);
