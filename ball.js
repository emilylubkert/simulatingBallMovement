var ball = document.getElementById("ball");
var velocity = 100;
var positionX = 0;
var positionY = 0;
var reverse = false;

//write a function that can change the position of the html element "ball"
function moveBall (){
  var Xmin = 0;
  var Xmax = 300;
  var Ymin = 0;
  var Ymax = 300;

  if(reverse){
  positionX = positionX + velocity;
  ball.style.left = positionX + 'px';
  positionY = positionY + velocity;
  ball.style.top = positionY + 'px';
} else{
  positionX = positionX - velocity;
  ball.style.left = positionX + 'px';
  positionY = positionY - velocity;
  ball.style.top = positionY + 'px';
}
if(positionX > Xmax || positionX < Xmin ||
    positionY > Ymax || positionY < Ymin){
  reverse = !reverse;
}
}
 
// This call the moveBall function every 100ms
setInterval(moveBall, 100);
