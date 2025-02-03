// import { useState } from 'react'
import { useEffect, useReducer, useRef, useState } from "react";
import style from "./App.module.css"
import face from "./assets/me.jpeg";
// Screenshots:
import cmpShot from "./assets/CMP-Screenshot.webp";
import laserTrack from "./assets/laserTrack.jpg";
import laserTrackGif from "./assets/laser-track.gif";
import tallyLights from "./assets/TallyLights.jpg";
import camPhoto from "./assets/camPhoto.webp";
import Wavy from "./assets/Wavy";

import runningShot from "./assets/running_cli.png";
import cnnShot from "./assets/cnn_shot.png";
import dryEyes from "./assets/dry_eyes.png";
import biasInsight from "./assets/biasInsight.png";

import nabShow from "./assets/nabshow.png";
import ise from "./assets/ise.webp";
import tartanHacks from "./assets/tartanhacks.jpg";
import hate from "./assets/hate.jpg";
import dna from "./assets/dna.png";

const sleep = (time: number) => {
  return new Promise((res) => {
    setTimeout(res, time);
  });
};

enum Projects {
  Horizon,
  CMP,
  LaserTracking,
  TallyLights,
  RunningWidgets,
  BlockAnything,
  OptoPulse,
  BiasInsight,
  Dna3D
}

