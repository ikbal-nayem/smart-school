import React from 'react';
import { Link } from 'react-router-dom';
import IntlMessages from 'util/IntlMessages'
import Avatar from '@material-ui/core/Avatar';

const TableItem = ({data, index}) => {

  const statusStyle = data.group===null ? "text-white bg-lime" : data.group.includes("Science") ? "text-white bg-cyan" : data.group.includes("Arts") ? "text-white bg-light-blue" : "text-white bg-blue";
  
  return (
    <tr key={data.username} className={`animated fadeIn animation-delay-${index}`}>
      <td>
        <Link to={`/student/${data.username}`} className='card-link'>
          <div className="user-profile d-flex flex-row align-items-center" style={styles.userProfile}>
            <Avatar alt={data.username} src={data.thumb} className="user-avatar" />
            <div className="user-detail">
              <h5 className="user-name">&ensp; {data.name}</h5>
            </div>
          </div>
        </Link>
      </td>
      <td className="text-center">{data.roll}</td>
      <td className="text-center">{data.Class}</td>
      <td className="text-center">{data.section}</td>
      <td className="status-cell text-center">
        <div className={`badge text-uppercase ${statusStyle}`}>{data.group?<IntlMessages id={`class.group.${data.group.toLowerCase()}`}/>:'-'}</div>
      </td>
      <td className="text-center">{data.shift}</td>
    </tr>
  );
};

export default TableItem;



const styles = {
  userProfile:{
    paddingTop: 2,
    paddingBottom: 2
  }
}