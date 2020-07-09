import React from 'react';
import IntlMessages from 'util/IntlMessages';

class Dashboard extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <div className="d-flex justify-content-center">
          <h1><IntlMessages id="pages.samplePage.description"/></h1>
        </div>

      </div>
    );
  }
}

export default Dashboard;