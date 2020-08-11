import React from "react";
import About from "components/ClassDetails/About";
import Routine from "components/ClassDetails/Routine";
import SubjectList from "components/ClassDetails/SubjectList";
import ExamActivity from "components/ClassDetails/ExamActivity";
import Students from "components/ClassDetails/Students";
import ProfileHeader from "components/ClassDetails/ProfileHeader";
import {friendList} from './data'


class Details extends React.Component{

	render(){
	  return (
	    <div className="app-wrapper">
	      <ProfileHeader/>
	      <div className="jr-profile-content">
	        <div className="row">
	          <div className="col-xl-8 col-lg-8 col-md-7 col-12">
	            <About/>
	            <Routine/>
	            <SubjectList/>
	          </div>
	          <div className="col-xl-4 col-lg-4 col-md-5 col-12">
	            <ExamActivity/>
	            <div className="row">
	              <div className="col-12">
	                <Students friendList={friendList}/>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
  	);
	}
};

export default Details;


