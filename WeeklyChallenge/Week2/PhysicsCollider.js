function mod(n, m) {
  return ((n % m) + m) % m;
}

class PhysicsCollider{
    constructor(object, colliders, id, size, gravity = {x:0, y:1}, drag=.1){
        this.object = object;
        this.gravity = gravity;
        this.velocity = {x:0, y:0}
        this.maxVelocity = {x: 2, y:2};
        this.drag = .5;

        this.id = id;
        this.colliders = colliders;
        this.size = size;
        colliders.push(this);
    }

    checkStatic(){
        this.object.room.c.beginPath();
        this.object.room.c.fillStyle = "red";
        for(let i = -1; i <= 1; i++){
            for(let j = -1; j <= 1; j++){
                //if(i == 0 && j == 0)
                    //continue;

                let x = mod(this.object.roomPosition.x + i, this.object.room.map.length);
                let y = mod(this.object.roomPosition.y + j, this.object.room.map[0].length);

                //Degugging remove me!
                let pos = this.object.room.map2canvas({x:x, y:y});


                if(this.object.room.map[x][y] == 1){
                    this.object.room.c.rect(pos.x, pos.y, this.object.room.scale.x, this.object.room.scale.y);
                    if(i == -1)
                        if(this.object.roomSubPosition.x > .5)
                            continue;
                    if(i == 1)
                        if(this.object.roomSubPosition.x < .5)
                            continue;


                    if(j == -1)
                        if(this.object.roomSubPosition.y > .5)
                            continue;
                    if(j == 1)
                        if(this.object.roomSubPosition.y < .5)
                            continue;

                    if(j != 0)
                        this.velocity.y -= Math.abs(j) > 0 && this.velocity.y * j > 0 ? 1.2 * this.velocity.y : 0;

                    if(Math.abs(i) != Math.abs(j))
                        this.velocity.x -= Math.abs(i) > 0 && this.velocity.x * i > 0 ? 1.2 * this.velocity.x : 0;

                    //console.log("(" + this.object.roomPosition.x + "," + this.object.roomPosition.y + ") (" + x + "," + y + ")");

                }
            }
        }
        this.object.room.c.fill();
    }

    checkDynamic(){
        for(let i = 0; i < colliders.length; i++){

        }
    }


    solveGravity(){
        this.velocity.x += this.gravity.x * phsyicsLoop;
        this.velocity.y += this.gravity.y * phsyicsLoop;
    }


    solvePosition(){
        let x = this.object.roomPosition.x + this.object.roomSubPosition.x + this.velocity.x;
        let y = this.object.roomPosition.y + this.object.roomSubPosition.y + this.velocity.y;
        this.object.setPosition({x:x, y:y});
    }


    solveDrag(){
        this.velocity.x -= this.velocity.x * this.drag * phsyicsLoop;
        this.velocity.y -= this.velocity.y * this.drag * phsyicsLoop;
    }

    start(){

    }

    loop(){ //Need it anyways

    }

    timedLoop(){
        this.solveGravity();
        this.checkStatic();
        this.solveDrag();

        //Solve collisions AFTER position
        this.solvePosition();
    }

}
