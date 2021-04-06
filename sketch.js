const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(400, 260, 300, 20);

    box1 = new Box(390,155,30,40);
    box2 = new Box(420,195,30,40);
     box3 = new Box(390,195,30,40);
    box4 = new Box(360,195,30,40);
   box5 = new Box(450,235,30,40);
   box6 = new Box(420,235,30,40);
   box7 = new Box(390,235,30,40);
   box8 = new Box(360,235,30,40);
   box9 = new Box(330,235,30,40);
   polygon=new Polygon(50,50,50,50);
    rope= new Rope(polygon.body,{x:200, y:50});
}

function draw(){
    
        background("lightBlue");
    
    Engine.update(engine);
    //strokeWeight(4);
    platform.display();
    fill(rgb(123,111,213))
    box1.display();
    box2.display();
    ground.display();
  polygon.display();
 box3.display();
    box4.display();
    box5.display();
  
    rope.display(); 
 box6.display();
 box7.display();   
 box8.display();
 box9.display();
}

function mouseDragged(){
Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    rope.fly();
}

function keyPressed(){
    if(keyCode === 32 && polygon.body.speed<1){
    Matter.Body.setPosition(polygon.body,{x:50,y:50})
       rope.attach(polygon.body);

    }
}

