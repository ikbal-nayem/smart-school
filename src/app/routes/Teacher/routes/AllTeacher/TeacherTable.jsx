import React, {useState} from 'react';
import IntlMessages from 'util/IntlMessages'
import { makeStyles } from '@material-ui/core/styles';
import {
  InputLabel,
  Select,
  FormControl,
  MenuItem
} from '@material-ui/core'

import TableHeader from './TableHeader';



function createData(username, name, thumb, degree, designation, joining_date, email, phone_number) {
  return {username, name, thumb, degree, designation, joining_date, email, phone_number};
}

const data = [
  createData('ik', 'Teacher 1', "https://via.placeholder.com/150x150", 'BSC', 'VC', '21-06-2020', 'abc@email.com', '123456789'),
  createData('df', 'Teacher 2', "https://via.placeholder.com/150x150", 'BSC', 'Teacher', '21-06-2020', 'abc@email.com', '123456789'),
  createData('sd', 'Teacher 3', "https://via.placeholder.com/150x150", 'BSC', 'Teacher', '21-06-2020', 'abc@email.com', '123456789'),
  createData('jd', 'Teacher 4', "https://via.placeholder.com/150x150", 'BSC', 'Principal', '21-06-2020', 'abc@email.com', '123456789'),
  createData('mn', 'Teacher 5', "https://via.placeholder.com/150x150", 'BSC', 'Teacher', '21-06-2020', 'abc@email.com', '123456789'),
  createData('ks', 'Teacher 6', "https://via.placeholder.com/150x150", 'BSC', 'Teacher','21-06-2020', 'abc@email.com', '123456789'),
];


const TeacherTable = ()=> {

  const classes = useStyles();
  const [status, setStatus] = useState('present');

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };


  return (
    <div className="jr-card">
      <div className="jr-card-header d-flex align-items-center mb-3">
        <h3 className="mb-0"><IntlMessages id="teacher"/></h3>
        <div className="ml-auto">

                              {/* Status */}
          <FormControl className={classes.formControl}>
            <InputLabel id="select-outlined"><IntlMessages id="status"/></InputLabel>
            <Select labelId="select-outlined" id="select-outlined"
              value={status}
              onChange={handleStatus}
            >
              <MenuItem value="all"><IntlMessages id="all"/></MenuItem>
              <MenuItem value="present"><IntlMessages id="recent"/></MenuItem>
              <MenuItem value="quit"><IntlMessages id="quit"/></MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <TableHeader data={data} />

    </div>
  );
}


export default TeacherTable;


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1)
  }
}));
