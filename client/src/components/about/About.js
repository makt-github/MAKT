import React from "react";
import "./About.css";
import $ from "jquery";
import jQuery from "jquery";

import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "react-isotope";
import { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="about-body">
      <main className="container">
        <section className="profile">
          <div className="left">
            <div className="avatar_block">
              <img src="https://i.ibb.co/s1WHbtZ/Gmail-photo.png" alt="" />

              <span>
                <i className="uil uil-comment-dots"></i>
              </span>
            </div>
            <div>
              <h2>MD ABDUL KADIR</h2>
              <p className="cd-headline loading-bar">
                <span className="cd-words-wrapper">
                  <b className="is-visible">Software Developer</b>
                  <b>Penestration Tester</b>
                  <b>Cyber Security Analyst</b>
                </span>
              </p>
            </div>
          </div>
          <div className="right">
            <ul className="contact">
              <li>
                <i class="fas fa-mobile-alt"> </i>
                <strong> Phone : </strong> +8801774876777
              </li>
              <li>
                <i class="fas fa-envelope-open-text"> </i>
                <strong> Email : </strong> makt.cse@gmail.com
              </li>
            </ul>
            <ul className="socials">
              <li>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-blog"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="about-me">
          <h1 className="section_heading">About Me</h1>
          <div className="content">
            <div className="left">
              <h2>This is Tayef</h2>
              <p>
                Computer engineers are involved in many hardware and software
                aspects of computing, from the design of individual
                microcontrollers, microprocessors, personal computers, and
                supercomputers, to circuit design. This field of engineering not
                only focuses on how computer systems themselves work but also
                how they integrate into the larger picture.[2]
              </p>
              <button>Download CV</button>
            </div>
            <div className="right">
              <p>
                <span>Name</span>
                <span>MD ABDUL KADIR TAYEF</span>
              </p>
              <p>
                <span>Language</span>
                <span>English,Bnagla</span>
              </p>
              <p>
                <span>Country</span>
                <span>Bnagladesh</span>
              </p>
              <p>
                <span>Home Town</span>
                <span>Sylhet</span>
              </p>
              <p>
                <span>Interest</span>
                <span>Travel,Reading,Sleep,Food</span>
              </p>
            </div>
          </div>
        </section>
        <section className="skills">
          <h1 className="section_heading">Skills & Education</h1>
          <div className="content-2">
            <div className="left">
              <div className="inner_left1">
                <div className="heading">
                  <i class="fas fa-graduation-cap"></i>
                  <h5>Educatoin</h5>
                </div>
                <div className="time_wrapper">
                  <div className="item-about">
                    <p>2017-Present</p>
                    <p className="center">BSc. in CSE</p>
                    <p>Metropolitan University</p>
                  </div>
                  <div className="item-about">
                    <p>2014-2016</p>
                    <p className="center">Higher Secondary</p>
                    <p>Sylhet Govt. College</p>
                  </div>
                  <div className="item-about">
                    <p>2011-2013</p>
                    <p className="center">Secondary School</p>
                    <p>High School</p>
                  </div>
                </div>
              </div>
              <div className="inner_right">
                <div className="heading">
                  <i class="fas fa-briefcase"></i>
                  <h5>Experience</h5>
                </div>
                <div className="time_wrapper">
                  <div className="item-about">
                    <p>2020-Present</p>
                    <p className="center">IT Operation Manager</p>
                    <p>DBBL Agent Banking</p>
                  </div>
                  <div className="item-about">
                    <p>2018-Present</p>
                    <p className="center">Web Developer</p>
                    <p>Remote</p>
                  </div>
                  <div className="item-about">
                    <p>2011-2016</p>
                    <p className="center">Volunteer</p>
                    <p>Red Crescent Youth, Sylhet</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="skills_wrapper">
                <div className="skills-box">
                  <h4>ReactJs & Bootsrap</h4>
                  <div className="progress_wrap">
                    <span data-percent="65" className="progress_bar">
                      <span className="tool">65%</span>
                    </span>
                  </div>
                </div>
                <div className="skills-box">
                  <h4>JavaScript</h4>
                  <div className="progress_wrap">
                    <span data-percent="60" className="progress_bar">
                      <span className="tool">60%</span>
                    </span>
                  </div>
                </div>
                <div className="skills-box">
                  <h4>NodeJs, ExpressJs & Database</h4>
                  <div className="progress_wrap">
                    <span data-percent="61" className="progress_bar">
                      <span className="tool">61%</span>
                    </span>
                  </div>
                </div>
                <div className="skills-box">
                  <h4>SDK & Template</h4>
                  <div className="progress_wrap">
                    <span data-percent="70" className="progress_bar">
                      <span className="tool">70%</span>
                      <br />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="counter_wrapper">
          <div>
            <div className="">
              <i class="fas fa-project-diagram"></i>
            </div>
            <div className="">
              <h3>
                <span className="counter" data-count="5">
                  5
                </span>
                +
              </h3>
              <p>Projects Done</p>
            </div>
          </div>
          <div>
            <div className="">
              <i class="fas fa-blog"></i>
            </div>
            <div className="">
              <h3>
                <span className="counter" data-count="1330">
                  1330
                </span>
                +
              </h3>
              <p>Bolg Created</p>
            </div>
          </div>
          <div>
            <div className="">
              <i class="fas fa-star"></i>
            </div>
            <div className="">
              <h3>
                <span className="counter" data-count="5">
                  5
                </span>
                +
              </h3>
              <p>Certification</p>
            </div>
          </div>
          <div>
            <div className="">
              <i class="far fa-calendar-alt"></i>
            </div>
            <div className="">
              <h3>
                <span className="counter" data-count="10">
                  5
                </span>
                +
              </h3>
              <p>Events Participation</p>
            </div>
          </div>
        </section>
        <section className="review">
          <h1 className="section_heading">Review & Feedback</h1>
          <div className="wrapper">
            <div className="slider_wrapper">
              <div className="icon_wrap">
                <i class="far fa-comments"></i>
              </div>
              <div className="slider-about">
                <div className="slide-about">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                  <div>
                    <img src="https://i.ibb.co/dbp3DNp/emp8.jpg" alt="" />
                  </div>
                  <h2>Jhon Bond</h2>
                  <h6>--Student</h6>
                </div>
                <div className="slide-about">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                  <div>
                    <img src="https://i.ibb.co/7pST5n4/emp11.jpg" alt="" />
                  </div>
                  <h2>Jhon Bond</h2>
                  <h6>--Student</h6>
                </div>
                <div className="slide-about">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                  <div>
                    <img src="https://i.ibb.co/KxwV58k/emp9.jpg" alt="" />
                  </div>
                  <h2>Jhon Bond</h2>
                  <h6>--Student</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sample-work">
          <h1 className="section_heading">Project Sample Done</h1>
          <div className="wrapper">
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map((x) => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title,
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        </section>
      </main>
    </div>
  );
};

