import React from 'react';

import WeeklyChart from './week-chart';
import SubjectList from './subject';
import DateView from './date-view';
import ClassSchedule from './schedule'


const SubjectInfo = () =>{
  return(
    <div>

      <div className="jr-card p-2 mb-2">
        <div className="row m-0">
          <div className="col-lg-4 col-md-4 col-12">
            <DateView />
          </div>
          <div className="col-lg-8 col-md-8 col-12">
            <ClassSchedule />
          </div>
        </div>
      </div>

      <WeeklyChart />
      
      <div className="row m-0">
        <div className="col-lg-6 col-md-6 col-12 p-0">
          <SubjectList />
        </div>
      </div>

    </div>
  )
}


export default SubjectInfo;