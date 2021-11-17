class Mod {

    constructor(name, key, category) {

        this.name = name;
        this.key = key;
        this.category = category;

    }

    onEnable() {

    }

    onDisable() {

    }

    onUpdate(me) {

    }

    set toggle() {

        this.toggle = !this.toggle;

        if(this.toggle)
            this.onEnable();

        else
            this.onDisable();

    }

}