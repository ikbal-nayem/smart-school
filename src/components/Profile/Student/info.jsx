import React from 'react';
import { IconButton, Collapse } from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';

import About from './about';



const Information = ({data}) => {
	const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

	return(
		<div className="jr-card mb-2 p-0 animated slideInUp animation-duration-2 animation-delay-2">
			<div className="jr-card-header card-img-top mb-0 px-4 py-2 bg-grey lighten-4">
				Information
			</div>
			<div className="card-body pb-0">
				<div class="jr-card-header-color">
					<ul class="contact-list list-unstyled">
						<li class="media">
							<i class="zmdi zmdi-phone zmdi-hc-fw zmdi-hc-lg text-primary align-self-center"></i>
							<div className="d-flex flex-column">
							{
								data.phone_numbers.map((phn)=>(
									<span key={phn.id} class="media-body">{`+880${phn.number}`}</span>
								))
							}
							</div>
						</li>
						<li class="media">
							<i class="zmdi zmdi-email zmdi-hc-fw zmdi-hc-lg text-primary align-self-center"></i>
							<span class="media-body">{data.student_personal_info.email?data.student_personal_info.email:'-'}</span>
						</li>
						{
							data.student_personal_info.facebook_url ?
								<li class="media">
									<i class="zmdi zmdi-facebook-box zmdi-hc-fw zmdi-hc-lg text-primary align-self-center"></i>
									<span class="media-body">jemmy.godbole</span>
								</li>
							: null
						}
						<li class="media">
							<i class="zmdi zmdi-pin zmdi-hc-fw zmdi-hc-lg text-primary align-self-center"></i>
							<span class="media-body">{data.student_personal_info.address?data.student_personal_info.address:'-'}</span>
						</li>
					</ul>

					<Collapse in={expanded} timeout="auto" unmountOnExit>
						<About data={data} />
					</Collapse>

					<IconButton className="jr-badge-up bg-gradient-primary extend-button" onClick={handleExpandClick}>
						{expanded ? <ExpandLess/> : <ExpandMore/> }
					</IconButton>
				</div>
			</div>
		</div>
	)
}


export default Information;