function App() {
  const blob = useRef<HTMLDivElement | null>(null);
  const [text, setText] = useState("SARAH");
  const [state, replay] = useReducer(e => e + 1, 0);
  const running = useRef(false);
  const [selectedProject, setSelectedProject] = useState<Projects | null>(null);
  const [loadingPage, setLoadingPage] = useState(true);
  const [laserSrc, setLaserSrc] = useState(laserTrack);
  // const rotateIntensityX = 5;
  // const rotateIntensityY = 5;

  useEffect(() => {
    // Start with setting to nothing then type out sarah
    (async function show() {
      if (running.current) return;
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
  const dot = <div className={style.dot}></div>;

  /*function fancyRotate ({currentTarget, clientX, clientY}: {currentTarget: HTMLDivElement, clientX: number, clientY: number}) {
    // Rotate the target
    if(!currentTarget) return;
    // Find the center of the target and rotate around it
    const boundInfo = currentTarget.getBoundingClientRect();
    const centerX = boundInfo.width / 2;
    const centerY = boundInfo.height / 2;
    const x = ((clientX - boundInfo.left) - centerX) / centerX * rotateIntensityX;
    const y = ((clientY - boundInfo.top) - centerY) / centerY * rotateIntensityY;
    currentTarget.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
  }

  function stopRotate ({currentTarget}: {currentTarget: HTMLDivElement}) {
    currentTarget.style.transform = "rotateY(0deg) rotateX(0deg)";
  }*/
  const backBtn = <div className={style.backpage} onClick={(evt) => {
    evt.stopPropagation();
    setSelectedProject(null);
  }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-arrow-90deg-left' viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z" />
    </svg>
  </div>;

  const links = <div className={style.links}>
    <a href="https://github.com/html1101" target="_blank">
      <svg viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: "2em"}}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor" />
      </svg>
    </a>
    <a href="https://www.linkedin.com/in/sarah-cross-0740471b6/" target="_blank">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="100 100 824 824" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg>
    </a>
    <a href="./Resume.pdf" download="Sarah-Cross-Resume.pdf">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755" />
      </svg>
    </a>
    <a href="mailto:sarahcross@cmu.edu">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
      </svg>
    </a>
  </div>;

  useEffect(() => {
    setLoadingPage(false);
  }, []);

  return (
    <div
      className={style.bigElem}>
      <div
        className={style.loading}
        style={{
          display: loadingPage ? "flex" : "none",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background: "black",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "5",
          transition: "0.2s"
        }}>
        Loading page...
      </div>
      <div
        style={{
          display: loadingPage ? "none": "block"
        }}
        onMouseMove={(evt) => {
          // Get the blob and make it move
          const { clientX, clientY } = evt;
          const b = blob.current;
          if (blob && b) {
            b.style.top = `${clientY}px`;
            b.style.left = `${clientX}px`;
          }
        }}
        onMouseLeave={() => {
          const b = blob.current;
          if (blob && b) {
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
              <span>
                <span className={style.fullStack}>Full-Stack Dev</span> {dot}
                <span className={style.student}>Student</span> {dot}
                <span className={style.researcher}>Researcher</span>
              </span>

              {links}
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
                <div
                  className={`${style.project} ${selectedProject === Projects.Horizon ? style.active : ""}`}
                  onClick={() => setSelectedProject(Projects.Horizon)}>
                  <Wavy className={style.wavy} />
                  <div className={style.info}>
                    <div className={style.projName}>PTZOptics Horizon</div>
                    Coming soon!
                    <br />
                    <div className={style.hidden}>
                      {backBtn}
                      <div>
                        <b>Tools Used: </b>
                        NodeJS{dot}HTML/CSS/JS{dot}React{dot}Vite{dot}Rust
                      </div>
                    </div>
                  </div>
                  <img src={camPhoto} />
                  <div className={style.awardLocation}>
                    <a href="https://www.iseurope.org/" target="_blank"><img src={ise} /></a>
                  </div>
                </div>
                <div
                  className={`${style.project} ${style.reverse} ${selectedProject === Projects.CMP ? style.active : ""}`}
                  onClick={() => setSelectedProject(Projects.CMP)}>
                  <Wavy className={style.wavy} />
                  <div className={style.info}>
                    <a className={style.projName} href="https://ptzoptics.com/cmp" target="_blank">CMP</a>
                    Management platform for P/T/Z cameras
                    <div className={style.hidden}>
                      {backBtn}
                      <ul>
                        <li>PTZ camera control</li>
                        <li>Auto-tracking for any G2 PTZOptics camera</li>
                        <li>Advanced color correction</li>
                        <li>Web API allows easy integration with other products (OBS, vMix, StreamDeck, etc)</li>
                      </ul>
                      <div>
                        <b>Tools Used: </b>
                        NodeJS{dot}HTML/CSS/JS{dot}Express{dot}Electron{dot}Electron
                      </div>
                    </div>
                  </div>
                  <a className={style.link} href="https://ptzoptics.com/cmp" target="_blank">More Info</a>
                  <img src={cmpShot} />
                  <div className={style.awardLocation}>
                    <a href="https://www.nabshow.com/" target="_blank"><img src={nabShow} /></a>
                    <a href="https://www.iseurope.org/" target="_blank"><img src={ise} /></a>
                  </div>
                </div>
                <div
                  className={`${style.project} ${style.above} ${selectedProject === Projects.TallyLights ? style.active : ""}`}
                  onClick={() => setSelectedProject(Projects.TallyLights)}>
                  <Wavy className={style.wavy} />
                  <div className={style.info}>
                    <a className={style.projName} href="https://tallylights.com" target="_blank">TallyLights</a>
                    A software on-air indicator system for
                    <br />
                    multi-camera video productions.
                    <div className={style.hidden}>
                      {backBtn}
                      <ul>
                        <li>Customizable setup for almost any production scenario.</li>
                        <li>Compatible with over 7 different video delivery solutions, ex. vMix, Wirecase, and OBS.</li>
                      </ul>
                      <div>
                        <b>Tools Used: </b>
                        HTML/CSS/JS{dot}Tauri{dot}C++{dot}Rust{dot}NDI SDK
                      </div>
                    </div>
                  </div>
                  <a className={style.link} href="https://tallylights.com" target="_blank">More Info</a>
                  <img src={tallyLights} />
                </div>

                <div
                  className={`${style.project} ${style.reverse} ${selectedProject === Projects.LaserTracking ? style.active : ""}`}
                  onClick={() => setSelectedProject(Projects.LaserTracking)}
                  onMouseEnter={() => setLaserSrc(laserTrackGif)}
                  onMouseLeave={() => setLaserSrc(laserTrack)}>
                  <Wavy className={style.wavy} />
                  <div className={style.info}>
                    <div className={style.projName}>Laser Tracking</div>
                    Accurate ML model to track lasers.
                    <div className={style.hidden}>
                      {backBtn}
                      <div>
                        <b>Tools Used: </b>
                        PyTorch{dot}ResNet{dot}Python
                      </div>
                    </div>
                  </div>
                  <img src={laserSrc} />
                </div>
              </div>

              <hr />
              <div className={style.jobTitle}>Miscellaneous</div>

              <div className={style.things}>
              <div
                  className={`${style.project} ${selectedProject === Projects.OptoPulse ? style.active : ""}`}
                  onClick={() => setSelectedProject(Projects.OptoPulse)}>
                  <Wavy className={style.wavy} />
                  <div className={style.info}>
                    <a className={style.projName} href='https://github.com/html1101/OptoPulse-AI' target="_blank">OptoPulse</a>
                    Evaluates optometric info such as
                    <br />
                    dry eye risk and vision testing.
                    <div className={style.hidden}>
                      {backBtn}
                      <br />
                      Top 15 at TartanHacks, the largest hackathon in Pittsburgh.
                      <div>
                        <b>Tools Used: </b>
                        OpenAI API{dot}NodeJS{dot}Express{dot}Tensorflow (TFJS){dot}HTML/CSS/JS
                      </div>
                    </div>
                  </div>
                  <a className={style.link} href="https://github.com/html1101/OptoPulse-AI" target="_blank">View Code</a>
                  <img className={`${style.awardLocation} ${style.darkAward}`} src={tartanHacks} />
                  <img src={dryEyes} />
                </div>
                <div
                  className={`${style.project} ${style.above} ${selectedProject === Projects.RunningWidgets ? style.active : ""}`}
                  onClick={() => setSelectedProject(Projects.RunningWidgets)}>
                  <Wavy className={style.wavy} />
                  <div className={style.info}>
                    <div className={style.projName}>Running Widgets</div>
                    Converts GPX routes into exportable
                    <br />
                    treadmill workouts.
                    <div className={style.hidden}>
                      {backBtn}
                      <div>
                        <b>Tools Used: </b>
                        Python{dot}Linear Regression
                      </div>
                      <br />
                    </div>
                  </div>
                  <a className={style.link} href="https://github.com/html1101/Useful-Running-Widgets" target="_blank">View Code</a>
                  <img src={runningShot} className={style.cover} />
                </div>
                <div
                  className={`${style.project} ${style.reverse} ${selectedProject === Projects.BlockAnything ? style.active : ""}`}
                  onClick={() => setSelectedProject(Projects.BlockAnything)}>
                  <Wavy className={style.wavy} />
                  <div className={style.info}>
                    <div className={style.projName}>Block Anything</div>
                    Chrome extension to block triggering <br />
                    content online.
                    <div className={style.hidden}>
                      {backBtn}
                      <div>
                        <b>Tools Used: </b>
                        Chrome Extensions{dot}HTML/CSS/JS
                      </div>
                    </div>
                  </div>
                  <img src={cnnShot} className={style.cover} />
                </div>

                <div
                  className={`${style.project} ${style.reverse} ${selectedProject === Projects.BiasInsight ? style.active : ""}`}
                  onClick={() => setSelectedProject(Projects.BiasInsight)}>
                  <Wavy className={style.wavy} />
                  <div className={style.info}>
                    <div className={style.projName}>Bias Insight</div>
                    Chrome extension to track bias <br />
                    in content consumed online.
                    <div className={style.hidden}>
                      {backBtn}
                    </div>
                  </div>
                  <a className={style.link} href="https://github.com/html1101/Bias-Insight" target="_blank">View Code</a>
                  <div className={style.awardLocation}>
                    <a href="https://www.duq.edu/research/centers-and-institutes/grefenstette-center/hacking4humanity.php" target="_blank">
                      <img src={hate} />
                    </a>
                  </div>
                  <img src={biasInsight} />
                </div>
                <div
                  className={`${style.project} ${style.reverse} ${selectedProject === Projects.Dna3D ? style.active : ""}`}
                  onClick={() => setSelectedProject(Projects.Dna3D)}>
                  <Wavy className={style.wavy} />
                  <div className={style.info}>
                    <div className={style.projName}>3D DNA Model</div>
                    3D DNA model created from scratch.
                    <div className={style.hidden}>
                      {backBtn}
                      <div>
                        <b>Tools Used: </b>
                        ThreeJS{dot}HTML/CSS/JS
                      </div>
                    </div>
                  </div>
                  <a className={style.link} href="https://codepen.io/Rainy123/pen/qBBLGKO" target="_blank">View Code</a>
                  <img src={dna} className={style.cover} />
                </div>
              </div>

              <div className={style.desc}>
                <div className={style.dot}></div>&#x3C; Lab /&#x3E;
              </div>
              <i>Recent research projects I've done!</i>
              <hr />
              <div className={style.researchProject}>
                <div className={style.projName}>MAS Mechanism Analysis</div>
                <br />
                <span>Identified and analyzed transcription factors binding locations associated with type II and III multiple autoimmune syndrome diseases.</span>

                <div className={style.lists}>
                  <a className={style.code} href="https://github.com/html1101/RELI-Analysis" target="_blank">Code</a>
                  <a className={style.paper} href="./mechanisms.pdf" target="_blank">Paper</a>
                </div>
              </div>
              <div className={style.researchProject}>
                <div className={style.projName}>Advancing Autoimmune Disease Diagnosis Using AI Gene Expression Analysis</div>
                <br />
                <span>Created model to predict lupus using gene expression profiles + AI with 99.13% testing accuracy.</span>
                <div className={style.lists}>
                  <a className={style.code} href="https://github.com/html1101/SLE-Diagnosis" target="_blank">Code</a>
                  <a className={style.paper} href="./ADTreatment.pdf" target="_blank">Paper</a>
                  <a className={style.website} href="https://isef.net/project/cbio009-ad-diagnosis-using-ai-gene-expression-analysis" target="_blank">Website</a>
                </div>
              </div>
              <div className={style.researchProject}>
                <div className={style.projName}>mRNA Sequence Design Using Optimization Techniques</div>
                <br />
                <span>Computationally created mRNA vaccines that encode for the spike glycoprotein of the SARS-CoV-2 virus using stochastic gradient descent.</span>
                <div className={style.lists}>
                  <a className={style.code} href="https://github.com/html1101/Science-Fair-2020-2021" target="_blank">Code</a>
                  <a className={style.paper} href="./mRNA.pdf" target="_blank">Paper</a>
                </div>
              </div>
              <div className={style.researchProject}>
                <div className={style.projName}>Single-Cell Perturbation Analysis</div>
                <br />
                <span>Analyzed single cell drug-induced perturbations using Principal Component Analysis.</span>
                <div className={style.lists}>
                  <a className={style.code} href="https://github.com/html1101/Single-Cell-Perturbation-Analysis" target="_blank">Code</a>
                  <a className={style.paper} href="./perturbationAnalysis.pdf" target="_blank">Paper</a>
                </div>
              </div>
              <div className={style.researchProject}>
                <div className={style.projName}>Predicting and Understanding Genomic Sequences Using Neural Networks</div>
                <br />
                <span>Found chromatin features of a genomic sequence with varying input lengths using AI.</span>
                <div className={style.lists}>
                  <a className={style.code} href="https://github.com/html1101/Science-Fair-2019-2020" target="_blank">Code</a>
                  <a className={style.paper} href="./genomicSequences.pdf" target="_blank">Paper</a>
                </div>
              </div>
              <div className={style.researchProject}>
                <div className={style.projName}>Mitigating Gun Violence using ML</div>
                <br />
                <span>Open-source software that can detect guns in real time and notify authorities for high-risk areas such as schools and churches.</span>
                <div className={style.lists}>
                  <a className={style.code} href="https://github.com/html1101/Gun-Detection-GUI" target="_blank">Code</a>
                  <a className={style.paper} href="./gunViolence.pdf" target="_blank">Paper</a>
                </div>
              </div>
              <div className={style.researchProject}>
                <div className={style.projName}>Predicting Infectious Disease Spread Using Nonlinear Models</div>
                <br />
                <span>Predicting the spread of infectious diseases, specifically influenza, across the US.</span>
                <div className={style.lists}>
                  <a className={style.code} href="https://github.com/html1101/Science-Fair-2018-2019" target="_blank">Code</a>
                </div>
              </div>

              <div className={style.desc}>
                <div className={style.dot}></div>&#x3C; Contact /&#x3E;
              </div>
              Feel free to reach out to me anytime at <a href="mailto:sarahcross@cmu.edu">sarahcross@cmu.edu</a>!
              {links}
            </div>
          </div>
          {/* Other things:
            * - Paper on AI + Health disparities (https://github.com/html1101/Science-Fair-2019-2020/blob/master/AI%20and%20Health%20Disparities.pdf)
            * - 
            */}
        </div>
      </div>
    </div>
  )
}

export default App;
