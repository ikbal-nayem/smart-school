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



function createData(username, name, thumb, roll, Class, section, group, shift) {
  return {username, name, thumb, roll, Class, section, group, shift};
}

const oldData = [
  createData('ik', 'Alex Dolgove', "https://via.placeholder.com/150x150", '4', 'ii', 'A', 'Commerce', 'Morning'),
  createData('df', 'Domnic Brown', "https://via.placeholder.com/150x150", '28', 'vii', 'B', null, 'Day'),
  createData('sd', 'Garry Sobars', "https://via.placeholder.com/150x150", '5', 'ix', 'A', 'Arts', 'Morning'),
  createData('ks', 'Stella Johnson', "https://via.placeholder.com/150x150", '23', 'x', 'B', 'Science', 'Day'),
];
const newData = [
  createData('ik', 'New 1', "https://via.placeholder.com/150x150", '4', 'ii', 'A', 'Commerce', 'Morning'),
  createData('df', 'New 2', "https://via.placeholder.com/150x150", '28', 'vii', 'B', null, 'Day'),
  createData('sd', 'New 3', "https://via.placeholder.com/150x150", '5', 'ix', 'A', 'Arts', 'Morning'),
  createData('hs', 'New 4', "https://via.placeholder.com/150x150", '23', 'x', 'B', 'Science', 'Day'),
  createData('ls', 'New 5', "https://via.placeholder.com/150x150", '23', 'x', 'B', 'Science', 'Day'),
  createData('js', 'New 6', "https://via.placeholder.com/150x150", '23', 'x', 'B', 'Science', 'Day'),
];


const StudentTable = ()=> {

  const date = new Date()
  const classes = useStyles();
  const [year, setYear] = useState(date.getFullYear());
  const [Class, setClass] = useState('all');
  const [data, setData] = useState(oldData)

  const handleYear = (event) => {
    setYear(event.target.value);
    data === oldData ? setData(newData) : setData(oldData)
  };
  const handleClass = (event) => {
    setClass(event.target.value);
  };


  return (
    <div className="jr-card">
      <div className="jr-card-header d-flex align-items-center mb-3">
        <h3 className="mb-0">
          <IntlMessages id="student"/>
          <span class="badge badge-light badge-pill">{year}</span>
        </h3>
        <div className="ml-auto">
                                {/* class */}
          <FormControl className={classes.formControl}>
            <InputLabel id="select-outlined"><IntlMessages id="class"/></InputLabel>
            <Select labelId="select-outlined" id="select-outlined"
              value={Class}
              onChange={handleClass}
            >
              <MenuItem value="all"><IntlMessages id="all"/></MenuItem>
              <MenuItem value='i'><IntlMessages id="class.one"/></MenuItem>
              <MenuItem value='ii'><IntlMessages id="class.two"/></MenuItem>
              <MenuItem value='iii'><IntlMessages id="class.three"/></MenuItem>
              <MenuItem value='iv'><IntlMessages id="class.four"/></MenuItem>
              <MenuItem value='v'><IntlMessages id="class.five"/></MenuItem>
              <MenuItem value='vi'><IntlMessages id="class.six"/></MenuItem>
              <MenuItem value='vii'><IntlMessages id="class.seven"/></MenuItem>
              <MenuItem value='viii'><IntlMessages id="class.eight"/></MenuItem>
              <MenuItem value='ix'><IntlMessages id="class.nine"/></MenuItem>
              <MenuItem value='x'><IntlMessages id="class.ten"/></MenuItem>
            </Select>
          </FormControl>
                              {/* year */}
          <FormControl className={classes.formControl}>
            <InputLabel id="select-outlined"><IntlMessages id="year"/></InputLabel>
            <Select labelId="select-outlined" id="select-outlined"
              value={year}
              onChange={handleYear}
            >
              <MenuItem value="all"><IntlMessages id="all"/></MenuItem>
              <MenuItem value={2020}>2020</MenuItem>
              <MenuItem value={2019}>2019</MenuItem>
              <MenuItem value={2018}>2018</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <TableHeader data={data} />

    </div>
  );
}


export default StudentTable;


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  }
}));
