export const employeeRegistration = (user,session_token) => {
const url = 'http://localhost:8080';
const key = '36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
let data = {
  method: 'POST',
  body: JSON.stringify([{
                    "first_name": user.firstName,
                    "last_name": user.lastName,
                    "email": user.email
                }]),
  headers: {
    'Accept':       'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'X-DreamFactory-API-Key': key,
	  'X-DreamFactory-Session-Token':session_token
  }
}
return fetch(url + '/api/v2/system/user?type=employee',data)
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
