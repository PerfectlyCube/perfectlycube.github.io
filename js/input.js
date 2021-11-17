import { up, down, right, left } from "./game.js";

function keyinput(toggle, e) {

    if(e.key === "ArrowUp")
        up = toggle;

    if(e.key === "ArrowRight")
        right = toggle;

    if(e.key === "ArrowLeft")
        left = toggle;

    if(e.key === "ArrowDown")
        down = toggle;

}

addEventListener("keydown", (e) => { keyinput(true, e) });
addEventListener("keyup", (e) => { keyinput(false, e) });