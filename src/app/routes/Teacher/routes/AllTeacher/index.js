import React from 'react';

import TeacherTable from './TeacherTable'

class Teacher extends React.Component {

	render() {
		return (
			<div className="app-wrapper">
				<div className="animated zoomIn animation-duration-2">
					<TeacherTable />
				</div>
			</div>
		);
	}
}

export default Teacher;