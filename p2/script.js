var socket = io()


var side = 35;




function setup(){
    frameRate(5)
     createCanvas(20 * side, 20 * side);

     
}


function AddCarrot() {
    socket.emit("addCarrot");
}
function AddRabbit() {
    socket.emit("addRabbit");
}
function AddWolf() {
    socket.emit("addWolf");
}

function AddLion() {
    socket.emit("addLion");
}

function AddVerjin() {
    socket.emit("addVerjin");
}



function nkarel(matrix){
       for(var y = 0; y < matrix.length; y++){
            for(var x = 0; x < matrix[y].length;x++){
                var toBot = side - side * 0.2

                     if(matrix[y][x] == 1){
                        fill("orangered")
                        rect(x  * side ,y * side , side , side)
                        text('🥕', x * side, y * side + toBot);

                     }else if(matrix[y][x] == 2){
                         fill("white")
                     rect(x  * side ,y * side , side , side)
                     text('🐇', x * side, y * side + toBot);

                  }else if(matrix[y][x] == 3){
                    fill("#acacac")
                    rect(x  * side ,y * side , side , side)
                    text('🐺', x * side, y * side + toBot);

             }else if(matrix[y][x] == 4){
                fill("orange")
                rect(x * side, y * side, side, side);
                text('🦁', x * side, y * side + toBot);
         }
         else if(matrix[y][x] == 5){
            fill("black")
            rect(x * side, y * side, side, side);
            text('🦹‍♂️', x * side, y * side + toBot);
     }
             else {
                          fill("gray")
                        rect(x  * side ,y * side , side , side)

                     }
            }
       }

      
}

setInterval(
    function () {
    
    socket.on('send matrix', nkarel)
    },1000
)