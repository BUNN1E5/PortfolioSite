class Renderer{

    constructor(context, object, color){
        this.c = context;
        this.object = object;
        this.color = color;
    }

    render(){
        this.c.beginPath();
        this.c.fillStyle = this.color;

        for(let i = -1; i <= 1; i++){
            for(let j = -1; j <= 1; j++){
                let offX = (c.canvas.width) * i;
                let offY = (c.canvas.height) * j;

                this.c.rect(offX + this.object.position().x - this.object.size.x * this.object.room.scale.x /2,
                        offY + this.object.position().y - this.object.size.y * this.object.room.scale.y /2,
                        this.object.size.x * this.object.room.scale.x,
                        this.object.size.y * this.object.room.scale.y);
            }
        }




        this.c.fill();
    }

    start(){
        this.render();
    }

    loop(){
        this.render();
    }

    timedLoop(){}
}
