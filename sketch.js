const mX = 250;
const mY = 250;
const Grid = 40;
const Size = 40;


function setup() {
    createCanvas(900, 900);
    noLoop();
}
  
function draw() {
    background(225);

    for (let x=mX; x<=width-mX; x+=Grid){
        for(let y=mY; y<=height-mY; y+=Grid){
            push();
            translate(x, y);
            rotate(radians(x));

            noStroke();
            fill(230, 60, 80);
            rect(0, 0, random(Size*1.5), random(Size*1.4));
            pop();
        }
    }

    for (let x=mX; x<=width-mX; x+=Grid){
        for(let y=mY; y<=height-mY; y+=Grid){
            push();
            translate(x, y);
            rotate(radians(y));

            strokeWeight(2);
            stroke(25, 55, 60);

            fill(170, 205, 210);
            rect(0, 0, random(Size*0.85), random(Size*0.85));

            fill(25, 55, 60);
            rect(0, 0, random(Size*0.55), random(Size*0.55));
            pop();
        }
    }
}