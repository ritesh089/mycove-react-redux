import { sessionService } from 'redux-react-session';
import * as sessionApi from '../api/sessionApi';
import { actions } from 'react-redux-form';
import {loginPageSubmitProcessing,loginPageSubmitFailed,loginPageSubmitSuccess} from '../actions/loginActions';
//import {setUserInfo} from '../actions/userInfoActions';
export const userLogin = (login, history) => {
return dispatch => {
	dispatch(loginPageSubmitProcessing());
	return sessionApi.login(login)
	.then(response => {
		sessionService.saveSession( response.session_token)
		sessionService.saveUser(response)
		.then(() => {
				//dispatch(setUserInfo(response.name,response.session_token,'img/avatars/6.jpg',response.role))
				dispatch(loginPageSubmitSuccess())
				dispatch(actions.reset('login'));
				history.push('/home');
		})
		.catch(err => {
			dispatch(loginPageSubmitFailed('An internal error occurred. please contact your system administrator','Login Failed','modal-danger ','Ok'))
		});
	}).catch(err =>{
		dispatch(loginPageSubmitFailed(err.message,'Login Failed','modal-danger ','Ok'))
	});
};
}

export function getUserProfile(){
  return dispatch => {
		return sessionService.loadSession()
      .then(currentSession => {
      	return sessionApi.getProfileApi(currentSession)
        	.then(response => {
          	var userProfile = {
							firstName: response['content']['user_first_name'],
							lastName: response['content']['user_last_name'],
							email:response['content']['user_email'],
							avatar:response['content']['user_avatar_url'],
							phone:response['content']['user_phone'],
							address_1:response['content']['user_card_details_address_1'],
							address_2:response['content']['user_card_details_address_2'],
							zip:response['content']['user_card_details_zip_code'],
							city:response['content']['user_card_details_city'],
							state:response['content']['user_card_details_state'],
							country:response['content']['user_card_details_country']
      			}
						console.log(JSON.stringify(userProfile));
          	console.log(userProfile);
  					dispatch(actions.change('user',userProfile));
				})
      })
		};
	};






export const sessionCheck = (history) => {
	return sessionService.loadSession()
		.then(currentSession => {
			return sessionApi.getSession(currentSession)
			.then(response => {
				var res={};
				res["status"]="success";
				res["session_token"]=currentSession;
				return res;
			})
			.catch(err => {
				sessonDelete(history);
				return "failed";
			});
		}).catch(err =>{
			sessonDelete(history);
			return "failed";
		});
}
export const sessonDelete = (history) => {
      sessionService.deleteSession();
      sessionService.deleteUser();
      history.push('/login');
};
export const userLogout = (history) => {
	return dispatch => {
		return sessionService.loadSession()
		.then(currentSession => {
			return sessionApi.logout(currentSession)
			.then(() => {
				sessonDelete(history);
			}).catch(err => {
				sessonDelete(history);
			});
		}).catch(err => {
				sessonDelete(history);
		});
	}
};
