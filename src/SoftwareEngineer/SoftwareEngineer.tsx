import style from "./SoftwareEngineer.module.css";
import TimeList from "./TimeList/TimeList";

export default function SoftwareEngineer () {
    return <div className={style.projectList}>
        <div className={style.projects}>Projects</div>
        <TimeList />
    </div>;
}