import React from "react";
import "./Intro.css";
import Floatingdiv from "../Floatingdiv/floating";
import github from "../../../img/github.png";
import LinkedIn from "../../../img/linkedin.png";
import Instagram from "../../../img/instagram.png";
import Vector1 from "../../../img/Vector1.png";
import Vector2 from "../../../img/Vector2.png";
import boy from "../../../img/boy.png";
import crown from "../../../img/crown.png";
import thumbup from "../../../img/thumbup.png";
import glassesimoji from "../../../img/glassesimoji.png";

const Intro = () => {
  return (
    <div className="intro" style={{ fontFamily: "Roboto" }}>
      <div className="i-left">
        <div className="i-name">
          <span style={{ fontSize: "4rem" }}>Hy! There</span>
          <span style={{ fontSize: "4rem" }}>Sajal</span>
          <span style={{ fontSize: "1rem" }}>
            Full Stack Highly motivated Developer <br /> always ready to learn
            new technologies
          </span>
        </div>
        <button
          className="button i-btn"
          style={{ fontFamily: "Noto sans", fontSize: "1rem" }}
        >
          Hire Me
        </button>
        <div className="i-icons">
          <img src={github} alt="" />
          <img src={LinkedIn} alt="" srcset="" />
          <img src={Instagram} alt="" srcset="" />
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" srcset="" />
        <img src={boy} alt="" srcset="" />
        <img src={glassesimoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <Floatingdiv image={crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <Floatingdiv image={thumbup} txt1="Best Design" txt2="Award" />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
