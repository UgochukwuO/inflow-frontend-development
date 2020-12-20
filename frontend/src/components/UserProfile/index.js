import React from 'react';
import './styles.scss';
import userIMG from './../../assets/user.png';

const UserProfile = props => {

  return (
    <div className="userProfile">
      <ul>
        <li>
          <div className="img">
            <img src={userIMG} />
          </div>
        </li>
        <li>
          <span className="displayName">
          </span>
        </li>
      </ul>
    </div>
  );
}

export default UserProfile;