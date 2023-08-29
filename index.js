function begin(){
function check(){
    if(first===second){
        document.querySelector("h1").innerHTML="Match Tie"
    }
     else if(first>second){
      document.querySelector("h1").innerHTML="Player1 wins..!"
    }
    else  {
      document.querySelector("h1").innerHTML="Player2 wins..!"
    }
  }
var first,second;
first=Math.floor(Math.random()*6 +1);
second=Math.floor(Math.random()*6 +1);
if(first===1){
  document.querySelector(".img1").setAttribute("src","dice1.png");
}
else if(first===2){
  document.querySelector(".img1").setAttribute("src","dice2.png");
}
else if(first===3){
  document.querySelector(".img1").setAttribute("src","dice3.png");
}
else if(first===4){
  document.querySelector(".img1").setAttribute("src","dice4.png");
}
else if(first===5){
  document.querySelector(".img1").setAttribute("src","dice5.png");
}
else
{
  document.querySelector(".img1").setAttribute("src","dice6.png");
}
// this is for second
if(second===1){
  document.querySelector(".img2").setAttribute("src","dice1.png");
}
else if(second===2){
  document.querySelector(".img2").setAttribute("src","dice2.png");
}
else if(second===3){
  document.querySelector(".img2").setAttribute("src","dice3.png");
}
else if(second===4){
  document.querySelector(".img2").setAttribute("src","dice4.png");
}
else if(second===5){
  document.querySelector(".img2").setAttribute("src","dice5.png");
}
else
{
  document.querySelector(".img2").setAttribute("src","dice6.png");
}
check();
}