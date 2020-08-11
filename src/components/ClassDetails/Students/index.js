import React from "react";
import { Link } from "react-router-dom";
import Widget from "../../Widget/index";


const Students = ({friendList}) => {
  return (
    <Widget styleName="jr-card-profile-sm animated slideInUp animation-delay-5 amimation-duration-3"
            title={<span>Students - 150</span>}
    >
      <div className="pt-2">
        <ul className="jr-fnd-list mb-0">
          {friendList.map((user, index) =>
            <li className="mb-2" key={index}>
              <div className="jr-user-fnd">
                <img alt="..." src={user.image}/>
                <div className="jr-user-fnd-content">
                  <h6>{user.name}</h6>
                </div>
              </div>
            </li>
          )
          }
        </ul>
      </div>
      <span className="text-primary jr-fs-md pointer jr-d-block text-right">
        <Link to="/student/all" className="link">
          See All &nbsp;
          <i className={`zmdi zmdi-long-arrow-right jr-fs-xxl ml-2 d-inline-flex align-middle`}/>
        </Link>
      </span>
    </Widget>
  )
};
export default Students;
