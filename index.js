const body=document.getElementsByTagName("body")[0];



document.getElementById("btn").onclick= function(){
let red=Math.floor(Math.random()*255);
let green=Math.floor(Math.random()*255);
let blue=Math.floor(Math.random()*255);
const color=`rgb(${red},${green},${blue})`;
body.style.backgroundColor=color;
}