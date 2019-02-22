class PlayerController{

    constructor(physics){
        this.p = physics;
    }


    jump(event, key){
        if(event.key == key)
            this.p.velocity.y = -.05;
    }

    move(event, key, direction){
        if(event.key == key)
            this.p.velocity.x = direction * .05;
    }

    start(){}

    loop(){}

    timedLoop(){}
}
