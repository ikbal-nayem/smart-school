import React from 'react';

import AttendanceReport from './attendance';
import Result from './result';
import { classList } from 'app/routes/Class/routes/classes';
import { getClassDetails } from '../../action';



export default class ClassInfo extends React.Component{

	async onClassChange(class_code){
		let data = await getClassDetails('student', this.props.username, class_code)
		this.props.changeClass(data.academic_info)
	}

  render(){
  	let class_list = this.props.academic_info.class_list;
  	let session_list = this.props.academic_info.session_list;
  	let active_class = this.props.academic_info.class_info[0].class_code;

    return(
    	<div>
		    <div className="d-flex class-info">
      	{class_list.map((cls, i) => (
	      	<div key={i} className={`class-info-card animated slideInright animation-delay-${i}`} onClick={()=>this.onClassChange(cls)}>
	      		<div className={`jr-card jr-card-full p-2 mt-1 mb-1 ${active_class === cls ? 'text-white bg-gradient-primary' : ''}`}>
	      			<div className="text-center">
	      				<h3 className="jr-font-weight-bold mb-1">{cls}</h3>
	      				<p className="m-0">{classList[cls]}</p>
	      				<small>{session_list[i]}</small>
	      			</div>
	      		</div>
		    	</div>
      	))}
		    </div>
      	<AttendanceReport active_class={active_class} />
      	<Result active_class={active_class} />
    	</div>
    )
  }
}
