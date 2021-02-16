import {CLIENT_REGISTER_PAGE_SUBMIT_PROCESSING,CLIENT_REGISTER_PAGE_SUBMIT_SUCCESS,CLIENT_REGISTER_PAGE_SUBMIT_FAILED,CLIENT_REGISTER_PAGE_TOGGLE_MODEL} from '../actionTypes'

const initialState = {
  clientRegisterPageSubmit: false,
  clientRegisterPageSubmitButton:'',
  clientRegisterPageSubmitLoading:false,
  clientRegisterPageModel:false,
  clientRegisterPageModelMessage:'',
  clientRegisterPageModelTitle:'',
  clientRegisterPageModelClassName:''
};



const clientRegisterPage = (state = initialState, action) => {
  switch (action.type) {
    case CLIENT_REGISTER_PAGE_SUBMIT_PROCESSING:
      return {
        ...state,
      clientRegisterPageSubmit: true,
		  clientRegisterPageSubmitButton:'',
      clientRegisterPageSubmitLoading:true,
		  clientRegisterPageModel:false,
		  clientRegisterPageModelMessage:'',
		  clientRegisterPageModelTitle:'',
		  clientRegisterPageModelClassName:''
      }
	 case CLIENT_REGISTER_PAGE_SUBMIT_SUCCESS:
      return {
        ...state,
		  clientRegisterPageSubmit: false,
      clientRegisterPageSubmitButton: '',
      clientRegisterPageSubmitLoading:false,
		  clientRegisterPageModel:true,
		  clientRegisterPageModelMessage:action.message,
		  clientRegisterPageModelTitle:action.title,
		  clientRegisterPageModelClassName:action.className,
		  clientRegisterPageSubmitButton: action.submitButton,
      }
	  case CLIENT_REGISTER_PAGE_SUBMIT_FAILED:
      return {
        ...state,
		  clientRegisterPageSubmit:false,
      clientRegisterPageSubmitLoading:false,
		  clientRegisterPageModel:true,
		  clientRegisterPageModelMessage:action.message,
		  clientRegisterPageModelTitle:action.title,
		  clientRegisterPageModelClassName:action.className,
		  clientRegisterPageSubmitButton: action.submitButton,

      }
	   case CLIENT_REGISTER_PAGE_TOGGLE_MODEL:
      return {
        ...state,
      clientRegisterPageModel:!state.clientRegisterPageModel,
		  clientRegisterPageSubmitButton:'',
      clientRegisterPageSubmitLoading:true,
		  clientRegisterPageModelMessage:'',
		  clientRegisterPageModelTitle:'',
		  clientRegisterPageModelClassName:''
      }
    default:
      return state
  }
}

export default clientRegisterPage
