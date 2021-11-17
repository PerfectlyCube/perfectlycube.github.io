import { forward, strafe, updateMod } from "./game.js";

class Player {

    constructor(x, y) {
  
      this.x = x;
      this.y = y;
  
    }
  
    update() {
  
      g.fillStyle = "#afafaf";
      g.fillRect(x, y, 64, 64);
  
      this.movePlayer(forward * 4, strafe * 4);

    }
  
    set setPosition(x, y) {
  
      this.x = x;
      this.y = y;
  
    }
  
    movePlayer(x, y) {
  
      em = new ModEventMove(x, y);
      updateMod(em);
      this.setPosition(this.x + em.x, this.y + em.y);
  
    }
  
  }