var canvas;
var c;
var mousePos = {x:0, y:0};

var phsyicsLoop = .0002;
var event;
/*

    Static Vars because JS doesn't have it

*/
var colliders = [];

document.addEventListener('DOMContentLoaded', function () {
    canvas = document.getElementById('canvas');
    c = canvas.getContext('2d');
    c.canvas.width *= 4;
    c.canvas.height *= 4;
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

    document.addEventListener('keydown', function(evt){
        char.jump(evt, "ArrowUp");
        char.move(evt, "ArrowLeft", -1);
        char.move(evt, "ArrowRight", 1);
    },false);

    document.addEventListener('keyup', function(evt){
        char.move(evt, "ArrowLeft", 0);
        char.move(evt, "ArrowRight", 0);
    },false);

    start();
    loop();
    timedLoop();
})

var obj;
var room;
var char;
function start(){
    room = new Room(c);
    obj = new Object(room, {x:1, y:1}, room.canvas2map({x:canvas.width/2, y:canvas.height/2}));

    obj.addComponent(new Renderer(c, obj, "green"))
    let p = new PhysicsCollider(obj, colliders, "test", obj.size);
    char = new PlayerController(p);
    obj.addComponent(p);
    obj.start();
}

function loop(){
    c.clearRect(0, 0, canvas.width, canvas.height);


    obj.loop();

    room.renderRoom();

    requestAnimationFrame(loop);
}

function timedLoop(){


    obj.timedLoop();
    setTimeout(timedLoop, phsyicsLoop * 1000);
}
