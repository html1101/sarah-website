import { useEffect, useRef } from "react";
import style from "./GradientBackground.module.css";

type Position = {
    x: number,
    y: number,
    deg: number,
    dir?: number,
    radius: number,
    rand?: number,
    pos?: { x: number, y: number }
}

export default function GradientBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const intensity = 1;
    useEffect(() => {
        window.addEventListener("resize", () => {
            // We changed the window size, change!
            const b = canvasRef.current;
            if(b) {
                b.width = window.innerWidth;
                b.height = window.innerHeight;
            }
        });
    }, []);

    useEffect(() => {
        if (!canvasRef.current) return;
        const b = canvasRef.current,
            c = b.getContext("2d");
        if(!c) return;

        b.width = window.innerWidth;
        b.height = window.innerHeight;
        let n = 10;

        let animate: number | null = null;
        const movementTowards = { x: b.width / 2, y: b.height / 2 };

        const curveBetweenPoints = (old_points: Position[]) => {
            const points = [...old_points];
            // move to the first point
            c.beginPath();
            points.push(points[0])
            const xc = (points[0].x + points[1].x) / 2;
            const yc = (points[0].y + points[1].y) / 2;
            c.moveTo(xc, yc);

            for (var i = 1; i < points.length - 1; i++) {
                const xc = (points[i].x + points[i + 1].x) / 2;
                const yc = (points[i].y + points[i + 1].y) / 2;
                c.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
            }
            c.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }

        let expand_levels = /*Math.round(Math.random() * 3) + */7;
        const GRAD_LEVEL = 20;

        let points: Position[] = []
        let extra: any[] = []
        let relative_list = { x: b.width / 2, y: b.height / 2 };

        const animateCircle = (radius: number, squiggle_level: number, hsl_level: number) => {
            const prev = new Date().getMilliseconds();
            relative_list = { x: b.width / 2, y: b.height / 2 };
            c.clearRect(0, 0, b.width, b.height);
            c.shadowColor = "rgba(0, 0, 0, 0.3)";
            c.shadowBlur = 15;
            // 	Animate the thingy
            // Go through points + move slightly by a random amt
            for (let i = 0; i < points.length; i++) {
                let { deg, dir } = points[i];
                const level = points[i].radius;
                if (!dir) {
                    dir = (Math.random() - 0.5)*intensity;
                }
                deg = Math.PI * ((i - n) / n);
                const pos = {
                    x: relative_list.x + Math.cos(deg)*220,
                    y: relative_list.y + Math.sin(deg)*75-50
                };
                const adjusted_dir = level + dir > squiggle_level + radius ? (Math.abs((level + dir) - (radius + squiggle_level * 2)) / (level + dir) + 0.5) : 1;
                const new_level_amt = level + dir * adjusted_dir;
                if (new_level_amt < radius || new_level_amt > squiggle_level * 2 + radius) {
                    dir *= -1;
                    dir = dir < 0 ? -Math.random()*intensity : Math.random()*intensity;
                }
                const new_pt = {
                    x: Math.cos(deg) * new_level_amt + pos.x,
                    y: Math.sin(deg) * new_level_amt + pos.y,
                    radius: new_level_amt,
                    pos,
                    dir,
                    deg
                }
                points[i] = new_pt;

                for (let ii = 0; ii < expand_levels; ii++) {
                    const rand = extra[ii][i].rand;
                    extra[ii][i] = {
                        x: Math.cos(deg) * (new_level_amt + (ii + 1) * GRAD_LEVEL + rand) + pos.x,
                        y: Math.sin(deg) * (new_level_amt + (ii + 1) * GRAD_LEVEL + rand) + pos.y,
                        rand,
                        deg
                    }
                }
            }

            c.fillStyle = `hsl(${hsl_level}, 75%, 75%)`;
            curveBetweenPoints(points);
            c.fill();

            for (let i = extra.length - 1; i >= 0; i--) {
                c.fillStyle = `hsla(${hsl_level + i * 5}, 75%, 75%, ${((extra.length - i) / extra.length)})`;
                curveBetweenPoints(extra[i]);
                c.fill();
            }

            /*c.beginPath();
            for(let i = 0; i < points.length; i++) {
                // c.beginPath();
                const pos = points[i].pos;
                if(!pos) continue;
                c.strokeRect(pos.x, pos.y, 10, 10);
                // c.moveTo(relative_list[i].x, relative_list[i].y);
                // c.lineTo(points[i].x, points[i].y);
            }
            c.beginPath();*/
            // console.log(new Date().getMilliseconds() - prev);

            animate = requestAnimationFrame(() => {
                animateCircle(radius, squiggle_level, hsl_level/* - 0.1*/);
            });
        }

        // Draw squiggly circle
        const squiggleCircle = (posa: {x: number, y: number}, radius: number, squiggle_level: number) => {
            // 	Create n points
            c.clearRect(0, 0, b.width, b.height);
            c.beginPath();
            let points1 = [];
            let extrapts: Position[][] = new Array(expand_levels).fill(0).map(e => []);
            for (let i = 0; i < n * 2; i++) {
                // const pos = relative_list[i];
                const level = radius + Math.random() * squiggle_level;
                const deg = Math.PI * (i / n);
                const pos = {
                    x: posa.x + (i - n)*50,
                    y: posa.y
                }
                let orig_pos = {
                    x: Math.cos(deg) * level + pos.x,
                    y: Math.sin(deg) * level + pos.y,
                    radius: level,
                    pos,
                    deg
                };
                points1.push(orig_pos);
                // 		Now expand outwards
                for (let ii = 0; ii < expand_levels; ii++) {
                    const rand_amt = (Math.random() * GRAD_LEVEL) / 1.5;
                    extrapts[ii].push({
                        x: Math.cos(deg) * (level + (ii + 1) * GRAD_LEVEL + rand_amt) + pos.x,
                        y: Math.sin(deg) * (level + (ii + 1) * GRAD_LEVEL + rand_amt) + pos.y,
                        radius: level,
                        rand: rand_amt,
                        pos: posa,
                        deg
                    });
                }
            }
            const hsl_level = 220; /* Math.random() * 100 */
            c.shadowColor = "rgba(0, 0, 0, 0.3)";
            c.shadowBlur = 15;
            for (let i = extrapts.length - 1; i >= 0; i--) {
                c.fillStyle = `hsla(${hsl_level + i * 5}, 75%, 75%, ${((extrapts.length - i) / extrapts.length)})`;
                curveBetweenPoints(extrapts[i]);
                c.fill();
            }
            c.fillStyle = `hsl(${hsl_level}, 75%, 75%)`;
            curveBetweenPoints(points1);
            c.fill();

            points = points1;
            extra = extrapts;
            return animateCircle(radius, squiggle_level, hsl_level);
        }

        const amt = Math.min(b.width / 50, b.height / 50);

        /*squiggleCircle({
            x: movementTowards.x, y: movementTowards.y
        }, amt, amt * 3);*/

        const startCircle = (x: number, y: number) => {
            if(animate) cancelAnimationFrame(animate);
            n = Math.round(Math.random() * 10) + 10;
            // Create random number of expand_levels
            // expand_levels = Math.round(Math.random() * 3) + 7;
            squiggleCircle({
                x, y
            }, amt, amt * 3);
        }
        startCircle(b.width / 2, b.height / 2);

        /*b.addEventListener("mousedown", (evt) => {
            startCircle(evt.clientX, evt.clientY);
        });*/

    }, [canvasRef]);

    return <canvas
        ref={canvasRef}
        className={style.bg}
        onResize={() => {
            // We changed the window size, change!
            const b = canvasRef.current;
            if(b) {
                b.width = window.innerWidth;
                b.height = window.innerHeight;
            }
        }}
    ></canvas>;
}