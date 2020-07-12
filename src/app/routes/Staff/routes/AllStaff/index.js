import React from 'react';

import StaffTable from './StaffTable'

class Staff extends React.Component {

	render() {
		return (
			<div className="app-wrapper">
				<div className="animated zoomIn animation-duration-2">
					<StaffTable />
				</div>
			</div>
		);
	}
}

export default Staff;