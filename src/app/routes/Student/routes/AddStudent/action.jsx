import axios from 'util/Api';

export const addNewStudent =(data)=>{
	return new Promise((resolve, reject)=>{
		axios.post('account/student/add/', data)
		.then(res=>{
			resolve(res.data)
		})
		.catch(err=>console.log(err.messages))
	})
}