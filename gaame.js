console.log("holaa  aca estoy" );


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "16px Arial";
var oldx=0;
var oldy=0;
var vidahuevo;
canvas.onmousedown = function (e){
    vidahuevo=100;
    var cRect = canvas.getBoundingClientRect();        // Gets CSS pos, and width/height
    var canvasX = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the canvas 
    var canvasY = Math.round(e.clientY - cRect.top);   // from the X/Y positions to make  
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // (0,0) the top left of the canvas
    ctx.fillText("X: "+canvasX+", Y: "+canvasY, 10, 20);
    if (canvasX>=139 && canvasY<447  && canvasX<=290 && canvasY>280){
    oldx=canvasX;
    oldy=canvasY;    
    console.log("agarrado en  el nido");
    canvas.addEventListener("mousemove", seguir);
    }}

function seguir(e){
    var cRect = canvas.getBoundingClientRect();        // Gets CSS pos, and width/height
        var canvasX = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the canvas 
        var canvasY = Math.round(e.clientY - cRect.top);   // from the X/Y positions to make  
        ctx.clearRect(0, 0, canvas.width, canvas.height);  // (0,0) the top left of the canvas
        ctx.fillText("X: "+canvasX+", Y: "+canvasY, 10, 20);
        var img = document.getElementById("drag-items");
        ctx.drawImage(img, canvasX, canvasY,90, 90);

        if(oldx-canvasX>8)vidahuevo=vidahuevo-oldx-canvasX;
        if(oldx-canvasX<-13) vidahuevo=vidahuevo+oldx-canvasX;
        if(oldy-canvasY>8 )vidahuevo=vidahuevo-oldy-canvasY;
        if(oldy-canvasY<-13)vidahuevo=vidahuevo+oldy-canvasY;
        if (vidahuevo<=0){brokenegg()}
        oldx=canvasX;
        oldy=canvasY;
        

}
function brokenegg(){
        canvas.removeEventListener("mousemove", seguir);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var img = document.getElementById("drag-items");
        ctx.drawImage(img, 199, 347,90, 90)
        console.log("rotovich")
        muerte()
}
function muerte(){
    console.log("Te vieron!");
}

function sospecha(){

}

canvas.onmouseup = function(e){
    vidahuevo=100;
    var cRect = canvas.getBoundingClientRect();        // Gets CSS pos, and width/height
    var soltadoX = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the canvas 
    var soltadoY = Math.round(e.clientY - cRect.top);   // from the X/Y positions to make  
    if (soltadoX>=1140 && soltadoY<300  && soltadoX<=1350 && soltadoY>200){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var img = document.getElementById("drag-items");
    ctx.drawImage(img, 199, 347,90, 90)
    console.log("soltado  en el  tronco");
    }
    else{
        
        var img = document.getElementById("drag-items");
        ctx.drawImage(img, 199, 347,90, 90)
        
    }
    canvas.removeEventListener("mousemove", seguir);
    
}




  