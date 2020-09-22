import axios from 'util/Api';


export const getTeacherList = (status='present')=>{
	return new Promise((resolve, reject)=>{
			axios.get(`account/teacher/?status=${status}`)
			.then(res => {
				resolve(res.data)
			})
		}
	)
}

