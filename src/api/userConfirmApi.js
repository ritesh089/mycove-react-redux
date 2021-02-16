import React from 'react'
export const userConfirmationApi = (user) => {
const url = 'http://localhost:8080';

let data = {
  method: 'POST',
  body: JSON.stringify({
                    "email": user.email,
                    "code": user.code,
                    "new_password": user.new_password,
                    "verify_password": user.verify_password
                }),
  headers: {
    'Accept':       'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  }
}

return fetch(url +'/api/v2/user/password?login=true&initial=true',data)
    .then(response =>{
		if(response.status<200||response.status>=300){
			return response.json()
			.then(data=>{
				throw new Error(data.error.message)
			})
		}return response.json()
		.then(data=>{
			const userData = {
				df_user_id:data.id,
				user_email: data.email,
				user_first_name: data.first_name,
				user_last_name: data.last_name,
				user_display_name:data.name,
				roll_id:data.role_id,
				user_created_datetime:data.last_login_date,
				session_token: data.session_token


			}
			return userData;
		})
	}).catch(err =>{

			throw new Error((err.message=='Failed to fetch')?'service is temporarily unavailable please try again later':err.message)
	});

};


export const createUserDetails = (user,registerConfirm) => {
const url = 'http://localhost:8080';
const key = '36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
let formData = new FormData();


formData.append('df_user_id',user.df_user_id);
formData.append('files',registerConfirm.avatar[0])
formData.append('user_email',user.user_email);
formData.append('user_first_name',user.user_first_name);
formData.append('user_last_name',user.user_last_name);
formData.append('user_display_name',user.user_display_name);
formData.append('roll_id',user.roll_id);
formData.append('user_created_datetime',user.user_created_datetime);

let data = {
  method: 'POST',
  body:formData,
  headers: {
    'Cache-Control': 'no-cache',
	'X-DreamFactory-API-Key': key,
	'X-DreamFactory-Session-Token':user.session_token
  }
}
return fetch(url +'/api/v2/mysql/_table/user',data)
      .then(response =>{
	if(response.status<200||response.status>=300){
		console.log('error response');
		throw response.json()
		}return response.json()})

};




export const updateUserDetails = (user,registerConfirm) => {
const url = 'http://localhost:8080';
const key = '36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
let formData = new FormData();


formData.append('df_user_id',user.df_user_id);
formData.append('files',registerConfirm.avatar[0]);
formData.append('phone',registerConfirm.phone);
formData.append('address_1',registerConfirm.address_1);
formData.append('address_2',registerConfirm.address_2);
formData.append('zip',registerConfirm.zip);
formData.append('city',registerConfirm.city);
formData.append('state',registerConfirm.state);
formData.append('country',registerConfirm.country);
let data = {
  method: 'POST',
  body:formData,
  headers: {
    'Cache-Control': 'no-cache',
	'X-DreamFactory-API-Key': key,
	'X-DreamFactory-Session-Token':user.session_token
  }
}
return fetch(url +'/api/v2/files?avatar=true',data)
      .then(response =>{
	if(response.status<200||response.status>=300){
		console.log('error response');
		throw response.json()
		}return response.json()})

};




export const updateProfileApi = (user,session_token) => {
const url = 'http://localhost:8080';
const key = '36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';


let data = {
  method: 'PATCH',
  body: JSON.stringify({"resource":[{
                    "user_first_name":user.firstName,
                    "user_last_name":user.lastName,
                    "user_email":user.email,
                    "user_avatar":user.avatar,
                    "user_phone":user.phone,
                    "user_card_details_address_1":user.address_1,
                    "user_card_details_address_2":user.address_2,
                    "user_card_details_zip_code": user.zip,
                    "user_card_details_city":user.city,
                    "user_card_details_state":user.state,
                    "user_card_details_country":user.country

              }]  }),
  headers: {
    'Accept':       'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'X-DreamFactory-API-Key': key,
    'X-DreamFactory-Session-Token':session_token
  }
}
return fetch(url + '/api/v2/mysql/_table/user?type=profileUpdate',data)
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
