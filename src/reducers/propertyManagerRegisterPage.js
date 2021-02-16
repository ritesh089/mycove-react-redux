import {LOAD_PROPERTY_MANAGER_LIST,PROPERTY_MANAGER_REGISTER_PAGE_SUBMIT_PROCESSING,PROPERTY_MANAGER_REGISTER_PAGE_SUBMIT_SUCCESS,PROPERTY_MANAGER_REGISTER_PAGE_SUBMIT_FAILED,PROPERTY_MANAGER_REGISTER_PAGE_TOGGLE_MODEL} from '../actionTypes'

const initialState = {
  propertyManagerRegisterPageSubmit: false,
  propertyManagerRegisterPageSubmitButton:'',
  propertyManagerRegisterPageSubmitLoading:false,
  propertyManagerRegisterPageModel:false,
  propertyManagerRegisterPageModelMessage:'',
  propertyManagerRegisterPageModelTitle:'',
  propertyManagerRegisterPageModelClassName:'',
  propertyManagerList:[]
};



const propertyManagerRegisterPage = (state = initialState, action) => {
  switch (action.type) {
    case PROPERTY_MANAGER_REGISTER_PAGE_SUBMIT_PROCESSING:
      return {
        ...state,
          propertyManagerRegisterPageSubmit: true,
		  propertyManagerRegisterPageSubmitButton:'',
          propertyManagerRegisterPageSubmitLoading:true,
		  propertyManagerRegisterPageModel:false,
		  propertyManagerRegisterPageModelMessage:'',
		  propertyManagerRegisterPageModelTitle:'',
		  propertyManagerRegisterPageModelClassName:''
      }
	 case PROPERTY_MANAGER_REGISTER_PAGE_SUBMIT_SUCCESS:
      return {
        ...state,
		  propertyManagerRegisterPageSubmit: false,
          propertyManagerRegisterPageSubmitButton: '',
          propertyManagerRegisterPageSubmitLoading:false,
		  propertyManagerRegisterPageModel:true,
		  propertyManagerRegisterPageModelMessage:action.message,
		  propertyManagerRegisterPageModelTitle:action.title,
		  propertyManagerRegisterPageModelClassName:action.className,
		  propertyManagerRegisterPageSubmitButton: action.submitButton,
      }
	  case PROPERTY_MANAGER_REGISTER_PAGE_SUBMIT_FAILED:
      return {
        ...state,
		  propertyManagerRegisterPageSubmit:false,
          propertyManagerRegisterPageSubmitLoading:false,
		  propertyManagerRegisterPageModel:true,
		  propertyManagerRegisterPageModelMessage:action.message,
		  propertyManagerRegisterPageModelTitle:action.title,
		  propertyManagerRegisterPageModelClassName:action.className,
		  propertyManagerRegisterPageSubmitButton: action.submitButton,

      }
	   case PROPERTY_MANAGER_REGISTER_PAGE_TOGGLE_MODEL:
      return {
        ...state,
		  propertyManagerRegisterPageSubmit:false,
          propertyManagerRegisterPageModel:!state.propertyManagerRegisterPageModel,
		  propertyManagerRegisterPageSubmitButton:'',
          propertyManagerRegisterPageSubmitLoading:false,
		  propertyManagerRegisterPageModelMessage:'',
		  propertyManagerRegisterPageModelTitle:'',
		  propertyManagerRegisterPageModelClassName:''
      }
      case LOAD_PROPERTY_MANAGER_LIST:
        return {
          ...state,
  		  propertyManagerList: action.propertyManagerList,

        }


    default:
      return state
  }
}

export default propertyManagerRegisterPage
