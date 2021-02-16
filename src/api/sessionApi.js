export const login = (login) => {
const url = 'http://localhost:8080';

const key = '36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
let data = {
  method: 'POST',
  body: JSON.stringify({
    "email": login.email,
    "password": login.password
  }),
  headers: {
    'Accept':       'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'X-DreamFactory-API-Key': key
  }
}
return fetch(url + '/api/v2/user/session',data)
      .then(response =>{
			if(response.status<200||response.status>=300){
				return response.json()
				.then(data=>{
					throw new Error(data.error.message)
				})
			}
			return response.json()
			.then(data=>{
				const userData = {
					id:data.id,
					email: data.email,
					firstName: data.first_name,
					lastName: data.last_name,
					name:data.name,
					role:data.role,
					roleId:data.role_id,
					avatar_url:data.avatar_url,
					lastLogindate:data.last_login_date,
					session_token: data.session_token
				}
				return userData;
			})
		}).catch(err =>{

			throw new Error((err.message=='Failed to fetch')?'service is temporarily unavailable please try again later':err.message)
	});
};


export const getSession = (session_token) => {
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
return fetch(url + '/api/v2/user/session',data)
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




export const logout = (session_token) => {
console.log("test");
const url = 'http://localhost:8080';

const key = '36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
let data = {
  method: 'DELETE',
  headers: {
    'Accept':       'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'X-DreamFactory-API-Key': key,
	'X-DreamFactory-Session-Token':session_token
  }
}
return fetch(url + '/api/v2/user/session',data)
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


export const getProfileApi = (session_token) => {
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
return fetch(url + '/api/v2/mysql/_table/user?type=getUserProfile',data)
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
