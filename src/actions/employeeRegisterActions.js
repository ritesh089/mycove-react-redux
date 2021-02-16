import * as employeeRegisterApi from '../api/employeeRegisterApi';
import {sessionCheck} from './sessionActions';
import { actions } from 'react-redux-form';
import {EMPLOYEE_REGISTER_PAGE_SUBMIT_PROCESSING,EMPLOYEE_REGISTER_PAGE_SUBMIT_SUCCESS,EMPLOYEE_REGISTER_PAGE_SUBMIT_FAILED,EMPLOYEE_REGISTER_PAGE_TOGGLE_MODEL} from '../actionTypes'
export function employeeRegisterPageSubmitProcessing() {
  return { type: EMPLOYEE_REGISTER_PAGE_SUBMIT_PROCESSING }
}
export function employeeRegisterPageSubmitSuccess(message,title,className,submitButton) {
  return { type: EMPLOYEE_REGISTER_PAGE_SUBMIT_SUCCESS, message,title,className,submitButton }
}
export function employeeRegisterPageSubmitFailed(message,title,className,submitButton) {
  return { type: EMPLOYEE_REGISTER_PAGE_SUBMIT_FAILED, message,title,className,submitButton }
}
export function employeeRegisterPageToggleModel() {
  return { type: EMPLOYEE_REGISTER_PAGE_TOGGLE_MODEL }
}
export function employeeRegistration (register, history){
  return dispatch => {
    dispatch(employeeRegisterPageSubmitProcessing());
	   return sessionCheck(history).then(response=>{
	      if(response.status=='success'){
		        return employeeRegisterApi.employeeRegistrationApi(register,response.session_token)
		          .then(response => {
			             dispatch(actions.reset('employeeRegister'));
			             dispatch(employeeRegisterPageSubmitSuccess('To complete the registration process, please click the link in the email we just sent you','Registration Successful','modal-success','Ok'))
		          }).catch(err =>{
			             if(err.message=='Validation failed'){
				               err.message='The email address has already been registered';
			             }
			             dispatch(employeeRegisterPageSubmitFailed(err.message,'Registration Failed','modal-danger ','Ok'))
		          });
	       }else{
              dispatch(employeeRegisterPageSubmitFailed('An internal error occurred. please contact your system administrator','Registration Failed','modal-danger ','Ok'))
        }
	   });
   };
};
