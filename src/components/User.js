import React, {useState, useEffect} from 'react'

import './User.css';
import axios from './axios';

function User({ fetchUserUrl, fetchUrl }) {
  ////User State
  const [user,setUser]= useState([])
  const [logs, setLogs] = useState([]);


  useEffect(() => {
  //// Fetch user profile
    async function fetchUser() {
      const userRequest = await axios.get(fetchUserUrl);
      setUser(userRequest.data);
    }
  //// Fetch project logs

    fetchUser();
    async function fetchLogs() {
      const logsRequest = await axios.get(fetchUrl);
      setLogs(logsRequest.data);
    }
    fetchLogs();
  }, [fetchUserUrl, fetchUrl]);
  ////

  //// The date in table header
  const time = logs.map((log, index) => {
     const milliseconds = log[0] * 1000;
     const dateObject = new Date(milliseconds);
     const humanDateFormat = dateObject.toLocaleDateString("ro-US");
    return <th key={index}> {humanDateFormat} </th>;
  });
  ////

  return (
    <div className="user">
      <table>
        <thead className="user-table-head">
          <tr>
            <th></th>
            {time}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="user-block">
                <div className="user-img">
                  <img src={user.avatar_url} alt="" />
                </div>
                <div className="user-name">{user.name}</div>
              </div>
            </td>
            {logs.map((log, index) => {
              if (log[1] > 0)
                return (
                  <td key={index}>
                    <div className="user-table-detail">+{log[1]}</div>
                  </td>
                );
              else
                return (
                  <td key={index}>
                    <div className="user-table-detail-none">{log[1]}</div>
                  </td>
                );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default User;