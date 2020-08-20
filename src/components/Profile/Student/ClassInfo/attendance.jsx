import React, { PureComponent } from 'react';
import {Typography} from '@material-ui/core';
import {
	PieChart, Pie, Sector, Cell, Legend, Tooltip, RadarChart, PolarGrid, PolarAngleAxis, Radar, PolarRadiusAxis
} from 'recharts';

const data = [
	{ name: 'Prersent', value: 80 },
	{ name: 'Absent', value: 30 },
];


const subjectData = [
	{
		subject: 'Math', A: 120, B: 110, fullMark: 150,
	},
	{
		subject: 'Bangla', A: 98, B: 130, fullMark: 150,
	},
	{
		subject: 'English', A: 86, B: 130, fullMark: 150,
	},
	{
		subject: 'ICT', A: 99, B: 100, fullMark: 150,
	},
	{
		subject: 'Physics', A: 85, B: 90, fullMark: 150,
	},
	{
		subject: 'Chemistry', A: 65, B: 85, fullMark: 150,
	},
	{
		subject: 'Biology', A: 70, B: 85, fullMark: 150,
	},
];


const COLORS = ['#0088FE', '#FFBB28'];


const renderActiveShape = (props) => {
	const {
		cx, cy, innerRadius, outerRadius, startAngle, endAngle,
		fill, percent,
	} = props;

	return (
		<g>
			<text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{(percent*100).toFixed(1)}%</text>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
			<Sector
				cx={cx}
				cy={cy}
				startAngle={startAngle}
				endAngle={endAngle}
				innerRadius={outerRadius + 6}
				outerRadius={outerRadius + 10}
				fill={fill}
			/>
		</g>
	);
};



class AttendanceReport extends PureComponent {
	state = {
		activeIndex: 0,
	};

	onPieEnter = (data, index) => {
		this.setState({
			activeIndex: index,
		});
	};

	render(){
		return(
			<div className="jr-card mb-2 p-0 animated slideInUp animation-duration-2 animation-delay-2">
				<div className="card-header text-center py-2">
					<Typography variant="h6" gutterBottom>Class performance</Typography>
				</div>
				<div className="row m-0">
					<div className="col-xl-4 col-lg-5 col-md-5 col-12 p-2 text-center">

						<Typography variant="h7" gutterBottom>Attendance Report</Typography>
						<hr className="mt-1"/>
						<Typography variant="subtitle2" gutterBottom style={{color: '#4caf50'}}>Precent - 72.7%</Typography>
						<Typography variant="caption">Total Class - 110</Typography>
						<div className="d-flex justify-content-center">
							<PieChart width={200} height={230}>
								<Pie
									data={data}
									cx={100}
									cy={100}
									innerRadius={60}
									outerRadius={80}
									fill="#8884d8"
									paddingAngle={4}
									dataKey="value"
									lable={true}
									legendType='rect'
									onMouseEnter={this.onPieEnter}
									activeIndex={this.state.activeIndex}
									activeShape={renderActiveShape}
								>
									{
										data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
									}
								</Pie>
								<Legend align='center' iconSize={10} />
								<Tooltip />
							</PieChart>
						</div>

					</div>
					<div className="col-xl-8 col-lg-7 col-md-7 col-12 p-2 text-center">
						
						<Typography variant="h7" gutterBottom>Subject Performance</Typography>
						<hr className="mt-1"/>
						<div className="class-info d-flex justify-content-center">
							<RadarChart cx={210} cy={120} outerRadius={100} width={400} height={250} data={subjectData}>
								<PolarGrid />
								<PolarAngleAxis dataKey="subject" />
								<PolarRadiusAxis />
								<Radar name="" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
								<Radar name="" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.5} />
								<Legend align='center' iconSize={10} />
								<Tooltip />
							</RadarChart>
						</div>

					</div>
				</div>
			</div>
		)
	}
}

export default AttendanceReport;