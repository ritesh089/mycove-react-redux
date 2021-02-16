import {LOGIN_PAGE_SUBMIT_PROCESSING,LOGIN_PAGE_SUBMIT_SUCCESS,LOGIN_PAGE_SUBMIT_FAILED,LOGIN_PAGE_TOGGLE_MODEL} from '../actionTypes'

const initialState = {
  loginPageSubmit: false,
  loginPageSubmitButton:'',
  loginPageSubmitLoading:false,
  loginPageModel:false,
  loginPageModelMessage:'',
  loginPageModelTitle:'',
  loginPageModelClassName:''
};



const loginPage = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PAGE_SUBMIT_PROCESSING:
      return {
        ...state,
          loginPageSubmit: true,
		  loginPageSubmitButton:'',
          loginPageSubmitLoading:true,
		  loginPageModel:false,
		  loginPageModelMessage:'',
		  loginPageModelTitle:'',
		  loginPageModelClassName:''
      }
	 case LOGIN_PAGE_SUBMIT_SUCCESS:
      return {
        ...state,
		  loginPageSubmit: false,
          loginPageSubmitButton: '',
          loginPageSubmitLoading:false,
		  loginPageModel:false,
		  loginPageModelMessage:'',
		  loginPageModelTitle:'',
		  loginPageModelClassName:''
      }
	  case LOGIN_PAGE_SUBMIT_FAILED:
      return {
        ...state,
		  loginPageSubmit:false,
          loginPageSubmitLoading:false,
		  loginPageModel:true,
		  loginPageModelMessage:action.message,
		  loginPageModelTitle:action.title,
		  loginPageModelClassName:action.className,
		  loginPageSubmitButton: action.submitButton,
          
      }
	   case LOGIN_PAGE_TOGGLE_MODEL:
      return {
        ...state,
          loginPageModel:!state.loginPageModel,
		  loginPageSubmitButton:'',
          loginPageSubmitLoading:true,
		  loginPageModelMessage:'',
		  loginPageModelTitle:'',
		  loginPageModelClassName:''
      }
    default:
      return state
  }
}

export default loginPage