var canvas;
var c;
var mousePos = {x:0, y:0};

document.addEventListener('DOMContentLoaded', function () {
    canvas = document.getElementById('eyeball');
    c = canvas.getContext('2d');

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    canvas.addEventListener('mousemove', function(evt) {
        mousePos = getMousePos(canvas, evt);
    }, false);

    start();
    loop();
})


var eyes;

function start(){
    var size = 3;
    c.filter = 'blur(15px)';
    c.canvas.width  = window.innerWidth;
    c.canvas.height = window.innerHeight;
    var cen = {x:c.canvas.width/2, y:c.canvas.height/2}


    eyes = [new Eyes({x:cen.x , y:cen.y }, size, 10, 10)];

    for(var i = 0; i < 10; i++){
        eyes.push(new Eyes({x:c.canvas.width * Math.random(), y:c.canvas.height * Math.random()}, size, 10, 10));
    }

}

function loop(){
    c.canvas.width  = window.innerWidth;
    c.canvas.height = window.innerHeight;

    c.clearRect(0, 0, c.canvas.width, c.canvas.height);
    c.fillStyle = fillStyle = "#000000";
    c.fillRect(0, 0, c.canvas.width, c.canvas.height);

    for(var i = 0; i < eyes.length; i++){
        eyes[i].drawEyes();
    }

    requestAnimationFrame(loop);
}

class Eyes{

    constructor(position, size, eye_width, look_size){
        this.position = position;
        this.size = size;
        this.eye_width = eye_width
        this.look_size = look_size;
    }

    drawEyes(){
        var angle = Math.atan2(mousePos.y - this.position.y, mousePos.x - this.position.x);

        c.beginPath();
        c.strokeStyle = "#FF0000";
        c.arc(this.position.x, this.position.y, this.size + 2* this.look_size, 0, 2 * Math.PI);
        c.stroke();

        c.shadowColor = "transparent";

        c.beginPath();
        c.fillStyle = "#FF0000";
        c.arc(this.position.x - this.eye_width/2 + this.look_size * Math.cos(angle), this.position.y + this.look_size * Math.sin(angle), this.size, 0, 2 * Math.PI);
        c.fill()

        c.beginPath();
        c.fillStyle = "#FF0000";
        c.arc(this.position.x + this.eye_width/2 + this.look_size * Math.cos(angle), this.position.y + this.look_size * Math.sin(angle), this.size, 0, 2 * Math.PI);
        c.fill()


    }

}
