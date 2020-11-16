import React from "react";
import App from "./webcontent/index";
import Slider from "./carousel/Slider";
import Intro from "./intro/Intro";
import Topnews from "./topnews/Topnews";
import Remark from "./remarks/Remark";

const Home = () => {
  return (
    <div>
      <div>
        <Slider></Slider>
      </div>
      <div>
        <Intro></Intro>
      </div>
      <div>
        <App></App>
      </div>
      <div>
        <Topnews></Topnews>
      </div>
      <div>
        <Remark></Remark>
      </div>
    </div>
  );
};

export default Home;
