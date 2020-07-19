import React from 'react';


const date = new Date()

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DateView =()=>{
	return(
		<div className="card text-center p-4">
			<h1 className="my-3 text-primary">{weekday[date.getDay()]}</h1>
			<div className="jr-separator bg-primary" />
			<div className="jr-card-body">
				<h3 className="my-3">
					{date.getDate()}/{monthNames[date.getMonth()]}
				</h3>
				<h2 className="text-primary">
					<b>{date.getFullYear()}</b>
				</h2>
			</div>
		</div>
	)
}

export default DateView;