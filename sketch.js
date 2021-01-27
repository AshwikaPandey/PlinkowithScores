var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var particle
var particles = [];
var plinkos = [];
var division=[]
var divisionHeight=300;
var score =0;
var turns=5
var PLAY=1
   var END=0
   var gameState=PLAY


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
   

   for (var k = 0; k<= width; k = k + 200) {
     division.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
     
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinkos(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinkos(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinkos(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinkos(j,375));
    }

    

    
}
 


function draw() {
  background("pink");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  //for the showing of score
  text("score:"+score,300,50)
 
 if(keyCode==="space"){
   gameState=PLAY
 }
 //for the particles to come out
 if(gameState===PLAY){
   if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   }
    if(particles.x<0 && particles.x>200 && particles.y>300){
      score++;
    }
    if(particles.x>200 && particles.x<400 && particles.y>300){
      score++
    }
    if(particles.x>400 && particles.x<600 && particles.y>300){
      score++
    }
  score++
 }
 if(score>1200){
   turns=turns-1
  reset()
 }
 if(turns>0 && (turns<=5) ){
   gameState=PLAY
   text("turns: "+turns,100,50)
   //text("Game ENDED",200,300)
 }
 if(turns==0){
gameState=END
 }
 
if(gameState===END){

  
  text("score:1300",300,50)
  textSize(40)
  text("END",400,50)
}
 
 console.log(turns)

 //display
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  

 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   //display bottom score
   for (var k = 0; k < divisions.length; k++) {
    text("500",50,400)
    text("150",250,400)
    text("250",450,400)
    text("450",650,400)
     division[k].display();
   }
}
function reset(){

  score=0

  
}