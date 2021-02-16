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

class PropertyManagerBulkRegister extends Component {

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
									<strong>Property Manager Bulk Registration</strong>
								</CardHeader>
								<CardBlock className="card-body p-6">
                  <p className="text-muted">Add your property managers</p>
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


const mapState = ({ propertyManagerRegisterPage }) => ({
  propertyManagerRegisterPageSubmit:propertyManagerRegisterPage.propertyManagerRegisterPageSubmit,
  propertyManagerRegisterPageSubmitButton:propertyManagerRegisterPage.propertyManagerRegisterPageSubmitButton,
  propertyManagerRegisterPageSubmitLoading:propertyManagerRegisterPage.propertyManagerRegisterPageSubmitLoading,
  propertyManagerRegisterPageModel:propertyManagerRegisterPage.propertyManagerRegisterPageModel,
  propertyManagerRegisterPageModelMessage:propertyManagerRegisterPage.propertyManagerRegisterPageModelMessage,
  propertyManagerRegisterPageModelTitle:propertyManagerRegisterPage.propertyManagerRegisterPageModelTitle,
  propertyManagerRegisterPageModelClassName:propertyManagerRegisterPage.propertyManagerRegisterPageModelClassName
});

export default connect(mapState)(PropertyManagerBulkRegister);
