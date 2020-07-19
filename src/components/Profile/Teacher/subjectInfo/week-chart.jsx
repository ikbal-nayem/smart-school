import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'SAT', class: 3,
  },
  {
    name: 'SUN', class: 4,
  },
  {
    name: 'MON', class: 2,
  },
  {
    name: 'TUE', class: 5,
  },
  {
    name: 'WED', class: 3,
  },
  {
    name: 'THU', class: 4,
  },
  {
    name: 'FRI', class: 0,
  },
];

export default class WeekChart extends PureComponent {

  render() {
    return (
      <div className="jr-card p-0 mb-2">
        <div className="card-header text-center">
          Class takes per day
        </div>
        <div className="jr-card-body">
        	<ResponsiveContainer width='100%' aspect={3}>
    	      <BarChart
    	        data={data}
    	        margin={{
    	          top: 5, right: 30, left: 20, bottom: 5,
    	        }}
    	      >
    	        <CartesianGrid strokeDasharray="3 3" />
    	        <XAxis dataKey="name" />
    	        <YAxis />
    	        <Tooltip />
    	        <Legend />
    	        <Bar dataKey="class" fill="#39ab9a" />
    	      </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
