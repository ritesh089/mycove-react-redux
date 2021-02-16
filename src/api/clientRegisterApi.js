export const clientRegistrationApi = (user) => {
const url = 'http://localhost:8080';

let data = {
  method: 'POST',
  body: JSON.stringify({
                    "first_name": user.firstName,
                    "last_name": user.lastName,
                    "email": user.email
                }),
  headers: {
    'Accept':       'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  }
}
return fetch(url + '/api/v2/user/register?login=true&type=client',data)
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
