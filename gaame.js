console.log("holaa gil aca estoy" );


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "16px Arial";

canvas.addEventListener("mousemove", function(e) { 
    var cRect = canvas.getBoundingClientRect();        // Gets CSS pos, and width/height
    var canvasX = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the canvas 
    var canvasY = Math.round(e.clientY - cRect.top);   // from the X/Y positions to make  
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // (0,0) the top left of the canvas
    ctx.fillText("X: "+canvasX+", Y: "+canvasY, 10, 20);
    console.log("X:" +canvasX);
    console.log("Y:" + canvasY);
});




function getMousePosition(element) {
  var div = document.getElementById("myCanvas");
  var rect = element.getBoundingClientRect();
  var event =div.onclick;
  if (event.pageX != undefined && event.pageY != undefined) {
    x = event.pageX;
    y = event.pageY;
} else {
    x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
}

console.log("X:" + x);
console.log("Y:" + y);
}