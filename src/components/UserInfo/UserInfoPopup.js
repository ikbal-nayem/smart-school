import React from 'react';
import IntlMessages from 'util/IntlMessages';

const UserInfoPopup = () => {

  return (
    <div>
      <div className="user-profile">
        <img className="user-avatar border-0 size-40 rounded-circle"
             src={"https://via.placeholder.com/150x150"}
             alt="User"/>
        <div className="user-detail ml-2">
          <h4 className="user-name mb-0">Chris Harris</h4>
          <small>Administrator</small>
        </div>
      </div>
      <span className="jr-link dropdown-item text-muted">
          <i className="zmdi zmdi-face zmdi-hc-fw mr-1"/>
          <IntlMessages id="popup.profile"/>
        </span>
      <span className="jr-link dropdown-item text-muted">
          <i className="zmdi zmdi-settings zmdi-hc-fw mr-1"/>
          <IntlMessages id="popup.setting"/>
        </span>
    </div>
  );
};

export default UserInfoPopup;

