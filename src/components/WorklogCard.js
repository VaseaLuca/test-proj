import React from 'react'

import requests from './requests';

import User from './User';
import './WorklogCard.css';

function WorklogCard() {
  return (
    <div className="worklog-card">
      <div className="worklog-card-nav">
        <div className="worklog-card-item-dashboard">Dashboard</div>
        <div className="worklog-card-item">Work Log</div>
      </div>
      <hr />
      <div className="worklog-card-user">
        <User
          fetchUserUrl={requests.userInfoRequests}
          fetchUrl={requests.logsForLandingPage}
        />
        <hr />
        <User
          fetchUserUrl={requests.userInfoRequests}
          fetchUrl={requests.logsForBarberPage}
        />
        <hr />
        <User
          fetchUserUrl={requests.userInfoRequests}
          fetchUrl={requests.logsForLandingPage}
        />
        <hr />
        <User
          fetchUserUrl={requests.userInfoRequests}
          fetchUrl={requests.logsForBarberPage}
        />
      </div>
      <hr />
    </div>
  );
}

export default WorklogCard
