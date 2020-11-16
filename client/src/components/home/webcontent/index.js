import React from "react";
import ReactDOM, { render } from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./style.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function App() {
  // state={
  //     items : [
  //         {id:1, url:'https://ibb.co/hfp1LVS'},
  //         {id:2, url:'https://ibb.co/F0xFh9m'},
  //         {id:3, url:'https://ibb.co/xJCWn8P'},
  //         {id:4, url:'https://ibb.co/DDcRSTk'},
  //         {id:5, url:'https://ibb.co/ZSz9hgv'},
  //         {id:6, url:'https://ibb.co/z8G44zh'},
  //         {id:7, url:'https://ibb.co/ngMBkQ7'},
  //         {id:8, url:'https://ibb.co/M1gj4c6'}
  //     ]
  // }

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          padding: "5px",
          margin: "5px",
          marginTop: "25px",
          color: "white",
        }}
      >
        Available Information to This Site
      </h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <a href="#" style={{ textDecoration: "none" }}>
              Scholarship Update
            </a>
          </Item>
          <Item>Job & Intern</Item>
          <Item>Career Solution</Item>
          <Item>Skil Development</Item>
          <Item>Life Hacks Bolg</Item>
          <Item>Artical & Papers</Item>
          <Item>News Outbreak</Item>
          <Item>Paid Books Free</Item>

          {/* {items.map(item => <div key={item.id}>{item.url}</div>)} */}
        </Carousel>
      </div>
    </>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App;
