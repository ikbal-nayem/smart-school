const date = new Date()

const init_data = {
    "first_name": null,
    "last_name": null,
    "account_type": 'staff',
    "staff_personal_info": {
        "gender": null,
        "dob": null,
        "religion": null,
        "blood_group": null,
        "qualification": null,
        "degree": null,
        "marital_status": null,
        "address": null,
        "email": null,
        "facebook_url":null
    },
    "academic_info": {
        "designation": null,
        "joined_at": `${date.getFullYear()}-${('0'+(date.getMonth()+1)).slice(-2)}-${('0'+(date.getDate())).slice(-2)}`,
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


export {
    init_data
}