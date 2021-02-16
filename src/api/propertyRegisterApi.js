export const register = (property,session_token) => {
const url = 'http://localhost:8080';
const key = '36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';

var property_image=[];
property_image.push({
  'resource': property.property_logo_url
});

let data = {
  method: 'PATCH',
  body: JSON.stringify({"resource":[{
                    "property_id":property.property_id,
                    "property_name":property.property_name,
                    "property_type_id":property.property_type_id.value,
                    "property_tax_code":property.property_tax_code,
                    "property_office_number":property.property_office_number,
                    "property_logo_url1":property_image[0],
                    "property_email":property.property_email,
                    "property_age_date": property.property_age_date,
                    "property_sqft":property.property_sqft,
                    "property_description":property.property_description,
                    "property_feature":property.property_features_tags,
                    "property_amenity":property.property_amenity,

                    "property_street_name": property.street_address_1,
                    "property_line_2":property.street_address_2,
                    "property_city":property.city,
                    "property_zip":property.zip,
                    "property_state":property.state,
                    "property_country":property.country,
                    "property_mailing_street_name": property.mailing_street_address_1,
                    "property_mailing_line_2":property.mailing_street_address_2,
                    "property_mailing_city":property.mailing_city,
                    "property_mailing_zip":property.mailing_zip,
                    "property_mailing_state":property.mailing_state,
                    "property_mailing_country":property.mailing_country,


              }]  }),
  headers: {
    'Accept':       'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'X-DreamFactory-API-Key': key,
    'X-DreamFactory-Session-Token':session_token
  }
}
return fetch(url + '/api/v2/mysql/_table/property?type=propertyUpdate',data)
      .then(response =>{
			if(response.status<200||response.status>=300){
			return response.json()
				.then(data=>{
					throw new Error(data.error.message)
				})
			}
			return response.json()
		}).catch(err =>{
			throw new Error((err.message=='Failed to fetch')?'service is temporarily unavailable please try again later':err.message)
	});
};



export const propertyPhotoUpload = (property,session_token) => {
const url = 'http://localhost:8080';
const key = '36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
let formData = new FormData();


formData.append('images',property.property_logo_url);
let data = {
  method: 'POST',
  body:formData,
  headers: {
    'Cache-Control': 'no-cache',
	'X-DreamFactory-API-Key': key,
	'X-DreamFactory-Session-Token':session_token
  }
}
return fetch(url +'/api/v2/files/test/test.jpg',data)
      .then(response =>{
	if(response.status<200||response.status>=300){
		console.log('error response');
		throw response.json()
		}return response.json()})

};

export const getProperty = (session_token,property_id) => {
const url = 'http://localhost:8080';
const key = '36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';

let data = {
  method: 'GET',
  headers: {
    'Accept':       'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'X-DreamFactory-API-Key': key,
    'X-DreamFactory-Session-Token':session_token
  }
}
return fetch(url + '/api/v2/mysql/_table/property/'+property_id+'?type=getProperty',data)
      .then(response =>{
			if(response.status<200||response.status>=300){
			return response.json()
				.then(data=>{
					throw new Error(data.error.message)
				})
			}
			return response.json()
		}).catch(err =>{
			throw new Error((err.message=='Failed to fetch')?'service is temporarily unavailable please try again later':err.message)
	});
};







export const getPropertyTypeApi = (session_token) => {
const url = 'http://localhost:8080';
const key = '36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';

let data = {
  method: 'GET',
  headers: {
    'Accept':       'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'X-DreamFactory-API-Key': key,
    'X-DreamFactory-Session-Token':session_token
  }
}
return fetch(url + '/api/v2/mysql/_table/property_type/',data)
      .then(response =>{
			if(response.status<200||response.status>=300){
			return response.json()
				.then(data=>{
					throw new Error(data.error.message)
				})
			}
			return response.json()
		}).catch(err =>{
			throw new Error((err.message=='Failed to fetch')?'service is temporarily unavailable please try again later':err.message)
	});
};


export const getPropertyFeatureTypeApi = (session_token) => {
const url = 'http://localhost:8080';
const key = '36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';

let data = {
  method: 'GET',
  headers: {
    'Accept':       'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'X-DreamFactory-API-Key': key,
    'X-DreamFactory-Session-Token':session_token
  }
}
return fetch(url + '/api/v2/mysql/_table/property_feature_type/',data)
      .then(response =>{
			if(response.status<200||response.status>=300){
			return response.json()
				.then(data=>{
					throw new Error(data.error.message)
				})
			}
			return response.json()
		}).catch(err =>{
			throw new Error((err.message=='Failed to fetch')?'service is temporarily unavailable please try again later':err.message)
	});
};



export const getPropertyAmenityTypeApi = (session_token) => {
const url = 'http://localhost:8080';
const key = '36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';

let data = {
  method: 'GET',
  headers: {
    'Accept':       'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'X-DreamFactory-API-Key': key,
    'X-DreamFactory-Session-Token':session_token
  }
}
return fetch(url + '/api/v2/mysql/_table/property_amenity_type/',data)
      .then(response =>{
			if(response.status<200||response.status>=300){
			return response.json()
				.then(data=>{
					throw new Error(data.error.message)
				})
			}
			return response.json()
		}).catch(err =>{
			throw new Error((err.message=='Failed to fetch')?'service is temporarily unavailable please try again later':err.message)
	});
};



export const getPropertyManagerListApi = (session_token) => {
const url = 'http://localhost:8080';
const key = '36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';

let data = {
  method: 'GET',
  headers: {
    'Accept':       'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'X-DreamFactory-API-Key': key,
    'X-DreamFactory-Session-Token':session_token
  }
}
return fetch(url + '/api/v2/mysql/_table/user?filter=roll_id=2',data)
      .then(response =>{
			if(response.status<200||response.status>=300){
			return response.json()
				.then(data=>{
					throw new Error(data.error.message)
				})
			}
			return response.json()
		}).catch(err =>{
			throw new Error((err.message=='Failed to fetch')?'service is temporarily unavailable please try again later':err.message)
	});
};



export const getPropertyListApi = (session_token) => {
const url = 'http://localhost:8080';
const key = '36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';

let data = {
  method: 'GET',
  headers: {
    'Accept':       'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'X-DreamFactory-API-Key': key,
    'X-DreamFactory-Session-Token':session_token
  }
}
return fetch(url + '/api/v2/mysql/_table/property?related=user_by_property_manager_id',data)
      .then(response =>{
			if(response.status<200||response.status>=300){
			return response.json()
				.then(data=>{
					throw new Error(data.error.message)
				})
			}
			return response.json()
		}).catch(err =>{
			throw new Error((err.message=='Failed to fetch')?'service is temporarily unavailable please try again later':err.message)
	});
};
