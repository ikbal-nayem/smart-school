import React from 'react';


function create(cls, grp, sub){
	return {cls, grp, sub}
}

const takes = [
	create('ix', 'Science', 'ICT'),
	create('viii', null, 'English',),
	create('x', 'Arts', 'ICT',),
	create('vi', null, 'Math',),
	create('vi', null, 'English',),
	create('vii', null, 'Math',),
]


const SubjectList =()=>{
	return(
		<div className="jr-card">
			<div className="jr-card-header mb-3 d-flex">
				<h3 className="mb-0 mr-auto">Subject Takes</h3>
				<span className="badge badge-secondary">This Year</span>
			</div>
			<div className="table-responsive-material">
				<table className="project-list-table table remove-table-border mb-0">
					<thead>
						<tr>
							<th scope="col">Class</th>
							<th scope="col" className="text-center">Group</th>
							<th colspan="2" scope="col" className="text-center">Subject</th>
						</tr>
					</thead>
					<tbody>
						{
							takes.map((data)=>(
								<tr tabindex="-1">
									<td className="max-width-100"><p className="text-truncate mb-0">{data.cls}</p></td>
									<td className="text-center"><span className={`d-block badge badge-${data.grp==='Science'?'blue':data.grp==='Arts'?'light-blue':data.grp===null?'lime':'blue'}`}>{data.grp?data.grp:'-'}</span></td>
									<td className="text-center">{data.sub}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</div>
	)
}


export default SubjectList;