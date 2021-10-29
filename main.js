const canvas = document.getElementById("screen");
const g = canvas.getContext('2d');

function loop() {
 
  g.fillStyle = "#ffffff";
  g.fillRect(0, 0, 800, 600);
  
  g.fillStyle = "#000000";
  g.fillRect(0, 0, 32, 32);
  
}
  
setInterval(loop, 12);
