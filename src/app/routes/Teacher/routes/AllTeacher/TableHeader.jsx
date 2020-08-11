import React from 'react';
import IntlMessages from 'util/IntlMessages';

import TableItem from './TableItem';

const TableHeader = ({data})=>{
	return(
	<div className="table-responsive-material">
      <table className="default-table table-unbordered table table-sm table-hover">
        <thead className="th-border-b">
	        <tr>
	          <th><IntlMessages id="photo"/>&emsp;-&emsp;<IntlMessages id="name"/></th>
	          <th className="text-center"><IntlMessages id="teacher.designation"/></th>
	          <th className="text-center"><IntlMessages id="teacher.degree"/></th>
	          <th className="text-center"><IntlMessages id="email"/></th>
	          <th className="text-center"><IntlMessages id="number"/></th>
	          <th className="status-cell text-center"><IntlMessages id="joining-date"/></th>
	          <th className="text-center"><IntlMessages id="action"/></th>
	          <th/>
	        </tr>
        </thead>
        <tbody>
	        {data.map((data, index) => {
	          return (
	            <TableItem key={data.username} data={data} index={index}/>
	          );
	        })}
        </tbody>
      </table>
   </div>
	)
}

export default TableHeader;

