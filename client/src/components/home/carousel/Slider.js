import React from "react";
import "./Slider.css";
import s1 from "../../../images/Carousel_Images/s1.jpg";
import s2 from "../../../images/Carousel_Images/s2.jpg";
import s3 from "../../../images/Carousel_Images/s3.jpg";

export default function Slider() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide-one slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item slide-item-one active">
            <div class="overlay"></div>
            <img class="d-block w-100" src={s1} alt="First slide" />
            <div class="carousel-caption slide-caption-one">
              <h1 class="animate__animated animate__fadeInDown">
                {/* View Villa Dining & Banquet */}
              </h1>
              <h3 class="animate__animated animate__fadeInUp">
                {/* Our mission is to provide an unforgettable experience */}
              </h3>
            </div>
          </div>

          <div class="carousel-item slide-item-one">
            <div class="overlay"></div>
            <img class="d-block w-100" src={s2} alt="Second slide" />
            <div class="carousel-caption slide-caption-one">
              <h1 class="animate__animated animate__fadeInLeft">
                {/* Your Perfect Banquet */}
              </h1>
              <h3 class="animate__animated animate__fadeInRight">
                {/* The best dinning quality can be here too! */}
              </h3>
            </div>
          </div>
          <div class="carousel-item slide-item-one">
            <div class="overlay"></div>
            <img class="d-block w-100" src={s3} alt="Third slide" />
            <div class="carousel-caption slide-caption-one">
              <h1 class="animate__animated animate__fadeInBottomLeft">
                {/* New In Town */}
              </h1>
              <h3 class="animate__animated animate__fadeInBottomRight">
                {/* Enjoy our special services */}
              </h3>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
