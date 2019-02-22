function rotate(matrix) { //Stole from https://codereview.stackexchange.com/questions/186805/rotate-an-n-%C3%97-n-matrix-90-degrees-clockwise
    let result = [];
    for(let i = 0; i < matrix[0].length; i++) {
        let row = matrix.map(e => e[i]).reverse();
        result.push(row);
    }
    return result;
};

class Room{

    constructor(context){
        this.map = [[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                    [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                    [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                    [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                    [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                    [1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1]];

        this.map = rotate(this.map);
        this.map = rotate(this.map);
        this.map = rotate(this.map);

        this.c = context;

        let x = c.canvas.width / this.map.length;
        let y = c.canvas.height / this.map[0].length;
        this.scale = {x:x, y:y};
    }

    map2canvas(position){
        return {x:position.x * this.scale.x, y:position.y * this.scale.y};
    }

    canvas2map(position){
        return {x:position.x / this.scale.x, y:position.y / this.scale.y};
    }

    renderRoom(){
        this.c.beginPath();
        this.c.fillStyle = "black";
        for(let i = 0; i < this.map.length; i++){
            for(let j = 0; j < this.map[i].length; j++){
                if(this.map[i][j] == 1){
                    let pos = this.map2canvas({x:i, y:j});
                    this.c.rect(pos.x, pos.y,
                                this.scale.x, this.scale.y);
                }
            }
        }
        this.c.fill();
    }
}
