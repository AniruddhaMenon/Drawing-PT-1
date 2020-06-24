var canvas;
var zit

function preload(){
  zit = loadImage("haha.jpg");
}

function setup(){
canvas = createCanvas(window.innerWidth,window.innerHeight);
}

function draw(){
background(zit);   
}