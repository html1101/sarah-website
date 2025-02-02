// import { useState } from 'react'
import { useEffect, useReducer, useRef, useState } from "react";
import style from "./App.module.css"
import face from "./assets/me.jpeg";
// Screenshots:
import cmpShot from "./assets/CMP-Screenshot.webp";
import laserTrack from "./assets/laser-track.gif";
import tallyLights from "./assets/TallyLights.jpg";
import camPhoto from "./assets/camPhoto.webp";
import Wavy from "./assets/Wavy";

const sleep = (time: number) => {
  return new Promise((res) => {
    setTimeout(res, time);
  });
};

function App() {
  const blob = useRef<HTMLDivElement | null>(null);
  const [text, setText] = useState("SARAH");
  const [state, replay] = useReducer(e => e + 1, 0);
  const running = useRef(false);

  useEffect(() => {
    // Start with setting to nothing then type out sarah
    (async function show() {
      if(running.current) return;
      console.log("Starting show");
      running.current = true;
      setText("LCCDO");
      await sleep(150);
      setText("SBCDA");
      await sleep(150);
      setText("SADEB");
      await sleep(120);
      setText("SARMR");
      await sleep(100);
      setText("SARAL");
      await sleep(100);
      setText("SARAH");
      await sleep(1000);
      running.current = false;

      await sleep(10000);
      show();
    })();
  }, [setText, state]);

  return (
    <div
    className={style.bigElem}
    onMouseMove={(evt) => {
      // Get the blob and make it move
      const { clientX, clientY } = evt;
      const b = blob.current;
      if(blob && b) {
        b.style.top = `${clientY}px`;
        b.style.left = `${clientX}px`;
      }
    }}
    onMouseLeave={() => {
      const b = blob.current;
      if(blob && b) {
        b.style.top = 'calc(50% - 4em)';
        b.style.left = 'calc(50% - 8em)';
      }
    }}>
      <div className={style.blur}>
        <div className={style.blurredBlob} ref={blob}></div>
      </div>
      <div
        className={style.topbar}>
        &#x3C; <span
          className={`${style.minSize} ${style.color}`}
          onMouseEnter={() => replay()}>{text}</span> /&#x3E;
      </div>
      <div className={style.body}>
        <div className={style.intro}>
          <div className={style.leftSide}>
            Hello there! My name's
            <div className={style.largeText}>
            SARAH CROSS
            </div>
            <em>
              Full-Stack Dev
              <i className={style.dot}></i>
              Student
              <i className={style.dot}></i>
              Researcher
            </em>
          </div>
          {/* Face with gradient around it */}
          <div className={style.rightSide}>
            <img src={face} />
          </div>
        </div>
        <hr />

        <div className={style.workLabWrap}>
          <div className={style.steps}></div>
          <div className={style.workLab}>
            <div className={style.desc}>
              <div className={style.dot}></div>&#x3C; Work /&#x3E;
            </div>
            <i>Projects I've worked on recently.</i>
            <hr />
            <div className={style.jobTitle}>PTZOptics</div>
            Software Engineer Intern: 2021 - Present
            <div className={style.things}>
            <div className={style.project}>
                <Wavy className={style.wavy} />
                <div className={style.info}>
                  <div className={style.projName}>PTZOptics Horizon</div>
                  <br />
                  Coming soon!
                </div>
                <img src={camPhoto} />
              </div>
              <div className={`${style.project} ${style.reverse}`}>
                <Wavy className={style.wavy} />
                <div className={style.info}>
                  <div className={style.projName}>CMP</div>
                  <br />
                  Management platform for P/T/Z cameras
                </div>
                <img src={cmpShot} />
              </div>
              <div className={`${style.project} ${style.reverse}`}>
                <Wavy className={style.wavy} />
                <div className={style.info}>
                  <div className={style.projName}>Laser Tracking</div>
                  <br />
                  High-performance ML model to track lasers.
                </div>
                <img src={laserTrack}/>
              </div>
              <div className={`${style.project} ${style.above}`}>
                <Wavy className={style.wavy} />
                <div className={style.info}>
                  <div className={style.projName}>TallyLights</div>
                  <br />
                  A software on-air indicator system for
                  <br />
                  multi-camera video productions.
                </div>
                <img src={tallyLights}/>
              </div>
              
            </div>

            <div className={style.desc}>
              <div className={style.dot}></div>&#x3C; Lab /&#x3E;
            </div>
            <i>Recent research projects I've done!</i>
            <hr />

          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
