import React from "react";
import "./home.css";
import doctor from "../../assets/Image/doctor.7c2bc96d67d.png";
import plus from "../../assets/Image/plus.png";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 info">
            <h5>We Provide All Health Care Solution</h5>
            <h2>Protect Your Health And Take Care To Of Your Health</h2>
            <button>
              <a href="#">Read More</a>
            </button>
            <span>
              <img src={plus} alt="" />
            </span>
          </div>
          <div className="col-md-6 col-lg-6 image">
            <img src={doctor} alt="" />
            <FontAwesomeIcon icon={faSquare} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
