import React from "react";
import "./Remark.css";

export default function Remark() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-center m-auto testimonial">
            <h2>Testimonials</h2>
            <div
              id="myCarousel"
              className="carousel carousel-remark slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="item carousel-item active">
                  <div className="img-box">
                    <img src="https://i.ibb.co/tZ8JJ9M/emp1.jpg" alt="" />
                  </div>
                  <p className="testimonial">
                    Don’t assume knowledge. Use simple terms that most anyone
                    can understand even if they are unfamiliar with your subject
                    matter. The alternative is to provide explanations for words
                    which not everyone understands.
                  </p>
                  <p className="overview">
                    <b>Jennifer Smith</b>, Student
                  </p>
                </div>
                <div className="item carousel-item">
                  <div className="img-box">
                    <img src="https://i.ibb.co/Wn4hT8k/emp20.png" alt="" />
                  </div>
                  <p className="testimonial">
                    Don’t assume knowledge. Use simple terms that most anyone
                    can understand even if they are unfamiliar with your subject
                    matter. The alternative is to provide explanations for words
                    which not everyone understands.
                  </p>
                  <p className="overview">
                    <b>Dauglas McNun</b>, Student
                  </p>
                </div>
                <div className="item carousel-item">
                  <div className="img-box">
                    <img src="https://i.ibb.co/7pST5n4/emp11.jpg" alt="" />
                  </div>
                  <p className="testimonial">
                    Don’t assume knowledge. Use simple terms that most anyone
                    can understand even if they are unfamiliar with your subject
                    matter. The alternative is to provide explanations for words
                    which not everyone understands.
                  </p>
                  <p className="overview">
                    <b>Hellen Wright</b>,Student
                  </p>
                </div>
              </div>
              {/* <!-- Carousel Controls --> */}
              <a
                className="carousel-control arrow left carousel-control-prev"
                href="#myCarousel"
                data-slide="prev"
              >
                <i className="fa fa-angle-left"></i>
              </a>
              <a
                className="carousel-control arrow  right carousel-control-next"
                href="#myCarousel"
                data-slide="next"
              >
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
