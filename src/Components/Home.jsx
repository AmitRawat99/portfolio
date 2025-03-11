import React from 'react'
import '../styles/Home.scss'
import '../styles/responsive.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faEnvelope, faLocation, faScroll, faStopCircle, faAngleUp, faMobile, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import webDevelopment from '../assets/Images/web-devlopment.png'
import Design from '../assets/Images/Design.png'
import WebsiteMaintenance from '../assets/Images/websiteMaintenance.png'
import Responsive from '../assets/Images/responsive.png'
import Header from './Header';

import html from '../assets/Images/html.png'
import css from '../assets/Images/css.png'
import bootstrap from '../assets/Images/boostrap.png'
import JavaScript from '../assets/Images/js.png'
import React_js from '../assets/Images/React-js.png'
import Tailwind from '../assets/Images/tailwind_css.webp'
import Github from '../assets/Images/git.png'
import Figma from '../assets/Images/figma.png'

// images templates 

import website1 from '../assets/Template-Images/headerImage.jpg'
import website2 from '../assets/Template-Images/tour-07.jpg'
import website3 from '../assets/Template-Images/testing-lab.png'
import website4 from '../assets/Template-Images/Electricals.png'
import website5 from '../assets/Template-Images/doctors.png'
import website6 from '../assets/Template-Images/news.png'

import themeImage1 from '../assets/Template-Images/calcluctor.png'
import themeImage2 from '../assets/Template-Images/stone.png'
import themeImage3 from '../assets/Template-Images/tic tac.png'
import themeImage4 from '../assets/Template-Images/search-engine.png'
import themeImage5 from '../assets/Template-Images/notebook.png'
import themeImage6 from '../assets/Template-Images/weather.png'


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// live website 

import websiteLive from '../assets/Template-Images/testingLive.png'
import websiteLive1 from '../assets/Template-Images/travelLive.png'

