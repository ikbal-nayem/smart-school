import React from "react";

const ExamActivity = () => {
  return (
    <div className="jr-card animated slideInUp animation-delay-4 amimation-duration-3">
      <div className="jr-card-header d-flex align-items-start">
        <div className="mr-auto">
          <h3 className="card-heading">Exam Activities</h3>
          <p className="sub-heading">Last activity was 2 days ago</p>
        </div>
        <button className="MuiButtonBase-root MuiIconButton-root icon-btn text-dark" tabindex="0" type="button">
          <span className="MuiIconButton-label"><i className="zmdi zmdi-chevron-down"></i></span>
          <span className="MuiTouchRipple-root"></span>
        </button>
      </div>
      <hr className="bg-primary mt-2" />
      <div className="media social-list-line">
        <div className="MuiAvatar-root MuiAvatar-circle bg-primary z-index-20 size-40 align-item-self mr-3 MuiAvatar-colorDefault">
          <i className="zmdi zmdi-check text-white"></i>
        </div>
        <div className="media-body">
          <h5 className="mb-1">1st Semester</h5>
          <p className="mb-0">Description</p>
          <span className="meta-date meta-date-light">20 March, 2020</span>
        </div>
      </div>
      <div className="media social-list-line">
        <div className="MuiAvatar-root MuiAvatar-circle bg-warning z-index-20 size-40 align-item-self mr-3 MuiAvatar-colorDefault">
        <i className="zmdi zmdi-refresh-sync text-white"></i>
      </div>
      <div className="media-body">
        <h5 className="mb-1">2nd Semester</h5>
        <p className="mb-0">Description</p>
        <span className="meta-date meta-date-light">27 Septembar, 2020</span>
      </div>
    </div>
    <div className="media social-list-line">
      <div className="MuiAvatar-root MuiAvatar-circle bg-secondry z-index-20 size-40 align-item-self mr-3 MuiAvatar-colorDefault">
        <i className="zmdi zmdi-time text-white"></i>
      </div>
      <div className="media-body">
        <h5 className="mb-1">Final Semester</h5>
        <p className="mb-0">Description</p>
        <span className="meta-date meta-date-light">24 Novembar, 2020</span>
      </div>
    </div>
  </div>
  )
}

export default ExamActivity;
