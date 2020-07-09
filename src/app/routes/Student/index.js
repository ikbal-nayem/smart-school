import React from 'react';

import StudentTable from './components/StudentTable'

class Student extends React.Component {

	render() {
		return (
			<div className="app-wrapper">
				<div className="animated slideInUpTiny animation-duration-4">
					<StudentTable />
				</div>
			</div>
		);
	}
}

export default Student;