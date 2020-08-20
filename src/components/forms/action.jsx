import axios from 'util/Api';

export const getClassData = ()=>{
	return new Promise((resolve, reject)=>{
			axios.get(`class/student-form/`)
			.then(res => {
				resolve(res.data)
			})
		}
	)
}


export const getGuardianList =()=>{
	return new Promise((resolve, reject)=>{
		axios.get('account/guardian/search-list/')
		.then(res=>{
			resolve(res.data)
		})
		.catch(err=>console.log(err.messages))
	})
}


export const getGuardianDetails =(username)=>{
	return new Promise((resolve, reject)=>{
		axios.get(`account/guardian/${username}/`)
		.then(res=>{
			resolve(res.data)
		})
		.catch(err=>console.log(err.messages))
	})
}


export const addNewGuardian =(data)=>{
	return new Promise((resolve, reject)=>{
		axios.post('account/guardian/add/', data)
		.then(res=>{
			resolve(res.data)
		})
		.catch(err=>console.log(err.messages))
	})
}