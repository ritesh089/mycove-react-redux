import {USER_CONFIRM_PAGE_SUBMIT_PROCESSING,USER_CONFIRM_PAGE_SUBMIT_SUCCESS,USER_CONFIRM_PAGE_SUBMIT_FAILED,USER_CONFIRM_PAGE_TOGGLE_MODEL} from '../actionTypes'

const initialState = {
  userConfirmPageSubmit: false,
  userConfirmPageSubmitButton:'',
  userConfirmPageSubmitLoading:false,
  userConfirmPageModel:false,
  userConfirmPageModelMessage:'',
  userConfirmPageModelTitle:'',
  userConfirmPageModelClassName:''
};



const userConfirmPage = (state = initialState, action) => {
  switch (action.type) {
    case USER_CONFIRM_PAGE_SUBMIT_PROCESSING:
      return {
        ...state,
      userConfirmPageSubmit: true,
		  userConfirmPageSubmitButton:'',
      userConfirmPageSubmitLoading:true,
		  userConfirmPageModel:false,
		  userConfirmPageModelMessage:'',
		  userConfirmPageModelTitle:'',
		  userConfirmPageModelClassName:''
      }
	 case USER_CONFIRM_PAGE_SUBMIT_SUCCESS:
      return {
        ...state,
		  userConfirmPageSubmit: false,
      userConfirmPageSubmitButton: '',
      userConfirmPageSubmitLoading:false,
		  userConfirmPageModel:true,
		  userConfirmPageModelMessage:action.message,
		  userConfirmPageModelTitle:action.title,
		  userConfirmPageModelClassName:action.className,
		  userConfirmPageSubmitButton: action.submitButton
      }
	  case USER_CONFIRM_PAGE_SUBMIT_FAILED:
      return {
        ...state,
		  userConfirmPageSubmit:false,
      userConfirmPageSubmitLoading:false,
		  userConfirmPageModel:true,
		  userConfirmPageModelMessage:action.message,
		  userConfirmPageModelTitle:action.title,
		  userConfirmPageModelClassName:action.className,
		  userConfirmPageSubmitButton: action.submitButton,

      }
	   case USER_CONFIRM_PAGE_TOGGLE_MODEL:
      return {
        ...state,
      userConfirmPageModel:!state.userConfirmPageModel,
		  userConfirmPageSubmitButton:'',
      userConfirmPageSubmitLoading:true,
		  userConfirmPageModelMessage:'',
		  userConfirmPageModelTitle:'',
		  userConfirmPageModelClassName:''
      }
    default:
      return state
  }
}

export default userConfirmPage
