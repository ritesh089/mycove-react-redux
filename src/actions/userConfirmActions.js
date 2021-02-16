import * as userConfirmApi from '../api/userConfirmApi';
import { sessionService } from 'redux-react-session';
import { actions } from 'react-redux-form';
import * as sessionApi from '../api/sessionApi';
import {sessionCheck} from './sessionActions';
import {USER_CONFIRM_PAGE_SUBMIT_PROCESSING,USER_CONFIRM_PAGE_SUBMIT_SUCCESS,USER_CONFIRM_PAGE_SUBMIT_FAILED,USER_CONFIRM_PAGE_TOGGLE_MODEL} from '../actionTypes'
export function userConfirmPageSubmitProcessing() {
  return { type: USER_CONFIRM_PAGE_SUBMIT_PROCESSING }
}
export function userConfirmPageSubmitSuccess(message,title,className,submitButton) {
  return { type: USER_CONFIRM_PAGE_SUBMIT_SUCCESS,message,title,className,submitButton }
}
export function userConfirmPageSubmitFailed(message,title,className,submitButton) {
  return { type: USER_CONFIRM_PAGE_SUBMIT_FAILED, message,title,className,submitButton }
}
export function userConfirmPageToggleModel() {
  return { type: USER_CONFIRM_PAGE_TOGGLE_MODEL }
}
export function userConfirmation (registerConfirm, history) {
  return dispatch => {
	   dispatch(userConfirmPageSubmitProcessing());
	   return userConfirmApi.userConfirmationApi(registerConfirm)
	    .then(userData => {
				return registerConfirmApi.updateUserDetails(userData,registerConfirm)
				.then(dbresponse=>{
					dispatch(actions.reset('registerConfirm'));
					dispatch(userConfirmPageSubmitSuccess('Thank you for registering!','Account Confimation','modal-success','Login Now'))
				}).catch(err => {
					dispatch(userConfirmPageSubmitFailed('An internal error occurred. please contact your system administrator','Confimation Failed','modal-danger ','Ok'))
				})
			}).catch(err => {
				dispatch(userConfirmPageSubmitFailed(err.message,'Confimation Failed','modal-danger ','Ok'))
			});
    };
  };


  export function updateUserProfile (user, history) {
    return dispatch => {
  	   dispatch(userConfirmPageSubmitProcessing());
       return sessionCheck(history).then(response=>{
          if(response.status=='success'){
              return userConfirmApi.updateProfileApi(user,response.session_token)
                .then(response => {
                   dispatch(userConfirmPageSubmitSuccess('Profile details updated successfully','Update Successful','modal-success','Ok'))
                }).catch(err =>{
                     if(err.message=='Validation failed'){
                           err.message='The email address has already been registered';
                     }
                     dispatch(userConfirmPageSubmitFailed(err.message,'Update Failed','modal-danger ','Ok'))
               });
          }
       });
    };
  };
