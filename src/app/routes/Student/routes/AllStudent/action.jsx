import axios from 'axios';


const getStudent = (year=null, cls=null)=>{
	return new Promise((resolve, reject)=>{
			axios.get(`http://localhost:8000/api/account/student/?year=${year}&class=${cls}`)
			.then(res => {
				resolve(res.data)
			})
		}
	)
}


export {
	getStudent,
}