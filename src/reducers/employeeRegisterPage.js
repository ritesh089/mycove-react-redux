import {EMPLOYEE_REGISTER_PAGE_SUBMIT_PROCESSING,EMPLOYEE_REGISTER_PAGE_SUBMIT_SUCCESS,EMPLOYEE_REGISTER_PAGE_SUBMIT_FAILED,EMPLOYEE_REGISTER_PAGE_TOGGLE_MODEL} from '../actionTypes'

const initialState = {
  employeeRegisterPageSubmit: false,
  employeeRegisterPageSubmitButton:'',
  employeeRegisterPageSubmitLoading:false,
  employeeRegisterPageModel:false,
  employeeRegisterPageModelMessage:'',
  employeeRegisterPageModelTitle:'',
  employeeRegisterPageModelClassName:''
};



const employeeRegisterPage = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_REGISTER_PAGE_SUBMIT_PROCESSING:
      return {
        ...state,
          employeeRegisterPageSubmit: true,
		  employeeRegisterPageSubmitButton:'',
          employeeRegisterPageSubmitLoading:true,
		  employeeRegisterPageModel:false,
		  employeeRegisterPageModelMessage:'',
		  employeeRegisterPageModelTitle:'',
		  employeeRegisterPageModelClassName:''
      }
	 case EMPLOYEE_REGISTER_PAGE_SUBMIT_SUCCESS:
      return {
        ...state,
		  employeeRegisterPageSubmit: false,
          employeeRegisterPageSubmitButton: '',
          employeeRegisterPageSubmitLoading:false,
		  employeeRegisterPageModel:true,
		  employeeRegisterPageModelMessage:action.message,
		  employeeRegisterPageModelTitle:action.title,
		  employeeRegisterPageModelClassName:action.className,
		  employeeRegisterPageSubmitButton: action.submitButton,
      }
	  case EMPLOYEE_REGISTER_PAGE_SUBMIT_FAILED:
      return {
        ...state,
		  employeeRegisterPageSubmit:false,
          employeeRegisterPageSubmitLoading:false,
		  employeeRegisterPageModel:true,
		  employeeRegisterPageModelMessage:action.message,
		  employeeRegisterPageModelTitle:action.title,
		  employeeRegisterPageModelClassName:action.className,
		  employeeRegisterPageSubmitButton: action.submitButton,
          
      }
	   case EMPLOYEE_REGISTER_PAGE_TOGGLE_MODEL:
      return {
        ...state,
		  employeeRegisterPageSubmit:false,
          employeeRegisterPageModel:!state.employeeRegisterPageModel,
		  employeeRegisterPageSubmitButton:'',
          employeeRegisterPageSubmitLoading:false,
		  employeeRegisterPageModelMessage:'',
		  employeeRegisterPageModelTitle:'',
		  employeeRegisterPageModelClassName:''
      }
    default:
      return state
  }
}

export default employeeRegisterPage