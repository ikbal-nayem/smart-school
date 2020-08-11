import React, {useState} from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Widget from "components/Widget/index";
import {aboutList} from 'app/routes/Class/routes/ClassDetails/data'
import AboutItem from "./AboutItem";


const About =()=> {

  const [value,setValue]=useState(0);

  const  handleChange = (event, value) => {
    setValue(value);
  };

    return (
      <Widget styleName="jr-card-full jr-card-tabs-right jr-card-profile animated slideInUp animation-delay-3 amimation-duration-3">
        <div className="card-header">
          <h4 className="card-title mb-0">About</h4>
        </div>
        <div className="jr-tabs-classic">
          <Tabs className="jr-tabs-up" value={value} onChange={handleChange}>
            <Tab className="jr-tabs-label" label="A"/>
            <Tab className="jr-tabs-label" label="B"/>
            <Tab className="jr-tabs-label" label="C"/>
          </Tabs>
          <div className="jr-tabs-content jr-task-list">
            <div className="row">
              {value === 0 && aboutList.map((about) => <div
                className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"><AboutItem data={about}/></div>)}
              {value === 1 && aboutList.map((about) => <div
                className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"><AboutItem data={about}/></div>)}
              {value === 2 && aboutList.map((about) => <div
                className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"><AboutItem data={about}/></div>)}
            </div>
          </div>
        </div>
      </Widget>
    );
  }


export default About;
