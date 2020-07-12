import React from 'react';
import { Link } from 'react-router-dom';
// import IntlMessages from 'util/IntlMessages'
import Avatar from '@material-ui/core/Avatar';

const TableItem = ({data, index}) => {

  
  return (
    <tr key={data.username} className={`animated fadeIn animation-delay-${index}`}>
      <td>
        <Link to={`/staff/${data.username}`} className='card-link'>
          <div className="user-profile d-flex flex-row align-items-center" style={styles.userProfile}>
            <Avatar alt={data.username} src={data.thumb} className="user-avatar" />
            <div className="user-detail">
              <h5 className="user-name">&nbsp; {data.name}</h5>
            </div>
          </div>
        </Link>
      </td>
      <td className="text-center">{data.designation}</td>
      <td className="text-center">{data.email}</td>
      <td className="text-center">{data.phone_number}</td>
      <td className="text-center">{data.joining_date}</td>
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