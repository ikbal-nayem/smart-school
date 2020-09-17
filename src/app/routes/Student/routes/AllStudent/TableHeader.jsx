import React from 'react';
import IntlMessages from 'util/IntlMessages';

import TableItem from './TableItem';

const TableHeader = ({data})=>{
	return(
		<div className="table-responsive-material">
      <table className="default-table table-unbordered table table-sm table-hover">
        <thead className="th-border-b">
	        <tr>
	          <th><IntlMessages id="photo"/>&ensp;-&ensp;<IntlMessages id="name"/></th>
	          <th className="text-center"><IntlMessages id="class.roll"/></th>
	          <th className="text-center"><IntlMessages id="class"/></th>
	          <th className="text-center"><IntlMessages id="class.section"/></th>
	          <th className="status-cell text-center"><IntlMessages id="class.group"/></th>
	          <th className="text-center"><IntlMessages id="class.shift"/></th>
	          <th/>
	        </tr>
        </thead>
        <tbody>
	        {	data.length > 0
	        	? data.map((item, index) => <TableItem key={item.username} item={item} index={index}/>)
	        	: <React.Fragment><TableItem/><TableItem/><TableItem/></React.Fragment>
	    		}
        </tbody>
      </table>
   </div>
	)
}

export default TableHeader;

