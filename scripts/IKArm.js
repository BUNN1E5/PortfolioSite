var canvas;
var c;

var mousePos = {x:0, y:0};

var bones;
var endbone;
//Runs just before loop
function start(){
    c.canvas.width  = window.innerWidth;
    c.canvas.height = window.innerHeight;

    bones = [new Bone({x:c.canvas.width/2, y:c.canvas.height/2}, 0, 0)];
    bones.push(new Bone(bones[bones.length - 1], 50, 10));
    bones.push(new Bone(bones[bones.length - 1], 50, 7));
    bones.push(new Bone(bones[bones.length - 1], 50, 5));
    bones.push(new Bone(bones[bones.length - 1], 50, 2));
    endbone = bones[bones.length - 1];
}

var loopCount = 0;

var distance = 0, angle = 0;

function loop(){

    c.canvas.width  = window.innerWidth;
    c.canvas.height = window.innerHeight;

    c.clearRect(0, 0, c.canvas.width, c.canvas.height);
    //bones[1].angle = Math.atan2(-bones[1].position.y + mousePos.y, -bones[1].position.x + mousePos.x);
    //endbone.recalculate(true);
    //endbone.localangle =  Math.atan2(-endbone.position.y + mousePos.y, -endbone.position.x + mousePos.x);
    bones[0].recalculate(false);
    distance = Math.sqrt((mousePos.x - bones[0].position.x) * (mousePos.x - bones[0].position.x) + (mousePos.y - bones[0].position.y) * (mousePos.y - bones[0].position.y));
    angle = Math.atan2(mousePos.y - bones[0].position.y, mousePos.x -bones[0].position.x);


    endbone.localangle = Math.atan2(mousePos.y - endbone.position.y, mousePos.x -endbone.position.x);
    for(var i = 1; i < bones.length; i++){
        bones[i].recalculate(false);
        bones[i].localangle =  (endbone.localangle - angle)/bones.length;
        bones[i].localangle = angle;
        drawJoint(bones[i].position, bones[i].width);
        drawBones(bones[i].position, bones[i].angle, bones[i].width, bones[i].length);
    }

    //console.log("X : " + endbone.end.x + " , Y : "  + endbone.end.y);

    //console.log("X : " + endbone.position.x + " , Y : "  + endbone.position.y);
    //console.log("X : " + endbone.parent.end.x + " , Y : "  + endbone.parent.end.y);
    //console.log(endbone.angle * 57.2958);


    loopCount+=1;
    requestAnimationFrame(loop);
}

function drawConnectedLine(points, width){
    c.beginPath();
    var angle = Math.atan2((end.y - start.y),(end.x - start.x)) + Math.PI / 2;
    c.moveTo(start.x - width * Math.cos(angle), start.y - width * Math.sin(angle));
    c.lineTo(start.x + width * Math.cos(angle), start.y + width * Math.sin(angle))
    c.lineTo(end.x + width * Math.cos(angle), end.y + width * Math.sin(angle));
    c.lineTo(end.x - width * Math.cos(angle), end.y - width * Math.sin(angle));
    //c.lineTo(start.x - width * Math.cos(angle), start.y - width * Math.sin(angle));
    //console.log("draw line from " + "[" + start.x + "," + start.y + "]" + " to " + "[" + end.x + "," + end.y + "]")
    c.closePath();
    c.stroke();
    c.lineWidth = 5;
    c.fillStyle = '#8ED6FF';
    c.fill();
}

function drawJoint(position, radius){
    c.beginPath();
    c.arc(position.x, position.y, radius, 0, Math.PI * 2);
    c.stroke();
}

function drawBones(position, angle, width, length){
    c.beginPath();
    var theta = angle + Math.PI / 2; //Directly Perpindicular from the bone's angle
    c.moveTo(position.x - width * Math.cos(theta), position.y - width * Math.sin(theta));
    c.lineTo(position.x + width * Math.cos(theta), position.y + width * Math.sin(theta));
    c.lineTo(position.x + length * Math.cos(angle) + width * Math.cos(theta), position.y + length * Math.sin(angle) + width * Math.sin(theta)); //Very inportant that we use angle vs theta
    c.lineTo(position.x + length * Math.cos(angle) - width * Math.cos(theta), position.y + length * Math.sin(angle) - width * Math.sin(theta));
    c.lineTo(position.x - width * Math.cos(theta), position.y - width * Math.sin(theta));
    c.stroke();
}

document.addEventListener('DOMContentLoaded', function () {
    canvas = document.getElementsByClassName('overlay-canvas')[0];
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

class Bone{

    //hAngle -> High angle or max angle
    //lAngle -> Low Angle or min angle
    constructor(parent, length, width, hAngle, lAngle){
        this.parent = parent;
        this.length = length;
        this.width = width;
        this.localangle = 0;
        this.angle = 0;
        this.end = {x:0 , y:0};
        this.distance = 0;
        //this.

        if(parent instanceof Bone){
            this.position = {x:parent.end.x, y:parent.end.y};
        } else {
            this.position = parent;
        }
    }


    recalculateEnds(reverseList){
        this.end = {x:this.position.x + this.length * Math.cos(this.angle), y:this.position.y + this.length * Math.sin(this.angle)};
        if(this.parent instanceof Bone && reverseList){
            this.parent.recalculateEnds(true);
        }
    }

    recalculatePositions(reverseList){
        if(this.parent instanceof Bone){
            this.position = {x:this.parent.end.x, y:this.parent.end.y};
            if(reverseList)
                this.parent.recalculatePositions(true);
        } else {
            this.position = this.parent;
        }
    }

    recalculateAngles(reverseList){
        if(this.parent instanceof Bone){
            this.angle = this.localangle + this.parent.angle;
            if(reverseList)
                this.parent.recalculateAngles(true);
        }
    }

    recalculate(reverseList){
        this.recalculatePositions(reverseList);
        this.recalculateEnds(reverseList);
        this.recalculateAngles(reverseList);
    }

    //For some reason this isn't working
    //Draws all of bones in the sequence
    drawBones(){
        c.beginPath();
        var theta = this.angle + Math.PI / 2; //Directly Perpindicular from the bone's angle
        c.moveTo(this.position.x - this.width * Math.cos(theta), this.position.y - this.width * Math.sin(theta));
        c.lineTo(this.position.x + this.width * Math.cos(theta), this.position.y + this.width * Math.sin(theta));
        c.lineTo(this.position.x + this.length * Math.cos(this.angle) + this.width * Math.cos(theta), this.position.y + this.length * Math.sin(this.angle) + this.width * Math.sin(theta)); //Very inportant that we use angle vs theta
        c.lineTo(this.position.x + this.length * Math.cos(this.angle) - this.width * Math.cos(theta), this.position.y + this.length * Math.sin(this.angle) - this.width * Math.sin(theta));
        c.lineTo(this.position.x - this.width * Math.cos(theta), this.position.y - this.width * Math.sin(theta));

        if(this.parent instanceof Bone){
            this.parent.drawBones();
        }
        //console.log("draw line from " + "[" + start.x + "," + start.y + "]" + " to " + "[" + end.x + "," + end.y + "]")
        c.fill();
    }
}
