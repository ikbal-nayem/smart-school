const date = new Date()

export const init_data = {
    "first_name": null,
    "last_name": null,
    "account_type": null,
    "student_personal_info": {
        "guardian": null,
        "guardian relation": null,
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