const data1 = {
    "username": "ikbal",
    "first_name": "Ikbal",
    "last_name": "Nayem",
    "account_type": "student",
    "is_left": false,
    "student_personal_info": {
        "guardian": {
            "first_name": "Guardian",
            "last_name": "Name",
            "username": "<username>",
            "phone_numbers": [
                {
                    "id": 5,
                    "number": "123"
                }
            ],
            "email": "example@email.com",
            "gender": "male",
        },
        "gender": "male",
        "dob": null,
        "religion": "Islam",
        "blood_group": "B+",
        "admitted_at": null,
        "address": "",
        "email": "example@email.com"
    },
    "academic_info": {
        "class_list": [
            "ix", "viii", "vii"
        ],
        "session_list": [
            2020, 2019, 2018
        ],
        "class_info": [
            {
                "id": 1,
                "shift": "Morning",
                "class_code": "ix",
                "group": "Science",
                "section": "A",
                "roll": 10,
                "session": 2020,
                "class_id": 1
            }
        ]
    },
    "pictures": {
        "profile": "http://localhost:8000/media/pictures/profile/default.png",
        "thumbnail": "http://localhost:8000/media/CACHE/images/pictures/profile/default/4d6b4de50c2731b4514caba817e429c4.jpg"
    },
    "phone_numbers": [
        {
            "id": 2,
            "number": "123"
        }
    ]
}




const class7 = {
    "academic_info": {
        "class_list": [
            "ix", "viii", "vii"
        ],
        "session_list": [
            2020, 2019, 2018
        ],
        "class_info": [
            {
                "shift": "Morning",
                "class_code": "vii",
                "group": null,
                "section": "B",
                "roll": 19,
                "session": 2018,
            }
        ]
    }
}


const class8 = {
    "academic_info": {
        "class_list": [
            "ix", "viii", "vii"
        ],
        "session_list": [
            2020, 2019, 2018
        ],
        "class_info": [
            {
                "shift": "Morning",
                "class_code": "viii",
                "group": null,
                "section": "C",
                "roll": 32,
                "session": 2019,
            }
        ]
    }
}


const class9 = {
    "academic_info": {
        "class_list": [
            "ix", "viii", "vii"
        ],
        "session_list": [
            2020, 2019, 2018
        ],
        "class_info": [
            {
                "shift": "Morning",
                "class_code": "ix",
                "group": "Science",
                "section": "A",
                "roll": 10,
                "session": 2020,
            }
        ]
    }
}


function createData(subject, marks, grade) {
  return { subject, marks, grade };
}

const res1 = [
  createData('Bangla', 75, 'A'),
  createData('English', 95, 'A+'),
  createData('Math', 80, 'A+'),
  createData('BGST', 92, 'A+'),
  createData('RST', 78, 'A'),
];

const res2 = [
  createData('Bangla', 80, 'A'),
  createData('English', 86, 'A+'),
  createData('Math', 66, 'B'),
  createData('BGST', 55, 'C'),
  createData('RST', 87, 'A+'),
];

const res3 = [
  createData('Bangla', 76, 'A'),
  createData('English', 98, 'A+'),
  createData('Math', 87, 'A+'),
  createData('BGST', 56, 'C'),
  createData('RST', 87, 'A+'),
];

export {
    data1,
    class7,
    class8,
    class9,
    res1,
    res2,
    res3,
}