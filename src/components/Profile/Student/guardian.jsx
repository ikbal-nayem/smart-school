import React from 'react';


const Guardian = () => {
	return(
		<div className="jr-card shadaw border-0 user-detail-card">
			<div className="user-img-container">
				<img className="user-img" alt="Guardian" src="https://www.shareicon.net/data/2016/09/01/822727_user_512x512.png" />
			</div>
			<div className="jr-card-body d-flex flex-column justify-content-center">
				<h4 class="mb-0">Guardian Name</h4>
				<span class="d-block jr-fs-13 mb-1">example@email.com</span>
				<span class="d-block jr-fs-sm text-grey">123456789</span>
			</div>
		</div>
	)
}

export default Guardian;