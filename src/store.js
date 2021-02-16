// ./store.js
import {applyMiddleware,createStore,combineReducers } from 'redux';
import {combineForms,createForms} from 'react-redux-form';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { sessionService, sessionReducer } from 'redux-react-session';
import loginPage from './reducers/loginPage'
import clientRegisterPage from './reducers/clientRegisterPage'
import employeeRegisterPage from './reducers/employeeRegisterPage'
import propertyRegisterPage from './reducers/propertyRegisterPage'
import propertyManagerRegisterPage from './reducers/propertyManagerRegisterPage'
import userInfo from './reducers/userInfo'
import userConfirmPage from './reducers/userConfirmPage'
const initialRegisterState = {
  firstName: '',
  lastName: '',
  email:''
};
const initialLoginState = {
  email:'',
  password:''
};


const initialPropertyManagerRegisterState = {
  firstName: '',
  lastName: '',
  email:'',
  propertyName:''
};



const initialRegisterConfirmState = {
  firstName: '',
  lastName: '',
  email:'',
  code:'',
  avatar:'',
  new_password:'',
  verify_password:'',
  phone:'',
  address_1:'',
  address_2:'',
  zip:'',
  city:'',
  state:'',
  country:''

};


const initialPropertyRegisterState = {
  property_id:'',
  property_name:'',
  property_type_id:'',
  property_tax_code:'',
  property_office_number:'',
  property_email:'',
  property_manager_id:'',
  property_features_tags:[],
  property_logo_url:[],
  property_age_date:new Date(),
  property_sqft:'',
  property_amenity:[],
  property_latitude:'',
  property_longitude:'',
  property_description:'',
  property_images:'',
  street_address1:'',
  street_address2:'',
  zip:'',
  city:'',
  state:'',
  country:'',
  mailing_street_address1:'',
  mailing_street_address2:'',
  mailing_zip:'',
  mailing_city:'',
  mailing_state:'',
  mailing_country:'',
  addressCopy:false


};



const customReducers = {
    // other of my own imported reducers
	session: sessionReducer,
	userInfo,
	loginPage,
	clientRegisterPage,
	userConfirmPage,
	employeeRegisterPage,
	propertyManagerRegisterPage,
  propertyRegisterPage
  }



  const allReducers = {
   ...customReducers,
     ...createForms({
		user:initialRegisterConfirmState,
		register: initialRegisterState,
		login: initialLoginState,
		employeeRegister:initialRegisterState,
		propertyManagerRegister:initialPropertyManagerRegisterState,
    propertyRegister:initialPropertyRegisterState,
  })
  }


const store = createStore(combineReducers(allReducers), applyMiddleware(...[
  thunk,
  createLogger(),
  ]));



export default store;
