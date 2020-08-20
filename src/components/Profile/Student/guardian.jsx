import React from 'react';


const Guardian = ({guardian}) => {
	const female_pic = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F09%2F01%2F822739_user_512x512.png&f=1&nofb=1"
	const male_pic = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F09%2F01%2F822711_user_512x512.png&f=1&nofb=1"

	return(
		<div className="jr-card shadaw border-0 user-detail-card ml-auto" style={{maxWidth: 350}}>
			<div className="user-img-container">
			{
				guardian ? 
					<img className="user-img" alt="Guardian" src={guardian.gender? (guardian.gender==='male'?male_pic:female_pic) : (guardian.guardian_personal_info.gender?(guardian.guardian_personal_info.gender==='male'?male_pic:female_pic):male_pic)} />
				:
					<img className="user-img" alt="Guardian" src={male_pic} />
			}
			</div>
			<div className="jr-card-body d-flex flex-column justify-content-center">
			{
				guardian ?
					<React.Fragment>
						<h4 class="mb-0">{guardian.first_name} {guardian.last_name}</h4>
						<span class="d-block jr-fs-13 mb-1">{guardian.email?guardian.email:guardian.guardian_personal_info.email}</span>
						{
							guardian.phone_numbers.map(num=>(
								<span class="d-block jr-fs-sm text-grey">{num.number}</span>
							))
						}
					</React.Fragment>
				:
					<small>Information not provided.</small>
			}
			</div>
		</div>
	)
}

export default Guardian;