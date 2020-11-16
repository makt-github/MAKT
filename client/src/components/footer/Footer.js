import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-top">
          {/* <div className="container"> */}
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12 part-one md-mb-30 sm-mb-30">
              <h3>Location</h3>
              <p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.070409298141!2d91.86687251540312!3d24.895579849979402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750552af8919883%3A0x6fc2fe33c01b3797!2sZindabazar%2C%20Sylhet!5e0!3m2!1sen!2sbd!4v1603208135130!5m2!1sen!2sbd"
                  width="400"
                  height="200"
                  frameborder="0"
                  style={{ border: "2px solid blue" }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </p>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 part-two md-mb-30 sm-mb-30">
              <h2>Useful Links</h2>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Books</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="#">Event</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 part-three  sm-mb-30">
              <h2>Find Me Followings</h2>
              <p className="address-line">
                <ul>
                  <li>
                    <i className="fas fa-phone-volume">
                      {" "}
                      +8801774876777, +8801852823903
                    </i>
                  </li>
                  <li>
                    <i className="fas fa-mail-bulk"> makt.cse@gmail.com</i>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt">
                      ..Sylhet-3100,Bangladesh(Present)
                    </i>
                  </li>
                </ul>
              </p>
              <div className="icon">
                <a href="">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa fa-github"></i>
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 part-four sm-mb-30">
              <h2>Get Newsletter</h2>
              <p>
                Computer engineers are involved in many hardware and software
                aspects of computing, from the design of individual
                microcontrollers, microprocessors, personal computers, and
                supercomputers, to circuit design. This field of engineering not
                only focuses on how computer systems themselves work but also
                how they integrate into the larger picture.[2]
              </p>
              <form action="">
                <input type="email" />
                <input id="submit" type="submit" value="susbcribe" />
              </form>
            </div>
          </div>
        </div>

        <p className="footer-bottom-text">
          <span>All Right reserved by &copy;MAKT.2020</span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
