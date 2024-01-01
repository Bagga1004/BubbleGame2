 
function makeBubble(){
var clutter = "";
for(var i=1;i<=184;i++){
    var randomNumber = Math.floor(Math.random()*10)
  clutter += `<div class="bubble">${randomNumber}</div>`;
}
 document.querySelector("#pbtm").innerHTML = clutter;
}
var timer = 30;
function runTime(){
    var timerint = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent= timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `Game Over`;
        }
    } , 1000)
}
function hittimer(){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hittimer").textContent= hitrn;
}
var score = 0
function increaseScore(){
  score+=10;
  document.querySelector("#scoreval").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click" , function(dets){
    var hit = Number(dets.target.textContent)
    if(hit===hitrn){
        makeBubble();
        increaseScore();
        hittimer();
    }
})

makeBubble();
runTime();
hittimer();
increaseScore();