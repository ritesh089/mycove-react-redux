import { sessionService } from 'redux-react-session';
import * as registerApi from '../api/propertyRegisterApi';
import {sessionCheck} from './sessionActions';
import { actions } from 'react-redux-form';
//import xlsParser from 'xls-parser';
import {PROPERTY_LIST_LOAD,PROPERTY_MANAGER_LIST_LOAD,PROPERTY_AMENITY_LIST_LOAD,PROPERTY_FEATURE_LIST_LOAD,PROPERTY_TYPE_LIST_LOAD,PROPERTY_REGISTER_PAGE_SUBMIT_PROCESSING,PROPERTY_REGISTER_PAGE_SUBMIT_SUCCESS,PROPERTY_REGISTER_PAGE_SUBMIT_FAILED,PROPERTY_REGISTER_PAGE_TOGGLE_MODEL} from '../actionTypes'

export function propertyRegisterPageSubmitProcessing() {
  return { type: PROPERTY_REGISTER_PAGE_SUBMIT_PROCESSING }
}

export function propertyRegisterPageSubmitSuccess(message,title,className,submitButton) {
  return { type: PROPERTY_REGISTER_PAGE_SUBMIT_SUCCESS, message,title,className,submitButton }
}

export function propertyRegisterPageSubmitFailed(message,title,className,submitButton) {
  return { type: PROPERTY_REGISTER_PAGE_SUBMIT_FAILED, message,title,className,submitButton }
}


export function propertyRegisterPageToggleModel() {
  return { type: PROPERTY_REGISTER_PAGE_TOGGLE_MODEL }
}



export function propertyRegistration (register, history){
  return dispatch => {
   dispatch(propertyRegisterPageSubmitProcessing());
	return sessionCheck(history).then(response=>{
	if(response.status=='success'){
		return registerApi.register(register,response.session_token)
		.then(response => {
			dispatch(actions.reset('propertyRegister'));
			dispatch(propertyRegisterPageSubmitSuccess('Property details are updated successfully','Update Successful','modal-success','Ok'))
		}).catch(err =>{
			if(err.message=='Validation failed'){
				err.message='The email address has already been registered';
			}
			dispatch(propertyRegisterPageSubmitFailed(err.message,'Registration Failed','modal-danger ','Ok'))
		});
	}
	});

};

};

export function loadPropertyManagerList(propertyManagerList) {
  return { type: PROPERTY_MANAGER_LIST_LOAD,propertyManagerList  }
}
export function loadPropertyList(propertyList) {
  return { type: PROPERTY_LIST_LOAD,propertyList  }
}
export function loadPropertyAmenityList(propertyAmenityList) {
  return { type: PROPERTY_AMENITY_LIST_LOAD,propertyAmenityList  }
}
export function loadPropertyFeatureList(propertyFeatureList) {
  return { type: PROPERTY_FEATURE_LIST_LOAD,propertyFeatureList  }
}
export function loadPropertyTypeList(propertyTypeList) {
  return { type: PROPERTY_TYPE_LIST_LOAD,propertyTypeList  }
}

