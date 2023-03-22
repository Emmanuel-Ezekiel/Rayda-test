import React from "react";
import "../../styles/profile.scss";
import { FiThumbsUp } from "react-icons/fi";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__container">
        <div className="bio">
          <img src="/bio-image.svg" alt="" />
        </div>
        <div className="profile-details">
          <div className="box">
            <div className="avatar">
              <img src="/Content.svg" alt="" />
            </div>

            <div className="content">
              <div className="heading">
                <div className="text">
                  <h2>Starts in: 3 days : 2 hours : 24 minutes </h2>
                  <div className="status">
                    <div className="badge">
                      <div className="dot"></div>
                      <p>Not Live</p>
                    </div>
                    <p>Layers Auction</p>
                  </div>
                </div>

                <button>
                  {" "}
                  <FiThumbsUp width={20} height={20} /> Accept Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
