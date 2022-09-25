import React from "react";
import "../styles/landing.css";
import cardimage from "../images/Movienight.jpeg";
import { MdOutlineWavingHand } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";

import { AiTwotoneCalendar } from "react-icons/ai";
import { GrLocationPin } from "react-icons/gr";

import { BsArrowRightShort } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";
import { MdOutlineCelebration } from "react-icons/md";
import { Link } from "react-router-dom";

function Landing() {
  //BEM naming convention
  return (
    <div className="landing">
      <div className="left">
        <div className="card">
          <div className="card-image">
            <img className="cardimage" src={cardimage} alt="movie night" />
          </div>
          <div className="card-details">
            <div className="section1">
              {/* heading */}
              <h1>Movie Night</h1>
              {/* aestricks lines */}
              <hr />

              {/* <div className="container-lines">
                <div className="lines">
                  <div className="cross"></div>
                </div>
              </div> */}
              {/* hosted by */}
            </div>
            <div className="section2">
              <div className="emoji">
                <MdOutlineWavingHand
                  style={{
                    height: "20px",
                    width: "30px",
                    marginLeft: "30px",
                    rotate: "270deg",
                  }}
                />
              </div>
              <div className="hostname">
                <p style={{ color: "gray" }}>
                  Hosted By <b style={{ color: "darkgray" }}>Elysia</b>
                </p>
              </div>
            </div>

            <div className="section3">
              <div className="responses">
                <p>
                  <b style={{ color: "#240D57" }}>14</b>{" "}
                  <b style={{ color: "#501FC1" }}>Responses</b>
                </p>
              </div>
              <div className="guests">
                <a href="#" style={{ color: "#8456EC" }}>
                  see guests
                </a>
              </div>
              <div className="invitebutton">
                <button
                  style={{
                    padding: "5px",
                    width: "100%",
                    backgroundColor: "#8456EC",
                    borderRadius: "5px",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  <FaRegHandshake style={{}} /> invite
                </button>
              </div>
            </div>

            {/* checklist  */}
            {/* section 4 */}
            <div className="section4">
              <div className="checkList">
                {/* list image  */}
                <div className="listimage">
                  <AiTwotoneCalendar />
                </div>
                {/* list detail  */}
                <div className="listdetail">
                  <p style={{ color: "#240D57" }}>18 August 6:00PM</p>
                  <p style={{ color: "#828282" }}>
                    to <b style={{ color: "#4F4F4F" }}>19 August 1:00PM </b>UTC
                    +10
                  </p>
                </div>

                {/* list icon  */}
                <div className="listicon">
                  <BsArrowRightShort />
                </div>
              </div>

              <div className="checkList">
                {/* list image  */}
                <div className="listimage">
                  <GrLocationPin />
                </div>
                {/* list detail  */}
                <div className="listdetail">
                  <p style={{ color: "#240D57" }}>Street name</p>
                  <p style={{ color: "#828282" }}>301 Rowes lane, WA, 7183</p>
                </div>

                {/* list icon  */}
                <div className="listicon">
                  <BsArrowRightShort />
                </div>
              </div>

              <div className="checkList">
                {/* list image  */}
                <div className="listimage">
                  <BsLink45Deg />
                </div>
                {/* list detail  */}
                <div className="listdetail">
                  <p style={{ color: "#240D57" }}>Street name</p>
                  <p style={{ color: "#828282" }}>301 Rowes lane, WA, 7183</p>
                </div>

                {/* list icon  */}
                <div className="listicon">
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <h1 className="imagine">Imagine if</h1>
        <h1 className="snapchat">Snapchat</h1>
        <h1 className="events imagine">had events.</h1>

        <Link to="/create">
          <button className="creat" oncl>
            <MdOutlineCelebration /> Create my event
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
