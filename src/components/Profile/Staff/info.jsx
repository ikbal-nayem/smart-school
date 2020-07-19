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
		<div className="jr-card mb-2 p-0">
			<div className="jr-card-header card-img-top mb-0 px-4 py-2 bg-grey lighten-4">
				Information
			</div>
			<div className="card-body pb-0">
				<div class="jr-card-header-color">
					<ul class="contact-list list-unstyled">
						<li class="media">
							<i class="zmdi zmdi-phone zmdi-hc-fw zmdi-hc-lg text-primary align-self-center"></i>
							<div>
							{
								data.phone_numbers.map((num)=>(
									<div>
										<span class="media-body">{num.number}</span><br/>
									</div>
								))
							}
							</div>
						</li>
						<li class="media">
							<i class="zmdi zmdi-email zmdi-hc-fw zmdi-hc-lg text-primary align-self-center"></i>
							<span class="media-body">{data.staff_personal_info.email}</span>
						</li>
						<li class="media">
							<i class="zmdi zmdi-facebook-box zmdi-hc-fw zmdi-hc-lg text-primary align-self-center"></i>
							<span class="media-body"><a href=".">{data.staff_personal_info.facebook_url}</a></span>
						</li>
						<li class="media">
							<i class="zmdi zmdi-pin zmdi-hc-fw zmdi-hc-lg text-primary align-self-center"></i>
							<span class="media-body">{data.staff_personal_info.address}</span>
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