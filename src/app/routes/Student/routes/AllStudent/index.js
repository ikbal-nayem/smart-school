import React from 'react';

import StudentTable from './StudentTable'

class Student extends React.Component {

	render() {
		return (
			<div className="app-wrapper">
				<div className="animated zoomIn animation-duration-2">
					<StudentTable {...this.props} />
				</div>
			</div>
		);
	}
}

export default Student;