export function getPropertyAction (property_id){
  console.log("insise get property "+property_id);

  return dispatch => {

    return sessionService.loadSession()
      .then(currentSession => {
        console.log('testCurrenIN');



        return registerApi.getProperty(currentSession,property_id)
        .then(response => {
          console.log('testReturn'+response);
          console.log(JSON.stringify(response));

              var propertyRegister = {
      					property_tax_code:response['property_tax_code'],
                property_name:response["property_name"],
                property_id:response["property_id"],
                property_type_id:response["property_type_id"]?response["property_type_id"]:'',
                property_tax_code:response["property_tax_code"],
                property_office_number:response["property_office_number"],
                property_email:response["property_email"],
                property_manager_id:response["property_manager_id"],
                property_features_tags:response["property_features_tags"],
                property_logo_url:(response["property_logo_url"]==null)?[]:response["property_logo_url"],
                property_age_date:response["property_age_date"]? new Date(response["property_age_date"]):null,
                property_sqft:response["property_sqft"],
                property_amenity:response["property_amenity"],
                property_latitude:response["property_latitude"],
                property_longitude: response["property_longitude"],
                property_description:response["property_description"],
                property_images:response["property_images"],
                street_address_1:response["property_street_name"],
                street_address_2:response["property_line_2"],
                zip:response["property_zip"],
                city:response["property_city"],
                state:response["property_state"],
                country: response["property_country"],
                mailing_street_address_1:response["property_mailing_street_name"],
                mailing_street_address_2:response["property_mailing_line_2"],
                mailing_zip:response["property_mailing_zip"],
                mailing_city:response["property_mailing_city"],
                mailing_state:response["property_mailing_state"],
                mailing_country: response["property_mailing_country"],
                addressCopy:false



      				}



          console.log(JSON.stringify(propertyRegister));
          console.log(propertyRegister);

        //  dispatch(loadProperty(property));
          dispatch(actions.change('propertyRegister',propertyRegister));

          console.log('sfdf')
        })
      })

};

};


export function getPropertyType (){
  return dispatch => {
    return sessionService.loadSession()
      .then(currentSession => {
        return registerApi.getPropertyTypeApi(currentSession)
        .then(response => {
          var propertyTypeList=[];
          response.resource.map(resource=>{
            propertyTypeList.push({
              'label': resource['property_type'],
              'value': resource['property_type_id']
            });
          })
          dispatch(loadPropertyTypeList(propertyTypeList));
        })
      })
    };
  };
  export function getPropertyFeatureType (){
    return dispatch => {
      return sessionService.loadSession()
        .then(currentSession => {
          return registerApi.getPropertyFeatureTypeApi(currentSession)
          .then(response => {
            var propertyFeatureTypeList=[];
            response.resource.map(resource=>{
              propertyFeatureTypeList.push({
                'label': resource['property_feature'],
                'value': resource['property_feature_id']
              });
            })
            dispatch(loadPropertyFeatureList(propertyFeatureTypeList));
          })
        })
      };
    };

    export function getPropertyAmenityType (){
      return dispatch => {
        return sessionService.loadSession()
          .then(currentSession => {
            return registerApi.getPropertyAmenityTypeApi(currentSession)
            .then(response => {
              var propertyAmenityTypeList=[];
              response.resource.map(resource=>{
                propertyAmenityTypeList.push({
                  'label': resource['property_amenity'],
                  'value': resource['property_amenity_id']
                });
              })
              dispatch(loadPropertyAmenityList(propertyAmenityTypeList));
            })
          })
        };
      };


      export function getPropertyManagerList (){
        return dispatch => {
          return sessionService.loadSession()
            .then(currentSession => {
              return registerApi.getPropertyManagerListApi(currentSession)
              .then(response => {
                var propertyManagerList=[];
                response.resource.map(resource=>{
                  propertyManagerList.push({
                    'label': resource['user_display_name'],
                    'value': resource['df_user_id']
                  });
                })
                dispatch(loadPropertyManagerList(propertyManagerList));
              })
            })
          };
        };


        export function getPropertyListAction (){
          return dispatch => {
            return sessionService.loadSession()
              .then(currentSession => {
                return registerApi.getPropertyListApi(currentSession)
                  .then(response => {
                    var propertyList=[];
                    response.resource.map(resource=>{
                    propertyList.push({
                      'property_manager': resource['user_by_property_manager_id']['user_display_name'],
                      'email': resource['user_by_property_manager_id']['user_email'],
                      'mobile_no': resource['user_by_property_manager_id']['user_phone'],
                      'status': resource['user_by_property_manager_id']['signup_active_flag']===true?"Active":"Not Active",
                      'property_id': resource['property_id'],
                      'property_name': resource['property_name']

                    });
                  })
                  dispatch(loadPropertyList(propertyList));
                })
              })
            };
          };
