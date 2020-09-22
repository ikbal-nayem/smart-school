import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { Skeleton } from '@material-ui/lab';

const TableItem = ({data, index}) => {

  return (
    <tr className={`animated fadeIn animation-delay-${index}`}>
      <td>
        <Link to={`/teacher/${data?data.username:'#'}`} className='card-link'>
          <div className="user-profile d-flex flex-row align-items-center" style={styles.userProfile}>
            <Avatar alt={data?data.username:'...'} src={data?data.pictures.thumbnail:<Skeleton height={40} width={40}/>} className="user-avatar" />
            <div className="user-detail">
              <h5 className="user-name">&nbsp; {data?`${data.first_name} ${data.last_name}`:<Skeleton height={20} width={100}/>}</h5>
            </div>
          </div>
        </Link>
      </td>
      <td className="text-center">{data?data.academic_info.designation:<Skeleton height={20} width={100}/>}</td>
      <td className="text-center">{data?data.degree:<Skeleton height={20} width={100}/>}</td>
      <td className="text-center">{data?data.email:<Skeleton height={20} width={100}/>}</td>
      <td className="text-center">{data?data.phone_number:<Skeleton height={20} width={100}/>}</td>
      <td className="text-center">{data?data.academic_info.joined_at:<Skeleton height={20} width={100}/>}</td>
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