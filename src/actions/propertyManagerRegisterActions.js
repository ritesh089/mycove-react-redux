import { sessionService } from 'redux-react-session';
import * as propertyManagerRegisterApi from '../api/propertyManagerRegisterApi';
import {sessionCheck} from './sessionActions';
import { actions } from 'react-redux-form';
import {LOAD_PROPERTY_MANAGER_LIST,PROPERTY_MANAGER_REGISTER_PAGE_SUBMIT_PROCESSING,PROPERTY_MANAGER_REGISTER_PAGE_SUBMIT_SUCCESS,PROPERTY_MANAGER_REGISTER_PAGE_SUBMIT_FAILED,PROPERTY_MANAGER_REGISTER_PAGE_TOGGLE_MODEL} from '../actionTypes'
export function propertyManagerRegisterPageSubmitProcessing() {
  return { type: PROPERTY_MANAGER_REGISTER_PAGE_SUBMIT_PROCESSING }
}
export function propertyManagerRegisterPageSubmitSuccess(message,title,className,submitButton) {
  return { type: PROPERTY_MANAGER_REGISTER_PAGE_SUBMIT_SUCCESS, message,title,className,submitButton }
}
export function propertyManagerRegisterPageSubmitFailed(message,title,className,submitButton) {
  return { type: PROPERTY_MANAGER_REGISTER_PAGE_SUBMIT_FAILED, message,title,className,submitButton }
}
export function propertyManagerRegisterPageToggleModel() {
  return { type: PROPERTY_MANAGER_REGISTER_PAGE_TOGGLE_MODEL }
}
export function loadPropertyManagerList(propertyManagerList) {
  return { type: LOAD_PROPERTY_MANAGER_LIST,propertyManagerList  }
}
export function propertyManagerRegistration (register, history){
  return dispatch => {
    dispatch(propertyManagerRegisterPageSubmitProcessing());
	   return sessionCheck(history).then(response=>{
	      if(response.status=='success'){
		        return propertyManagerRegisterApi.propertyManagerRegistrationApi(register,response.session_token)
		          .then(response => {
			           dispatch(actions.reset('propertyManagerRegister'));
			           dispatch(propertyManagerRegisterPageSubmitSuccess('To complete the registration process, please click the link in the email we just sent you','Registration Successful','modal-success','Ok'))
		          }).catch(err =>{
			             if(err.message=='Validation failed'){
				                 err.message='The email address has already been registered';
			             }
			             dispatch(propertyManagerRegisterPageSubmitFailed(err.message,'Registration Failed','modal-danger ','Ok'))
		          });
	      }
	   });
};

};
export function getPropertyManagerListAction (){
  return dispatch => {
    return sessionService.loadSession()
      .then(currentSession => {
        return propertyManagerRegisterApi.getPropertyManagerListApi(currentSession)
          .then(response => {
            var propertyManagerList=[];
            response.resource.map(resource=>{
              propertyManagerList.push({
                'property_manager': resource['user_display_name'],
                'email': resource['user_email'],
                'mobile_no': resource['user_phone'],
                'status': resource['signup_active_flag']===true?"Active":"Not Active",
                'property_count': resource['property_by_property_manager_id'].length

              });
            })
            dispatch(loadPropertyManagerList(propertyManagerList));
        })
      })
    };
  };
