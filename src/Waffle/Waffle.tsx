import { useEffect, useRef } from "react"
import style from "./Waffle.module.css";

export default function Waffle() {
    // Create a waffle design with canvas
    const can = useRef<HTMLCanvasElement | null>(null);
    const gridLines = 5;

    useEffect(() => {
        window.addEventListener("resize", () => {
            // We changed the window size, change!
            const canvas = can.current;
            if(canvas) {
                canvas.width = canvas.clientWidth;
                canvas.height = canvas.clientHeight;
            }
        });
    }, []);
    useEffect(() => {
        // When can is initialized, setup
        const canvas = can.current;
        if(!can || !canvas) return;

        const c = canvas.getContext("2d");
        if(!c) return;
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        const { width, height } = canvas;

        // Create grid:
        const incAmt = Math.min(width, height) / gridLines;
        for(let i = 0; i <= gridLines; i++) {
            c.strokeStyle = "white";
            c.beginPath();
            c.moveTo(i * incAmt, height);
            c.lineTo(0, height - i * incAmt);
            c.stroke();
        }

        // Now draw across:
        for(let i = 0; i <= gridLines * 2; i++) {
            c.strokeStyle = "white";
            c.beginPath();
            c.moveTo(0, i * incAmt);
            c.lineTo(i * incAmt / 2, i * incAmt / 2);
            c.stroke();
        }
    }, [can]);
    return <canvas ref={can} className={style.waffle}>
    </canvas>
}