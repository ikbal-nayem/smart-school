import React from 'react';
import { Link } from 'react-router-dom';
import IntlMessages from 'util/IntlMessages'
import Avatar from '@material-ui/core/Avatar';

const TableItem = ({item, index}) => {

  const statusStyle = item.academic_info.group===null ? "text-white bg-lime" : item.academic_info.group.includes("Science") ? "text-white bg-cyan" : item.academic_info.group.includes("Arts") ? "text-white bg-light-blue" : "text-white bg-blue";
  
  return (
    <tr key={item.username} className={`animated fadeIn animation-delay-${index}`}>
      <td>
        <Link to={`/student/${item.username}`} className='card-link'>
          <div className="user-profile d-flex flex-row align-items-center" style={styles.userProfile}>
            <Avatar alt={item.username} src={item.pictures.thumbnail} className="user-avatar" />
            <div className="user-detail">
              <h5 className="user-name">&ensp; {item.first_name} {item.last_name}</h5>
            </div>
          </div>
        </Link>
      </td>
      <td className="text-center">{item.academic_info.roll}</td>
      <td className="text-center">{item.academic_info.class_code}</td>
      <td className="text-center">{item.academic_info.section}</td>
      <td className="status-cell text-center">
        <div className={`badge text-uppercase ${statusStyle}`}>{item.academic_info.group?<IntlMessages id={`class.group.${item.academic_info.group.toLowerCase()}`}/>:'-'}</div>
      </td>
      <td className="text-center">{item.academic_info.shift}</td>
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