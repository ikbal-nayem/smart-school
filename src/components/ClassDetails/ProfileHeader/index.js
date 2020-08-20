import React from "react";
import {Typography} from '@material-ui/core';

const ProfileHeader = (props) => {
  return (
    <div className="animated zoomInDown animation-duration-3">
      <div className="jr-profile-banner bg-gradient-primary">
        <div className="jr-profile-container">
          <div className="jr-profile-banner-top mb-md-3">
            <div className="jr-profile-banner-top-left">
              <Typography variant="h2" className="ml-md-5 scale-12"><b>viii</b></Typography>
            </div>
            <div className="jr-profile-banner-top-right">
              <ul className="jr-follower-list">
                <li>
                  <span className="jr-follower-title jr-fs-lg jr-font-weight-medium">150</span>
                  <span className="jr-fs-sm">Students</span></li>
                <li>
                  <span className="jr-follower-title jr-fs-lg jr-font-weight-medium">9</span>
                  <span className="jr-fs-sm">Sections</span></li>
                <li>
                  <span className="jr-follower-title jr-fs-lg jr-font-weight-medium">2</span>
                  <span className="jr-fs-sm">Shifts</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="jr-profile-banner-bottom">
            <div className="jr-tab-list">
              <ul className="jr-navbar-nav">
                <li>
                  <span className="jr-link">Scince</span>
                </li>
                <li>
                  <span className="jr-link">Arts</span>
                </li>
                <li>
                  <span className="jr-link">Commerce</span>
                </li>
              </ul>
            </div>
            <div className="ml-auto">
              <span className="jr-link d-inline-flex align-middle mr-2 jr-ml-sm-0">Morning</span>
              <span className="jr-link d-inline-flex align-middle mr-2 jr-ml-sm-0">Day</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader;

