const canvas = document.getElementById("screen");
const g = canvas.getContext('2d');

let speed = 6,
  drag = 10,
  velX = 0,
  velY = 0;
let x = 0,
  y = 0;

const Category = {

  COMBAT: 0,
  MOVEMENT: 1,
  PLAYER: 2,
  VISUAL: 3,

}

var controls = {

  down: false,
  left: false,
  right: false,
  up: false

}

function loop() {

  x += velX;
  y += velY;

  velX = clamp(velX, -speed, speed);
  velY = clamp(velY, -speed, speed);

  g.fillStyle = "#ffffff";
  g.fillRect(0, 0, 800, 600);

  if (controls.down)
    velY += speed / drag;

  if (controls.left)
    velX -= speed / drag;

  if (controls.right)
    velX += speed / drag;

  if (controls.up)
    velY -= speed / drag;

  if (!controls.left && !controls.right)
    velX += velX / -drag;

  if (!controls.up && !controls.down)
    velY += velY / -drag;

  g.fillStyle = "#909090";
  g.fillRect(x, y, 32, 32);

  x = clamp(x, 0, 800 - 32);
  y = clamp(y, 0, 600 - 32);

}

function clamp(val, min, max) {

  return Math.max(min, Math.min(val, max));

}

setInterval(loop, 12);

addEventListener("keydown", function(e) {

  if (e.key == "ArrowUp")
    controls.up = true;

  if (e.key == "ArrowRight")
    controls.right = true;

  if (e.key == "ArrowLeft")
    controls.left = true;

  if (e.key == "ArrowDown")
    controls.down = true;

});

addEventListener("keyup", function(e) {

  if (e.key == "ArrowUp")
    controls.up = false;

  if (e.key == "ArrowRight")
    controls.right = false;

  if (e.key == "ArrowLeft")
    controls.left = false;

  if (e.key == "ArrowDown")
    controls.down = false;

});
