const canvas = document.getElementById("screen");
const g = canvas.getContext('2d');

let speed = 10, drag = 100, velX = 0, velY = 0;
let x = 0, y = 0;

var controls = {
 
  down: false,
  left: false,
  right: false,
  up: false
 
}

function loop() {
 
  g.fillStyle = "#ffffff";
  g.fillRect(0, 0, 800, 600);
  
  if(controls.down)
    y += 4;
 
  g.fillStyle = "#909090";
  g.fillRect(x, y, 32, 32);
  
}

function clamp(val, min, max) {
 
  return Math.min(max, Math.max(val, min));
 
}
  
setInterval(loop, 12);

addEventListener("keydown", function(e) {
 
 if(e.key == "s")
    controls.down = true;
  
});

addEventListener("keyup", function(e) {
 
 if(e.key == "s")
   controls.down = false;
 
});
