import { useState } from "react";
import style from "./TimeList.module.css";

export default function TimeList () {
    const [steps, setSteps] = useState(0);

    const ptzOptics = <>
    <h3>Software Engineer</h3>
    <i>Engineer at PTZOptics for 3 years</i>
    <div>
        <h4>Projects</h4>
        <div className={style.projectList}>
            
        </div>
    </div></>;

    const researcher = <>
    <h3>Researcher</h3>
    <i>Worked on several projects in the Computational Biology field.</i>
    <div>
        <h4>Projects</h4>
        <div className={style.projectList}>
            
        </div>
    </div></>;

    return <div className={style.timeList}>
        <div className={style.processList}>
            <div className={style.dot}></div>
            <div className={style.dot}></div>
            <div className={style.dot}></div>
        </div>
        <div className={style.content}>
            {ptzOptics}
        </div>
    </div>;
}