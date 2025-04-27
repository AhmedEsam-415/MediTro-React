import React from "react";
import doctor from "../../assets/Image/doctor.7c2bc96d67d.png";
import "./home.css";
const Home = () => {
  return (
    <header className="container">
      <div className="row">
        <div className="col-md-6 col-lg-6 info">
          <h5>We Provide All Health Care Solution</h5>
          <h2>Protect Your Health And Take Care To Of Your Health</h2>
          <button>
            <a href="#">Read More</a>
          </button>
        </div>
        <div className="col-md-6 col-lg-6 image">
          <img src={doctor} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Home;
