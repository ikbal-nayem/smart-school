import React from 'react';


const cls_name = {
	"viii": "Eight",
	"ix": "Nine",
	"x": "ten"
}

export default class ClassInfo extends React.Component{

  render(){
  	let class_list = this.props.academic_info.class_list
  	let active_cls = this.props.academic_info.class_info[0].class_code

    return(
      <div className="d-flex class-info">
      	{class_list.reverse().map(cls => (
      		<div style={styles.info_card}>
	      		<div className={`jr-card jr-card-full p-2 ${active_cls === cls ? 'text-white bg-gradient-primary' : ''}`}>
	      			<div className="text-center">
	      				<h2 className="jr-font-weight-bold mb-1">{cls}</h2>
	      				<p>{eval(`cls_name.${cls}`)}</p>
	      			</div>
	      		</div>
	      	</div>
      	))}
      </div>
    )
  }
}


const styles = {
	info_card: {
		minWidth: 80,
		marginRight: 5,
	}
}