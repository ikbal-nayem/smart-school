import React from "react";
import Auxiliary from "util/Auxiliary";


const AboutItem = ({data}) => {
  const {title, icon, desc} = data;
  return (
    <Auxiliary>
      <div className="media flex-nowrap mt-3 mt-lg-4 mb-2">
        <div className="mr-3">
          <i className={`zmdi zmdi-${icon} jr-fs-xlxl text-primary`}/>
        </div>
        <div className="media-body">
          <h6 className="mb-1 text-grey">{title}</h6>
          {desc === '' ? null : <p className="mb-0">{desc}</p>}
        </div>
      </div>
    </Auxiliary>
  );
};

export default AboutItem;
