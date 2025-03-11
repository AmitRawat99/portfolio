import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import '../styles/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBars, faXmark, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



// Slider images
import slider1 from '../assets/Images/amit-slider-1.png';
import slider2 from '../assets/Images/amit-slider-2.png';

function Header() {
  const [backgroundImage, setBackgroundImage] = useState(slider1);
  const sliderImages = [slider1, slider2];

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setBackgroundImage(sliderImages[index]);
      index = (index + 1) % sliderImages.length;
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [bars, setBars] = useState(false);
  function ToggleBar() {
    setBars(!bars);
  }


  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode')
    }
    else {
      document.body.classList.remove('dark-mode')
    }
  }, [isDarkMode])



  return (
    <header>
      <div className="container-fluid" id="container-fluid">
        <div className="container">
          <div className="header-container">
            <div className="header-logo">
              <h1>
                <a href="index.html">
                  <h5>A</h5>
                </a>
                MIT RWT
              </h1>
            </div>
            <div className="ul-item">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                <FontAwesomeIcon
                  id="faBarsIcon"
                  onClick={ToggleBar}
                  icon={bars ? faXmark : faBars}
                />
              </label>
              <ul className={`liList ${bars ? 'show menu' : ''}`}>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Education">Education</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
                <FontAwesomeIcon
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={isDarkMode ? "FaMoon dark" : "FaMoon light"}
                  icon={isDarkMode ? faSun : faMoon}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="slider-container">
        <div className="header-slider" id='Home'>
          <div className="header-slider-content">
            <h3>Front End Devloper</h3>
            <p>Welcome to my  portfolio! I am <span className='UserName'>Amit Rawat</span> a Front-End Developer currently working at Torus Infotech. I live in Uttam Nagar, Delhi, but I am originally from Uttarakhand. With experience in HTML, CSS, JavaScript, Bootstrap, and React.js, I specialize in creating creative, responsive, and user-friendly web designs. At Torus Infotech, I have worked on a variety of projects, including personal blogs, business websites, and e-commerce platforms, while also learning how to maintain and optimize websites for better performance.</p>
            <div className="social-icons">
              <h2>Follow Me : </h2>
              {/* Social Media Icons */}
              <a href="https://call.whatsapp.com/video/v1iZQwXjnPuSOv9zIw7QoJ" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="font-icon" icon={faWhatsapp} size="2x" />
              </a>
              <a href="mailto:amitrawat789599@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="font-icon" icon={faEnvelope} size="2x" />
              </a>

              <a href="https://github.com/AmitRawat99" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="font-icon" icon={faLinkedinIn} size="2x" />
              </a>

              <a href="https://www.instagram.com/invites/contact/?i=qyc9rqt88th0&utm_content=me55lxv " target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="font-icon" icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
          <div className="header-slider-images">
            <img src={backgroundImage} alt="Slider" className="slider-image" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
