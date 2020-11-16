import React from "react";
import "./Topnews.css";

export default function Topnews() {
  return (
    <div>
      <div className="top-news">
        <h2>Trending Today</h2>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card mb-3" style={{ "max-width": "540px" }}>
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src="https://i.ibb.co/56830hZ/emp13.jpg"
                    class="card-img"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-3" style={{ "max-width": "540px" }}>
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src="https://i.ibb.co/hKHktPr/Young-handsome-businessman-employee-working-in-office-at-desk.jpg"
                    class="card-img"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-100"></div>
          <div class="col">
            <div class="card mb-3" style={{ "max-width": "540px" }}>
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src="https://i.ibb.co/kqSDMFR/emp18.png"
                    class="card-img"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-3" style={{ "max-width": "540px" }}>
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src="https://i.ibb.co/D8VZ1Nz/emp5.jpg"
                    class="card-img"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
