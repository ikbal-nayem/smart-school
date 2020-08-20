import React from 'react';
import IntlMessages from 'util/IntlMessages'
import {
  InputLabel,
  Select,
  FormControl,
  MenuItem
} from '@material-ui/core'

import { classList } from '../../../Class/routes/classes';
import { getStudent } from './action';
import TableHeader from './TableHeader';




const date = new Date()

class StudentTable extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      year: date.getFullYear(),
      Class: this.props.match.params.cls ? this.props.match.params.cls : 'all',
      data: [],
    }
  }

  componentDidMount = async ()=>{
    const data = await getStudent(this.state.year, this.state.Class)
    this.setState({data: data})
  }

  componentDidUpdate = async (prevProps, prevState)=>{
    if(prevState.year !== this.state.year || prevState.Class !== this.state.Class){
      const data = await getStudent(this.state.year, this.state.Class)
      this.setState({data: data})
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };


  render(){    return (
      <div className="jr-card">
        <div className="jr-card-header d-flex align-items-center mb-3">
          <h3 className="mb-0">
            <IntlMessages id="student"/>
            <span className="badge badge-primary">{this.state.year}</span>
          </h3>
          <div className="ml-auto">
                                  {/* class */}
            <FormControl className="mx-1">
              <InputLabel id="Class"><IntlMessages id="class"/></InputLabel>
              <Select labelId="Class" id="Class"
                value={this.state.Class}
                onChange={this.handleChange}
                inputProps={{name: 'Class'}}
              >
                <MenuItem value="all"><IntlMessages id="all"/></MenuItem>
                {
                  Object.entries(classList).map(([key, value])=>(
                    <MenuItem value={key}>{key}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
                                {/* year */}
            <FormControl className="mx-1">
              <InputLabel id="year"><IntlMessages id="year"/></InputLabel>
              <Select labelId="year" id="year"
                value={this.state.year}
                onChange={this.handleChange}
                inputProps={{name: "year"}}
              >
                <MenuItem value={2020}>2020</MenuItem>
                <MenuItem value={2019}>2019</MenuItem>
                <MenuItem value={2018}>2018</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <TableHeader data={this.state.data} />

      </div>
    );
  }
}


export default StudentTable;

