import axios from '../../util/Api';

export const getDetails = (account_type, username)=>{
	return(
		new Promise((resolve, reject)=>{
			axios.get(`account/${account_type}/${username}`)
			.then(resp=>{
				resolve(resp.data)
			})
		})
	)
}

export const getClassDetails = (account_type, username, class_code)=>{
	return(
		new Promise((resolve, reject)=>{
			axios.get(`account/${account_type}/${username}/?class=${class_code}`)
			.then(resp=>{
				resolve(resp.data)
			})
		})
	)
}