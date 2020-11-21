const CENTER_X = 200;
const CENTER_Y = 200;
const RADIUS = 150; 

var canvas; // the canvas element
var ctx;    // the canvas object's context
var angle;
var num;
var markLength = 110;

function initialize() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;

    ctx.fillStyle = "silver";
    // draw circle
    ctx.beginPath();
    ctx.arc(CENTER_X, CENTER_Y, RADIUS, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "silver";
    ctx.beginPath();
    ctx.arc(CENTER_X, CENTER_Y, RADIUS - 35, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    drawCircle();
    //drawTriagle();
    ctx.save();
    ctx.fillStyle = "red ";
    ctx.beginPath();
    ctx.moveTo(CENTER_X+20, CENTER_Y-130);
    ctx.lineTo(200, 90);
    ctx.lineTo(180, 71);
    ctx.fill();
    ctx.restore();
} 

//function to draw a triangle 
function drawTriagle() {
    ctx.save();
    ctx.fillStyle = "red ";
    ctx.beginPath();
    ctx.moveTo(CENTER_X+20, CENTER_Y-130);
    ctx.lineTo(200, 90);
    ctx.lineTo(180, 71);
    ctx.fill();
    ctx.restore();
}
            
//function to draw a circle             
function drawCircle() {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(CENTER_X, CENTER_Y, RADIUS - 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "darkslategray ";
    ctx.beginPath();
    ctx.arc(CENTER_X, CENTER_Y, (RADIUS/2)-35, 0, 2 * Math.PI);

    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "white ";
    ctx.font = RADIUS*0.15 + "px arial";
    ctx.textBaseline="middle";
    ctx.textAlign="center";

    for(num = 0; num < 8; num++){
        ang = num * Math.PI / 4;
        ctx.rotate(ang);
        ctx.translate(0, -RADIUS*0.5);
        ctx.rotate(-ang);
        ctx.fillText((num*5).toString(), CENTER_X, CENTER_Y);
        ctx.rotate(ang);
        ctx.translate(0, RADIUS*0.5);
        ctx.rotate(-ang);
    }   

    ctx.beginPath();
    ctx.font = "28px Georgia";
    ctx.fillStyle = "white";
    ctx.fillText("Lock", CENTER_X , CENTER_Y);
    ctx.fill();

    for (var i = 0; i < 8; i++) {
        angle = (i - 3) * (Math.PI * 2) / 8;       // the angle to mark
        ctx.lineWidth = 2;            
        ctx.beginPath();

        var x1 = (CENTER_X ) + Math.cos(angle) * (markLength);
        var y1 = (CENTER_Y ) + Math.sin(angle) * (markLength);
        var x2 = (CENTER_X ) + Math.cos(angle) * (markLength - (markLength / 6));
        var y2 = (CENTER_Y ) + Math.sin(angle) * (markLength - (markLength / 6));

        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);

        ctx.strokeStyle = 'white';
        ctx.stroke();
    }

    for (var i = 0; i < 40; i++) {
      angle = (i - 3) * (Math.PI * 2) / 40;       // the angle to mark
      ctx.lineWidth = 2;           
      ctx.beginPath();

      var x1 = (CENTER_X ) + Math.cos(angle) * (markLength);
      var y1 = (CENTER_Y ) + Math.sin(angle) * (markLength);
      var x2 = (CENTER_X ) + Math.cos(angle) * (markLength - (markLength / 10));
      var y2 = (CENTER_Y ) + Math.sin(angle) * (markLength - (markLength / 10));

      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);

      ctx.strokeStyle = 'white';
      ctx.stroke();
    }
    ctx.strokeStyle = 'black';

}

// This function rotates the circle rotateClockwise
function rotateClockwise() {
    ctx.translate(CENTER_X, CENTER_Y);
    ctx.rotate(Math.PI / 20);
    ctx.translate( -CENTER_X, -CENTER_Y);
    drawCircle();
} // end rotateClockwise

// This function rotates the circle rotateCounterClockwise
function rotateCounterClockwise() {
    ctx.translate(CENTER_X, CENTER_Y);
    ctx.rotate(-(Math.PI / 20));
    ctx.translate( -CENTER_X, -CENTER_Y);
    drawCircle();
} // end rotateCounterClockwise


