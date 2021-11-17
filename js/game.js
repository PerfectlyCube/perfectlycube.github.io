const canvas = document.getElementById("screen");
const g = canvas.getContext('2d');

export let down = false,
    left = false,
    right = false,
    up = false;

export let forward = 0.0, strafe = 0.0;

let mods = []

function update() {

  g.fillStyle = "#ffffff";
  g.fillRect(0, 0, 800, 600);

  forward = (down? 1.0 : (up? -1.0 : 0.0));
  strafe = (right? 1.0 : (left? -1.0 : 0.0));

}

export function updateMod(me) {

  for(let i = 0; i < mods.length; i++) {

    mods[i].onUpdate(me);

  }

}