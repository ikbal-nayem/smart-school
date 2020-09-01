const date = new Date()

const init_data = {
	"first_name": null,
	"last_name": null,
	"account_type": 'student',
	"student_personal_info": {
		"guardian": null,
		"guardian_relation": null,
		"gender": null,
		"dob": null,
		"religion": null,
		"blood_group": null,
		"admitted_at": `${date.getFullYear()}-${('0'+(date.getMonth()+1)).slice(-2)}-${('0'+(date.getDate())).slice(-2)}`,
		"address": null,
		"email": null
	},
	"academic_info": {
		"shift": null,
		"class_code": null,
		"group": null,
		"section": null,
		"roll": null,
		"session": date.getFullYear()
	},
	"phone_numbers": [
		{
			"number": null
		}
	],
	"pictures": {
			"profile": null,
	},
}


const validated_data = {
	"first_name": true,
	"last_name": true,
	"gender": true,
	"dob": true,
	"email": true,
	"shift": true,
	"class_code": true,
	"group": true,
	"session": true
}


export {
		init_data,
		validated_data
}