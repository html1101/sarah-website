// import { useState } from 'react'
import style from "./App.module.css"

function App() {
  return (
    <>
      <div className={style.topbar}>
        <div>Home</div>
        <div>Projects</div>
        <div>Contact</div>
        <div>Other</div>
      </div>
      <div className={style.bg}>
        <div className={style.center}>
          Hi, I'm
          <div className={style.big_txt}>SARAH CROSS</div>
        </div>
        <div className={style.info}>
          <div className={style.info_card}>
            Software Engineer at
            <div>PTZOptics</div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={`bi bi-chevron-compact-down ${style.arrow}`}
            viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
          </svg>
          <div className={style.info_card}>
            Student at
            <div>Carnegie Mellon</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
