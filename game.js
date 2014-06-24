var canvas = document.getElementById("ctx");
var ctx = canvas.getContext("2d");

//Functions Quickref
/*
ctx.font = '30px Arial';				//Font used
ctx.fillStyle = 'red';					//Color of the text and forms
ctx.globalAlpha = (0-1);				//Defines canvas transparency (1 = opaque)	
ctx.fillText('text', x, y);				//Writes text
ctx.fillRect(x, y, width, height));		//Draws a filled rectangle
ctx.clearRect(x, y, width, height);		//Clears a rectangle
ctx.strokeRect(x, y, width, height);	//Draws an empty rectangle
ctx.beginPath();						//begins path
ctx.stroke()							//fills path
ctx.closepath();						//closes path

To use JavaScript to add to an element
document.getElementById('elementName').innerHTML='<insert>HTML</here>'
*/

var clearCanvasBtn = document.getElementById('clearCanvasBtn');
clearCanvasBtn.addEventListener('click', clearCanvas, false);

var drawSquareBtn = document.getElementById('drawSquareBtn');
drawSquareBtn.addEventListener('click', drawSquare, false)

function drawSquare () {
	ctx.fillStyle = '#000000';
	ctx.fillRect(-25 + canvas.width /2, -25 + canvas.height / 2, 50, 50);
}

function clearCanvas () {

}

//Drawing architecture

	//draws a line; to prevent gradient effect, does not include ctx.stroke();
var line = function(beginX, beginY, endX, endY) {
	ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
	ctx.lineWidth = "1";
	ctx.beginPath();
	ctx.moveTo(beginX, beginY);
	ctx.lineTo(endX, endY);
	ctx.stroke();
	ctx.closePath();
}

	//Uses line() to draw a grid
var drawGrid = function(scale) {
	for (var i = 0; i < canvas.width; i += canvas.width / scale) {
			line(0, i, canvas.width , i);
			line(i, 0, i, canvas.height);
		}
		
	}

drawGrid(5);


/*
//Moving rectangle function.
 var x = 0
  var draw = function() {
    ctx.clearRect(x - 1, 50, 50, 50);
    ctx.fillRect(x, 50, 50, 50);
    x = (x < canvas.width) ? x + 1 : 0;
    requestAnimationFrame(draw);
  }

  draw();
*/
