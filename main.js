const canvas = document.getElementById("screen");
const g = canvas.getContext('2d');

let speed = 10, drag = 100, velX = 0, velY = 0;
let x = 0, y = 0;

function loop() {
 
  x += velX;
  y += velY;
 
  velX += speed/drag;
  velX = clamp(velX, -speed, speed);
 
  velY += speed/drag;
  velY = clamp(velY, -speed, speed);
 
  g.fillStyle = "#ffffff";
  g.fillRect(0, 0, 800, 600);
  
  g.fillStyle = "#909090";
  g.fillRect(x, y, 32, 32);
  
}

function clamp(val, min, max) {
 
  return Math.min(max, Math.max(val, min));
 
}
  
setInterval(loop, 12);
