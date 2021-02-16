import * as clientRegisterApi from '../api/clientRegisterApi';
import { actions } from 'react-redux-form';
import {CLIENT_REGISTER_PAGE_SUBMIT_PROCESSING,CLIENT_REGISTER_PAGE_SUBMIT_SUCCESS,CLIENT_REGISTER_PAGE_SUBMIT_FAILED,CLIENT_REGISTER_PAGE_TOGGLE_MODEL} from '../actionTypes'
export function clientRegisterPageSubmitProcessing() {
  return { type: CLIENT_REGISTER_PAGE_SUBMIT_PROCESSING }
}
export function clientRegisterPageSubmitSuccess(message,title,className,submitButton) {
  return { type: CLIENT_REGISTER_PAGE_SUBMIT_SUCCESS, message,title,className,submitButton }
}
export function clientRegisterPageSubmitFailed(message,title,className,submitButton) {
  return { type: CLIENT_REGISTER_PAGE_SUBMIT_FAILED, message,title,className,submitButton }
}
export function clientRegisterPageToggleModel() {
  return { type: CLIENT_REGISTER_PAGE_TOGGLE_MODEL }
}
export function clientRegistration (register, history){
  return dispatch => {
	   dispatch(clientRegisterPageSubmitProcessing());
	    return clientRegisterApi.clientRegistrationApi(register)
	     .then(response => {
		       dispatch(actions.reset('register'));
		       dispatch(clientRegisterPageSubmitSuccess('To complete the registration process, please click the link in the email we just sent you','Registration Successful','modal-success','Ok'))
	     }).catch(err =>{
		       if(err.message=='Validation failed'){
			          err.message='The email address has already been registered';
		       }
		       dispatch(clientRegisterPageSubmitFailed(err.message,'Registration Failed','modal-danger ','Ok'))
	    });
  };
};
