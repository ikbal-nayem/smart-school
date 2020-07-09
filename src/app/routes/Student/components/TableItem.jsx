import React from 'react';
import IntlMessages from 'util/IntlMessages'
import Avatar from '@material-ui/core/Avatar';

const TableItem = ({data}) => {

  const statusStyle = data.group===null ? "text-white bg-amber" : data.group.includes("Science") ? "text-white bg-success" : "text-white bg-grey";
  return (
    <tr key={data.username}>
      <td>
        <div className="user-profile d-flex flex-row align-items-center">
          <Avatar
            alt={data.username}
            src={data.thumb}
            className="user-avatar"
          />
          <div className="user-detail">
            <h5 className="user-name">&nbsp; {data.name}</h5>
          </div>
        </div>
      </td>
      <td className="text-center">{data.roll}</td>
      <td className="text-center">{data.Class}</td>
      <td className="text-center">{data.section}</td>
      <td className="status-cell text-center">
        <div className={`badge text-uppercase ${statusStyle}`}>{data.group?<IntlMessages id={`class.group.${data.group.toLowerCase()}`}/>:'-'}</div>
      </td>
    </tr>
  );
};

export default TableItem;
