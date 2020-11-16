import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div>
      <div className="title">
        <marquee behavior="scroll" direction="">
          <a href="">
            <h5>
              Welcome to my page. Visit regularly to obtain useful information
            </h5>
          </a>
        </marquee>
      </div>

      <div className="main-content">
        <div className="content">
          <div className="overview">
            <h3>Overview</h3>
            <div className="video-section">
              <iframe
                width="640"
                height="360"
                src="https://www.youtube.com/embed/XZmGGAbHqa0?autoplay=0"
                frameborder="0"
              ></iframe>
              {/* <video>
                                <source src="https://www.youtube.com/watch?v=ioblgpA5eTo" type="video/youtube"/>
                            </video> */}
            </div>
            <div className="text-section">
              <p>
                Computer science is the study of computation and
                information.[1][2] Computer science deals with theory of
                computation, algorithms, computational problems, and the design
                of computer systems hardware, software, and applications.[3][4]
                Computer science addresses both human-made and natural
                information processes, such as communication, control,
                perception, learning, and intelligence, especially in human-made
                computing systems and machines.[5][6][7]
              </p>
              <p>
                Its fields can be divided into theoretical and practical
                disciplines. For example, computational complexity theory
                describes the amount of resources required to solve
                computational problems, while computer graphics and
                computational geometry emphasizes more specific applications.
                Algorithmics have been called the heart of computer science.[8]
                Programming language theory considers approaches to the
                description of computational processes, while software
                engineering involves the use of programming languages and
                complex systems. Computer architecture and computer engineering
                deals with construction of computer components and
                computer-controlled equipment.[5][9] Human–computer interaction
                considers the challenges in making computers useful, usable, and
                accessible. Artificial intelligence aims to synthesize
                goal-orientated processes such as problem-solving,
                decision-making, environmental adaptation, motion planning,
                learning, and communication found in humans and animals.
                According to Peter Denning, the fundamental question underlying
                computer science is, "What can be automated?"
              </p>
              <p>
                Computer engineering (CpE) is a branch of engineering that
                integrates several fields of computer science and electronic
                engineering required to develop computer hardware and
                software.[1] Computer engineers usually have training in
                electronic engineering (or electrical engineering), software
                design, and hardware-software integration instead of only
                software engineering or electronic engineering.
              </p>{" "}
              <p>
                {" "}
                Computer engineers are involved in many hardware and software
                aspects of computing, from the design of individual
                microcontrollers, microprocessors, personal computers, and
                supercomputers, to circuit design. This field of engineering not
                only focuses on how computer systems themselves work but also
                how they integrate into the larger picture.[2]
              </p>
            </div>
          </div>

          <div className="newsbar-side">
            <h3>News & Updates</h3>

            <marquee
              behavior="scroll"
              direction="up"
              scrollamount="5"
              onMouseOver="this.stop()"
              onMouseOut="this.start()"
            >
              <p>Inside the White House Event Now Under Covid Scrutiny</p>
              <p>Inside the White House Event Now Under Covid Scrutiny</p>
              <p>Inside the White House Event Now Under Covid Scrutiny</p>
              <p>Inside the White House Event Now Under Covid Scrutiny</p>
              <p>Inside the White House Event Now Under Covid Scrutiny</p>
              <p>Inside the White House Event Now Under Covid Scrutiny</p>
              <p>Inside the White House Event Now Under Covid Scrutiny</p>
              <p>Inside the White House Event Now Under Covid Scrutiny</p>
              <p>Inside the White House Event Now Under Covid Scrutiny</p>
              <p>Inside the White House Event Now Under Covid Scrutiny</p>
              <p>Inside the White House Event Now Under Covid Scrutiny</p>
              <p>Inside the White House Event Now Under Covid Scrutiny</p>
            </marquee>
          </div>
        </div>
      </div>
      {/* main-content end up here */}
    </div>
  );
};
export default Intro;
