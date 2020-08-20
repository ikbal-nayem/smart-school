import axios from 'util/Api';


export const getStudent = (year=null, cls=null)=>{
	return new Promise((resolve, reject)=>{
			axios.get(`account/student/?year=${year}&class=${cls}`)
			.then(res => {
				resolve(res.data)
			})
		}
	)
}

