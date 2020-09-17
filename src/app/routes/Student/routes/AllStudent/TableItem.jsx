import React from 'react';
import { Link } from 'react-router-dom';
import IntlMessages from 'util/IntlMessages'
import { Avatar } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const TableItem = ({item, index}) => {

  const statusStyle = item && item.academic_info.group===null ? "text-white bg-lime" : item && item.academic_info.group.includes("Science") ? "text-white bg-cyan" : item && item.academic_info.group.includes("Arts") ? "text-white bg-light-blue" : "text-white bg-blue";
  
  return (
    <tr className={`animated fadeIn animation-delay-${index}`}>
      <td>
        <Link to={`/student/${item ? item.username : null}`} className='card-link'>
          <div className="user-profile d-flex flex-row align-items-center" style={styles.userProfile}>
          {
            item
            ? <Avatar alt={item.username} src={item.pictures.thumbnail} className="user-avatar" />
            : <Skeleton animation="wave" variant="circle" width={40} height={40}/>
          }
            <div className="user-detail">
            {
              item
              ? <h5 className="user-name">&ensp; {item.first_name} {item.last_name}</h5>
              : <Skeleton className="ml-3" animation="wave" width={200} height={20}/>
            }
            </div>
          </div>
        </Link>
      </td>
      <td className="text-center">{item ? item.academic_info.roll : <Skeleton animation="wave" width="100%" height={20}/>}</td>
      <td className="text-center">{item ? item.academic_info.class_code : <Skeleton animation="wave" width="100%" height={20}/>}</td>
      <td className="text-center">{item ? item.academic_info.section : <Skeleton animation="wave" width="100%" height={20}/>}</td>
      <td className="status-cell text-center">
        {
          item
          ? <div className={`badge text-uppercase ${statusStyle}`}>{item.academic_info.group?<IntlMessages id={`class.group.${item.academic_info.group.toLowerCase()}`}/>:'-'}</div>
          : <Skeleton animation="wave" width="100%" height={20}/>
        }
      </td>
      <td className="text-center">{item ? item.academic_info.shift : <Skeleton animation="wave" width="100%" height={20}/>}</td>
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