import React from 'react';


const Guardian = ({data}) => {
	const female_pic = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F09%2F01%2F822739_user_512x512.png&f=1&nofb=1"
	const male_pic = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F09%2F01%2F822711_user_512x512.png&f=1&nofb=1"

	return(
		<div className="jr-card shadaw border-0 user-detail-card ml-auto" style={{maxWidth: 350}}>
			<div className="user-img-container">
				<img className="user-img" alt="Guardian" src={data.gender? (data.gender==='male'?male_pic:female_pic) : (data.guardian_personal_info.gender?(data.guardian_personal_info.gender==='male'?male_pic:female_pic):male_pic)} />
			</div>
			<div className="jr-card-body d-flex flex-column justify-content-center">
				<h4 class="mb-0">{data.first_name} {data.last_name}</h4>
				<span class="d-block jr-fs-13 mb-1">{data.email?data.email:data.guardian_personal_info.email}</span>
				<span class="d-block jr-fs-sm text-grey">{data.phone_numbers?data.phone_numbers[0].number:'-'}</span>
			</div>
		</div>
	)
}

export default Guardian;