jQuery(document).ready(function () {
  const bars = document.querySelectorAll(".progress_bar");

  console.log(bars);

  bars.forEach(function (bar) {
    let percentage = bar.dataset.percent;
    console.log(percentage);
    let tooltip = bar.children[0];
    tooltip.innerText = percentage + "%";
    bar.style.width = percentage + "%";
  });

  // Counter............

  const counters = document.querySelectorAll(".counter");
  function playCounter() {
    counters.forEach((counter) => {
      counter.innerText = 0;

      let point = +counter.dataset.count;

      let step = point / 100;

      let startCount = function () {
        let displayCount = +counter.innerText;

        if (displayCount < point) {
          counter.innerText = Math.ceil(displayCount + step);
          setTimeout(startCount, 500);
        } else {
          counter.innerText = point;
        }
      };
      startCount();
    });
  }
  playCounter();
  // let counterSection = document.querySelector(".counter_wrapper");

  // let scope = {
  //   borderMargin: "0px 0px -200px 0px",
  // };
  // const sectionObserver = new IntersectionObserver(function (entry) {
  //   if (entry[0].isIntersecting) {
  //     playCounter();
  //   }
  // }, scope);
  // sectionObserver.observe(counterSection);

  // Slider Item

  $(".slider-about").slick({
    arrows: false,
    autoplay: true,
    dots: true,
    swipe: true,
  });
});

export default About;
