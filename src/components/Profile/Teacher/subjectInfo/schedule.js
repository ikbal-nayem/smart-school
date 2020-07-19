import React from 'react';


function create(cls, grp, sec, sub, time){
	return {cls, grp, sec, sub, time}
}

const schedule = [
	create('ix', 'Science', 'B', 'ICT', '08:30AM'),
	create('viii', null, 'A', 'English', '09:30AM'),
	create('x', 'Arts', 'A', 'ICT', '10:30AM'),
	create('vi', null, 'C', 'Math', '11:30AM'),
]

const ClassSchedule =()=>{
	return(
		<div class="card mb-0">
			<div class="jr-card-header my-3 d-flex">
				<h3 class="mb-0 mr-auto">Schedule</h3>
				<span class="badge badge-primary">Today</span>
			</div>
			<div class="table-responsive-material">
				<table class="project-list-table table remove-table-border mb-0">
					<thead>
						<tr>
							<th scope="col">Class</th>
							<th scope="col">Group</th>
							<th scope="col">Section</th>
							<th scope="col">Subject</th>
							<th colspan="2" scope="col">Time</th>
						</tr>
					</thead>
					<tbody>
						{
							schedule.map(data=>(
								<tr tabindex="-1">
									<td class="max-width-100"><p class="text-truncate mb-0">{data.cls}</p></td>
									<td class="text-nowrap">{data.grp?data.grp:'-'}</td>
									<td class="text-nowrap">{data.sec}</td>
									<td class="text-nowrap">{data.sub}</td>
									<td><span class="d-block badge badge-success">{data.time}</span></td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</div>
	)
}


export default ClassSchedule;