function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [activeButton, setActiveButton] = useState('Templates')
  const [slideWidth, setSlideWidth] = useState(100);

  const educationCards = [
    { title: "High School", school: "G.I.C Bachhelikhal (Tehri Garhwal)", percentage: "69%" },
    { title: "Intermediate School", school: "G.I.C Bachhelikhal (Tehri Garhwal)", percentage: "70%" },
    { title: "Graduation", school: "Lalit Mohan Sharma University (Rishikesh)", percentage: "Pursuing" }
  ];

  const clonedCards = [...educationCards, ...educationCards];



  useEffect(() => {
    const updateSlider = () => {
      setSlideWidth(window.innerWidth <= 767 ? 100 : 50);
    }
    updateSlider()
    window.addEventListener('resize', updateSlider)

    return () => window.removeEventListener('resize', updateSlider);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      slideNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const slideNext = () => {
    if (isSliding) return; // Prevent spamming clicks or auto-slide
    setIsSliding(true);
    setCurrentIndex((prevIndex) => prevIndex + 1) % educationCards.length;
    setTimeout(() => {
      setIsSliding(true)
    }, 500)
    // setTimeout(() => {
    //   if (currentIndex === educationCards.length) {
    //     setIsSliding(false);
    //     setCurrentIndex(0);
    //   } else {
    //     setIsSliding(false);
    //   }
    // }, 500);
  };




  function BtnClick(category) {
    setActiveButton(category)
  }

  let websiteCards = {
    "Templates": {
      FirstCard: {
        websiteImg: themeImage6,
        webLink: "https://weather-navy-mu.vercel.app/",
        websiteTitle: 'Weather',
        websiteParagraph: 'Explore a dynamic portfolio showcasing my skills in React, highlighting projects, and demonstrating expertise in building user-friendly web applications.',
        websiteDesktop: faDesktop,
        websiteGithub: faGithub,
        websiteDesktopDemo: 'Demo',
        websiteGithubCode: 'Code'
      },
      twoCard: {
        websiteImg: themeImage3,
        webLink: "https://tic-tac-opal.vercel.app/",
        websiteTitle: 'Tic Tac ',
        websiteParagraph: 'Explore a dynamic portfolio showcasing my skills in React, highlighting projects, and demonstrating expertise in building user-friendly web applications.',
        websiteDesktop: faDesktop,
        websiteGithub: faGithub,
        websiteDesktopDemo: 'Demo',
        websiteGithubCode: 'Code'
      },
      thirdCard: {
        websiteImg: themeImage5,
        webLink: "https://to-do-list-rq5c.vercel.app/",
        websiteTitle: 'To Do List',
        websiteParagraph: 'Explore a dynamic portfolio showcasing my skills in React, highlighting projects, and demonstrating expertise in building user-friendly web applications.',
        websiteDesktop: faDesktop,
        websiteGithub: faGithub,
        websiteDesktopDemo: 'Demo',
        websiteGithubCode: 'Code'
      },
      forthCard: {
        websiteImg: themeImage1,
        webLink: "https://calculator-pmua.vercel.app/",
        websiteTitle: 'Calcluctor',
        websiteParagraph: 'Explore a dynamic portfolio showcasing my skills in React, highlighting projects, and demonstrating expertise in building user-friendly web applications.',
        websiteDesktop: faDesktop,
        websiteGithub: faGithub,
        websiteDesktopDemo: 'Demo',
        websiteGithubCode: 'Code'
      },
      fifthCard: {
        websiteImg: themeImage2,
        webLink: "https://stone-paper-sigma.vercel.app/",
        websiteTitle: 'Stone Paper Cisor',
        websiteParagraph: 'Explore a dynamic portfolio showcasing my skills in React, highlighting projects, and demonstrating expertise in building user-friendly web applications.',
        websiteDesktop: faDesktop,
        websiteGithub: faGithub,
        websiteDesktopDemo: 'Demo',
        websiteGithubCode: 'Code'
      },
      sixCard: {
        websiteImg: themeImage4,
        websiteTitle: 'Search Engine',
        webLink: "https://search-bar-coral-five.vercel.app/",
        websiteParagraph: 'Explore a dynamic portfolio showcasing my skills in React, highlighting projects, and demonstrating expertise in building user-friendly web applications.',
        websiteDesktop: faDesktop,
        websiteGithub: faGithub,
        websiteDesktopDemo: 'Demo',
        websiteGithubCode: 'Code'
      }
    },
    "Websites": {
      FirstCard: {
        websiteImg: website1,
        websiteTitle: 'Bistro',
        webLink: "https://besto-f2yn.vercel.app/",
        websiteParagraph: 'Explore a dynamic portfolio showcasing my skills in React, highlighting projects, and demonstrating expertise in building user-friendly web applications.',
        websiteDesktop: faDesktop,
        websiteGithub: faGithub,
        websiteDesktopDemo: 'Demo',
        websiteGithubCode: 'Code'
      },
      twoCard: {
        websiteImg: website2,
        websiteTitle: 'Europe Journey',
        webLink : 'https://europe-journey.vercel.app/',
        websiteParagraph: 'Explore a dynamic portfolio showcasing my skills in React, highlighting projects, and demonstrating expertise in building user-friendly web applications.',
        websiteDesktop: faDesktop,
        websiteGithub: faGithub,
        websiteDesktopDemo: 'Demo',
        websiteGithubCode: 'Code'
      },
      thirdCard: {
        websiteImg: website3,
        webLink: "https://amco-myportfolio909.vercel.app/",
        websiteTitle: 'AMCO',
        websiteParagraph: 'Explore a dynamic portfolio showcasing my skills in React, highlighting projects, and demonstrating expertise in building user-friendly web applications.',
        websiteDesktop: faDesktop,
        websiteGithub: faGithub,
        websiteDesktopDemo: 'Demo',
        websiteGithubCode: 'Code'
      },
      forthCard: {
        websiteImg: website4,
        websiteTitle: 'Electricals',
        webLink: 'https://electronic-tau.vercel.app/',
        websiteParagraph: 'Explore a dynamic portfolio showcasing my skills in React, highlighting projects, and demonstrating expertise in building user-friendly web applications.',
        websiteDesktop: faDesktop,
        websiteGithub: faGithub,
        websiteDesktopDemo: 'Demo',
        websiteGithubCode: 'Code'
      },
      fifthCard: {
        websiteImg: website5,
        webLink: 'https://doctor-urmt.vercel.app/',
        websiteTitle: 'Doctor',
        websiteParagraph: 'Explore a dynamic portfolio showcasing my skills in React, highlighting projects, and demonstrating expertise in building user-friendly web applications..',
        websiteDesktop: faDesktop,
        websiteGithub: faGithub,
        websiteDesktopDemo: 'Demo',
        websiteGithubCode: 'Code'
      },
      sixCard: {
        websiteImg: website6,
        websiteTitle: 'News',
        webLink : 'https://europe-journey.vercel.app/',
        websiteParagraph: 'Explore a dynamic portfolio showcasing my skills in React, highlighting projects, and demonstrating expertise in building user-friendly web applications..',
        websiteDesktop: faDesktop,
        websiteGithub: faGithub,
        websiteDesktopDemo: 'Demo',
        websiteGithubCode: 'Code'
      }
    },
    "Live Websites": {
      FirstCard: {
        websiteImg: websiteLive,
        webLink : 'https://ohmlaboratory.com/',
        websiteTitle: 'OHM Laboratory',
        websiteParagraph: 'OHM Laboratories Pvt. Ltd is an organization which provides Analytical testing services, trainings, R&D Projects as well as Consultancy with modern technology..',
        websiteDesktop: faDesktop,
        websiteGithub: faGithub,
        websiteDesktopDemo: 'Demo',
        websiteGithubCode: 'Code'
      },
      twoCard: {
        websiteImg: websiteLive1,
        webLink : 'https://europejourneydmc.com/',
        websiteTitle: 'Europe Journey ',
        websiteParagraph: 'Europe Journey DMC has been a leader in the B2B travel industry for more than 05 years thanks to its unwavering commitment to the field.. ',
        websiteDesktop: faDesktop,
        websiteGithub: faGithub,
        websiteDesktopDemo: 'Demo',
        websiteGithubCode: 'Code'
      },
      thirdCard: {
        websiteImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYeXoPJvCJcPL4MhitJzrSvJUSVxz5femYtw&s',
        websiteTitle: 'Sbthpl',
        webLink : 'https://sbthpl.com/',
        websiteParagraph: 'Shree Balaji Test House Pvt. Ltd. Offering analysis & testing services like cement analysis service, cement testing service, coarse analysis service, marbles testing service, concrete analysis service..',
        websiteDesktop: faDesktop,
        websiteGithub: faGithub,
        websiteDesktopDemo: 'Demo',
        websiteGithubCode: 'Code'
      },
    },
  };

  let skillCards = {
    webDesign: {
      cardIcon: Design,
      cardTitle: 'Web Designing',
      cardParagraph: 'Leveraging advanced design skills to create visually appealing and user-friendly interfaces that captivate users and reflect the essence of your brand',
    },
    webDevelopment: {
      cardIcon: webDevelopment,
      cardTitle: 'Web Development',
      cardParagraph: 'Applying comprehensive development skills to build robust and scalable digital platforms, ensuring that your brand’s vision is effectively translated into functional, high-performing websites',
    },
    responsiveDesign: {
      cardIcon: Responsive,
      cardTitle: 'Responsive Design',
      cardParagraph: 'Utilizing expertise in responsive design to create adaptable and seamless user experiences across all devices, ensuring your website is accessible and engaging for every visitor',
    },
    websiteMaintenance: {
      cardIcon: WebsiteMaintenance,
      cardTitle: 'Website Maintenance',
      cardParagraph: 'Providing skillful maintenance and updates to keep websites secure, up-to-date, and performing optimally, helping to sustain long-term success and growth for your online presence',
    },
  }

  let skill = {
    html: {
      skillImage: html,
      skillTitle: 'HTML',
      skillExpert: 'Expert',
    },
    css: {
      skillImage: css,
      skillTitle: 'css',
      skillExpert: 'Expert',
    },
    bootstrap: {
      skillImage: bootstrap,
      skillTitle: 'bootstrap',
      skillExpert: 'Expert',
    },
    javaScript: {
      skillImage: JavaScript,
      skillTitle: 'JavaScript',
      skillExpert: 'Intermediate',
    },
    React: {
      skillImage: React_js,
      skillTitle: 'React',
      skillExpert: 'Intermediate',
    },
    Tailwind: {
      skillImage: Tailwind,
      skillTitle: 'Tailwind Css',
      skillExpert: 'Intermediate',
    },
    Github: {
      skillImage: Github,
      skillTitle: 'Github',
      skillExpert: 'Intermediate',
    },
    Figma: {
      skillImage: Figma,
      skillTitle: 'Figma',
      skillExpert: 'Intermediate',
    },
  }


  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    function scrollNow() {
      if (window.scrollY > 300) {
        setScroll(true)
      }
      else {
        setScroll(false)
      }
    }
    window.addEventListener('scroll', scrollNow);

    return (() => {
      window.removeEventListener('scroll', scrollNow)
    })

  }, [])


  const ScrollBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }




  return (
    <>

      {/* Header Section  */}

      <Header />

      {/* about section  */}

      <div className="container" id="About">
        <div className="about-container">
          <div className="about-title">
            <h1>About Us</h1>
            <p>Passionate Front-End Developer with a strong foundation in HTML, CSS, JavaScript, Bootstrap, and React. Currently working at Torus Infotech, I specialize in building responsive, user-friendly, and visually appealing web applications.</p>
            <p>I enjoy crafting engaging user interfaces and optimizing website performance for a seamless experience. Always eager to learn and grow, I am open to collaborative opportunities where I can apply my expertise in React.js to create impactful solutions. Let’s connect and build something amazing together!</p>
          </div>
        </div>
      </div>

      {/* what i do  section */}

      <div className="container" id='about-section'>
        <div className="design-component">
          <div className="devlopment-title">
            <h1>What I Do</h1>
            <p>Innovative Design & Devlopment Services</p>
          </div>
        </div>
      </div>

      {/* i do   section  */}

      <div className="container" id='about-section'>
        <div className="desing-cards">
          <div className="row">
            {
              Object.values(skillCards).map((skillCards, idx) => {
                return (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
                    <div className="cards-section">
                      <FontAwesomeIcon className='cards-icon' icon={skillCards.cardIcon} />
                      <img className='cards-icon' src={skillCards.cardIcon} alt="" />
                      <div className="about-peragraph">
                        <h2>{skillCards.cardTitle}</h2>
                        <p>{skillCards.cardParagraph}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      {/* skills section  */}

      <div className="skill-title">
        <h1>Skills</h1>
      </div>

      {/* skills cards  */}

      <div className="container mt-5" id="about-section">
        <div className="row">
          {
            Object.values(skill).map((skill, idx) => {
              return (
                <div className="col-12 col-sm-6 col-md-3 col-lg-3" key={idx}>
                  <div className="skills-card">
                    <img src={skill.skillImage} alt="" className="img-fluid" />
                    <div className="card-body">
                      <h5 className="card-title">{skill.skillTitle}</h5>
                      <h6 className="card-title">{skill.skillExpert}</h6>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      {/* education section  */}

      <div className="skill-title" id='Education'>
        <h1>Education</h1>
      </div>


      <div className="container" id="about-section">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="education-cards"

        >
          {educationCards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="education-slider-card">
                <div className="education-about">
                  <h1>{card.title}</h1>
                  <p>{card.school}</p>
                  <span>Percentage: {card.percentage}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* expriance section */}

      <div className="skill-title">
        <h1>Experiance</h1>
      </div>

      <div className="container" id='about-section'>
        <div className="experiance-section">
          <div className="experiance-content" id='first-experiance'>
            <h5>November 2024 - Present</h5>
            <h1>Front End Development</h1>
            <h6>Torus Infotech pvt. ltd.</h6>
            <p>I have three months of experience and am currently working at Torus Infotech as a Front-End Developer, using HTML, CSS, JavaScript, Bootstrap, and React.js to create responsive and user-friendly websites. During my time here, I have also learned how to maintain and optimize websites to ensure smooth performance and a seamless user experience.</p>
            <div className="expriance-points">
              <li>Developed responsive and user-friendly websites using HTML, CSS, JavaScript, Bootstrap, and React.js.
              </li>
              <li>Followed best coding practices and maintained clean, well-structured code.
              </li>
              <li>Created interactive UI components and optimized website performance for a smooth user experience.</li>
            </div>
          </div>
          {/* <div className="experiance-content" id='second-experiance'>
            <h5>December 2023 - December 2024</h5>
            <h1>UI/UX</h1>
            <h6>Algoocean Infotech pvt. ltd.</h6>
            <p>Role & Responsibilities:  UI/UX Developer,Interactive Web Developer and Designer, Dedicated to Crafting Engaging and Responsive User Interfaces for Enhanced Online Interactions.</p>
          </div> */}
        </div>
      </div>

      {/* projects section  */}

      <div className="skill-title" id='Projects'>
        <h1>Projects</h1>
      </div>

      <div className="container" id="about-section">
        <div className="projects-section">
          {
            ['Templates', 'Websites', 'Live Websites'].map((category) => {
              return (
                <button key={category} onClick={() => BtnClick(category)} style={{
                  backgroundColor: activeButton === category ? '#11772f' : 'transparent',
                  color: activeButton === category ? 'white' : 'black',
                }}>
                  {category}
                </button>
              );
            })
          }
        </div>


        <div className="container mt-4">
          <div className="row">
            {
              Object.values(websiteCards[activeButton] || {}).map((cards, idx) => {
                return (
                  <div className="col-12  col-md-6 col-lg-4" key={idx}>
                    <div className="website-cards">
                      <img className="card-img-top" src={cards.websiteImg} alt="Card image cap" />
                      <div className="website-body">
                        <h5 className="card-title">{cards.websiteTitle}</h5>
                        <p className="card-text">{cards.websiteParagraph}</p>
                        <div className="website-icon-btn">
                          <div className="demo-icon">
                            <a className='demo-icon' href={cards.webLink}>
                              <FontAwesomeIcon id="demo-icon" icon={cards.websiteDesktop} />
                              <h2>{cards.websiteDesktopDemo}</h2>
                            </a>
                          </div>
                          <div className="demo-icon">
                            <FontAwesomeIcon id="demo-icon" icon={cards.websiteGithub} />
                            <h2>{cards.websiteGithubCode}</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>

      </div>

      {/* contact section  */}

      <div className="skill-title" id='Contact'>
        <h1>Contact Us</h1>
      </div>

      <div className="container" id='#'>
        <div className="contact-container">
          <div className="contact-section">
            <div className="contact-icon-container">
              <div className="contact-icon">
                <FontAwesomeIcon id='call-me' className='faIcons' icon={faMobile} />
                <div className="contact-email" >
                  <h3>Call Me : </h3>
                  <a href="tel:+919027548872">+919027548872</a>
                </div>
              </div>
              <div className="contact-icon">
                <FontAwesomeIcon id='email-me' className='faIcons' icon={faEnvelope} />
                <div className="contact-email">
                  <h3>Email Me : </h3>
                  <a href="mailto:amitrawat789599@gmail.com">amitrawat789599@gmail.com</a>
                </div>
              </div>
              <div className="contact-icon">
                <FontAwesomeIcon id='location-me' className='faIcons' icon={faLocation} />
                <div className="contact-email">
                  <h3>Location : </h3>
                  <a href="#">Delhi NCR Dwarika Kakrola Gau </a>
                </div>
              </div>
            </div>
            <div className="contact-inputs-container">
              <div className="contact-inputs">
                <div className="name-inputs">
                  <input type="text" placeholder='Enter Your Name' required />
                  <input type="email" placeholder='Enter Your Email' required />
                </div>
                <div className="name-inputs">
                  <input type="text" placeholder='Enter Subject' required />
                </div>
                <div className="name-inputs">
                  <textarea name="" id="textarea-box" placeholder='Message' required></textarea>
                </div>
              </div>
              <div className="submit-btn">
                <button className='site-btn-outline'> Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-content">
          <p>© 2024 All rights reserved | Made  by Amit Rawat</p>
        </div>
      </footer>


      <div className="container">

        <div className="scroll-icon" style={{ display: scroll ? 'block' : 'none' }}>
          <div className="drop-icon" onClick={ScrollBtn}>
            <FontAwesomeIcon id='dropdownIcon' icon={faAngleUp} />
          </div>
        </div>

        <div className="whatsapp-icon">
          <div className="drop-icon">
            <span><FontAwesomeIcon id='dropdownIcon' icon={faWhatsapp} /></span>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home
