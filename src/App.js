import React, { useEffect, useState } from "react";
import "./App.css";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "./assets/profileimage.png";
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {

  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if(!isChecked){
      document.getElementById("home-body").classList.add("light-theme");
    }
    else{
      document.getElementById("home-body").classList.remove("light-theme");
    }
  };

  function goToBrand(){
    navigate('/brand');
  }
  function goToCase(){
    navigate('/case');
  }
  function goToExperience(){
    navigate('/experience');
  }
  function goToPassion(){
    navigate('/passion');
  }
  function goToPosters(){
    navigate('/posters');
  }

  return (
    <>
      <body id="home-body" className="">
        <div className="pivot-point"></div>
        <div className="navigation">
          <div className="horizontal-gutter"></div>
          <div className="head-box">
            <div className="box name">RITIKA SAHANI</div>
            <div className="box">
              <label className="switchx">
                <input id="switch" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                <span className="sliderx"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="initial-slide">
          <div className="horizontal-gutter"></div>
          <div className="row g-0 text-center colorsx2">
            <div className="col-sm-6 col-md">
              <div className="left-colx">
                <img className="profile-image" src={logo} alt="not found" />
                <div className="qualities qual1">ENERGETIC</div>
                <div className="qualities qual2">CREATIVE</div>
                <div className="qualities qual3">DETAIL ORIENTED</div>
                <div className="qualities qual4">FAST LEARNER</div>
              </div>
            </div>
            <div className="col-sm-6 col-md colorsx1">
              <div className="horizontal-gutter"></div>
              <div className="right-colx">
                <div>
                  <h1 className="right-elements right-head hollow-bold">UI / UX</h1>
                  <h3 className="right-elements right-sub-head">DESIGNER</h3>
                </div>
                <h4 className="right-elements right-body thin">As a UI/UX designer, I craft intuitive digital experiences, merging user-centered design with collaborative innovation. Expert in research, wireframes, prototypes, 3D softwares and usability testing, I ensure optimal user satisfaction, aligning with business objectives.</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="pivot-point slide index-slide">
          <div className="block">
            <div className="index-item" onClick={goToBrand}>
              <div className="index-red hollow-bold">BRAND</div>
              <div className="index-red">IDENTITY</div>
              <div className="bottom-text-group">
                <div className="check-it-out">CHECK IT OUT</div>
                <div className="right-arrow"> &larr;</div>
              </div>
            </div>
            <div className="vertical-rule" data-aos="fade-up"></div>
            <div className="index-item" onClick={goToCase}>
              <div className="index-red hollow-bold">CASE</div>
              <div className="index-red">STUDY</div>
              <div className="bottom-text-group">
                <div className="check-it-out">CHECK IT OUT</div>
                <div className="right-arrow"> &larr;</div>
              </div>
            </div>
            {/* <div className="vertical-rule" data-aos="fade-up"></div>
            <div className="index-item" onClick={goToPosters}>
              <div className="index-red single-line-index">POSTERS</div>
              <div className="bottom-text-group">
                <div className="check-it-out">CHECK IT OUT</div>
                <div className="right-arrow"> &larr;</div>
              </div>
            </div> */}
            <div className="vertical-rule" data-aos="fade-up"></div>
            <div className="index-item" onClick={goToPassion}>
              <div className="index-red hollow-bold">PASSION</div>
              <div className="index-red">PROJECT</div>
              <div className="bottom-text-group">
                <div className="check-it-out">CHECK IT OUT</div>
                <div className="right-arrow"> &larr;</div>
              </div>
            </div>
            <div className="vertical-rule" data-aos="fade-up"></div>
            <div className="index-item" onClick={goToExperience}>
              <div className="index-red single-line-index">EXPERIENCE</div>
              <div className="bottom-text-group">
                <div className="check-it-out">CHECK IT OUT</div>
                <div className="right-arrow"> &larr;</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer pivot-point">
          <div className="footer-content">
            <div className="footer-red">
              <div className="hollow-bold want-to">WANT TO </div>
              <div className="collab">COLLABORATE?</div>
            </div>
            <div className="footer-context thin">Hit me up at <a href="mailto:ritika.sahani0423@gmail.com?">ritika.sahani0423@gmail.com</a> and let’s work on new design adventures together!</div>
          </div>
        </div>
      </body>
    </>
  )
}

export default App;