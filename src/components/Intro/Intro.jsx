import React, { useEffect, useRef } from "react";
import "./intro.scss";
import {
  CodepenCircleFilled,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterCircleFilled,
} from "@ant-design/icons";
import "font-awesome/css/font-awesome.min.css";
import { init } from "ityped";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: [
        "Frontend Development",
        "Backend Development",
        "Software Development",
      ],
    });
  },[]);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="service-details">
          <img src="asset/Dipali (2).jpeg" alt="realm" />
          <div className="service-hover-text">
            <h3>Jane Doe</h3>
            <h4>Developer</h4>
            <p>
              Nulla rhoncus orci sed odio euismod vestibulum. Praesent porta
              aliquet nulla, ut mattis velit rhoncus eu duspendisse nibh orci
              laoreet.{" "}
            </p>
          </div>
          <div className="service-white service-text">
            <p>Dipali Gupta</p>
            <a href="#"></a>
            <div className="social-container">
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-codepen"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There,</h2>
          <h1>
            {" "}
            I'm <span className="name">Dipali Gupta</span>
          </h1>
          <h3>
            I am into <span ref={textRef}></span>
          </h3>
        </div>
        <a className="down" href="#portfolio">
          <img className="down-image" src="asset/down.png" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
