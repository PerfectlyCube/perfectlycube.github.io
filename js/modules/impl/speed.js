class SpeedMod extends Mod {

    constructor() {

        super("Speed", 'b', 0);

    }

    onUpdate(me) {

        if(me instanceof ModEventMove) {

            me.setX();

        }

    }

}