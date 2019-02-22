function mod(n, m) {
  return ((n % m) + m) % m;
}

class Object{
    constructor(room, size, position){
        this.room = room;

        this.roomPosition = {x:0, y:0};
        this.roomSubPosition = {x:0, y:0};

        this.position = function(){
            return room.map2canvas({x:this.roomPosition.x + this.roomSubPosition.x,
                                    y:this.roomPosition.y + this.roomSubPosition.y})
        };

        this.components = [];
        this.size = size;
        this.setPosition(position);
    }

    addComponent(component){
        this.components.push(component);
    }

    start(){
        for(let i = 0; i < this.components.length; i++){
            this.components[i].start();
        }
    }

    loop(){
        for(let i = 0; i < this.components.length; i++){
            this.components[i].loop();
        }
    }

    timedLoop(){
        for(let i = 0; i < this.components.length; i++){
            this.components[i].timedLoop();
        }
    }

    setPosition(position){
        this.roomPosition.x = Math.trunc(position.x);
        this.roomPosition.y = Math.trunc(position.y);
        this.roomSubPosition.x = position.x%1;
        this.roomSubPosition.y = position.y%1;

        this.roomPosition.x = mod(this.roomPosition.x, this.room.map.length);
        this.roomPosition.y = mod(this.roomPosition.y, this.room.map[0].length);
    }
}
