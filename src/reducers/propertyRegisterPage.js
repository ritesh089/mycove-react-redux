import {PROPERTY_LIST_LOAD,PROPERTY_MANAGER_LIST_LOAD,PROPERTY_AMENITY_LIST_LOAD,PROPERTY_FEATURE_LIST_LOAD,PROPERTY_TYPE_LIST_LOAD,PROPERTY_REGISTER_PAGE_SUBMIT_PROCESSING,PROPERTY_REGISTER_PAGE_SUBMIT_SUCCESS,PROPERTY_REGISTER_PAGE_SUBMIT_FAILED,PROPERTY_REGISTER_PAGE_TOGGLE_MODEL} from '../actionTypes'

const initialState = {
  propertyRegisterPageSubmit: false,
  propertyRegisterPageSubmitButton:'',
  propertyRegisterPageSubmitLoading:false,
  propertyRegisterPageModel:false,
  propertyRegisterPageModelMessage:'',
  propertyRegisterPageModelTitle:'',
  propertyRegisterPageModelClassName:'',
  propertyManagerList:[],
  propertyAmenityList:[],
  propertyFeatureList:[],
  propertyTypeList:[],
  propertyList:[]
};



const propertyRegisterPage = (state = initialState, action) => {
  switch (action.type) {
    case PROPERTY_REGISTER_PAGE_SUBMIT_PROCESSING:
      return {
        ...state,
          propertyRegisterPageSubmit: true,
		  propertyRegisterPageSubmitButton:'',
          propertyRegisterPageSubmitLoading:true,
		  propertyRegisterPageModel:false,
		  propertyRegisterPageModelMessage:'',
		  propertyRegisterPageModelTitle:'',
		  propertyRegisterPageModelClassName:''
      }
	 case PROPERTY_REGISTER_PAGE_SUBMIT_SUCCESS:
      return {
        ...state,
		  propertyRegisterPageSubmit: false,
          propertyRegisterPageSubmitButton: '',
          propertyRegisterPageSubmitLoading:false,
		  propertyRegisterPageModel:true,
		  propertyRegisterPageModelMessage:action.message,
		  propertyRegisterPageModelTitle:action.title,
		  propertyRegisterPageModelClassName:action.className,
		  propertyRegisterPageSubmitButton: action.submitButton,
      }
	  case PROPERTY_REGISTER_PAGE_SUBMIT_FAILED:
      return {
        ...state,
		  propertyRegisterPageSubmit:false,
          propertyRegisterPageSubmitLoading:false,
		  propertyRegisterPageModel:true,
		  propertyRegisterPageModelMessage:action.message,
		  propertyRegisterPageModelTitle:action.title,
		  propertyRegisterPageModelClassName:action.className,
		  propertyRegisterPageSubmitButton: action.submitButton,

      }
	   case PROPERTY_REGISTER_PAGE_TOGGLE_MODEL:
      return {
        ...state,
		  propertyRegisterPageSubmit:false,
          propertyRegisterPageModel:!state.propertyRegisterPageModel,
		  propertyRegisterPageSubmitButton:'',
          propertyRegisterPageSubmitLoading:false,
		  propertyRegisterPageModelMessage:'',
		  propertyRegisterPageModelTitle:'',
		  propertyRegisterPageModelClassName:''
      }

      case PROPERTY_TYPE_LIST_LOAD:
        return {
          ...state,
        propertyTypeList: action.propertyTypeList,

        }
      case PROPERTY_FEATURE_LIST_LOAD:
          return {
            ...state,
          propertyFeatureList: action.propertyFeatureList,

        }
      case PROPERTY_AMENITY_LIST_LOAD:
          return {
            ...state,
          propertyAmenityList: action.propertyAmenityList,

        }
      case PROPERTY_MANAGER_LIST_LOAD:
          return {
            ...state,
          propertyManagerList: action.propertyManagerList,

        }
      case PROPERTY_LIST_LOAD:
          return {
              ...state,
          propertyList: action.propertyList,

        }


    default:
      return state
  }
}

export default propertyRegisterPage
