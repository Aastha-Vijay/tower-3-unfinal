const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var polygon,ground1,ground2,ground3,sling,gorund4,ground5;

//var level1, level1Array = []; 

var block0,block1,block2,block3,block4,block5,block6;
var block7,block8,block9,block10;
var block11,block12,block13;
var block14,block15;

var block18,block19,block20,block21,block22,block23,block24,block25,block26;

var gamestate = "attached";

var score = 0, chances = 5;

var bg, bgImage;

function preload(){
    BgImg();
}

function setup(){

    var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world; 
    
    ground1 = new Ground(680, 560, 450, 10);
    ground2 = new Ground(1239, 350, 340, 10);
    ground3 = new Ground(750, 595, 1500, 10);
    ground4 = new Ground(1500, 300, 10, 1000);
    ground5 = new Ground(1, 300, 10, 1000);
    polygon = new Polygon(200, 400, 50, 50);
    sling = new Sling(polygon.body, {x:200, y:400});
    
    //ground1
    block0 = new Blocks(500, 520, 60, 70);
    block1 = new Blocks(560, 520, 60, 70);
    block2 = new Blocks(620, 520, 60, 70);
    block3 = new Blocks(680, 520, 60, 70);
    block4 = new Blocks(740, 520, 60 ,70);
    block5 = new Blocks(800, 520, 60, 70);
    block6 = new Blocks(860, 520, 60, 70);

    block7 = new Blocks(560, 445, 60, 70);
    block8 = new Blocks(620, 445, 60, 70);
    block9 = new Blocks(680, 445, 60, 70);
    block10 = new Blocks(740, 445, 60, 70);
    block11 = new Blocks(800, 445, 60, 70);

    block12 = new Blocks(620, 410, 60, 70);
    block13 = new Blocks(680, 410, 60, 70);
    block14 = new Blocks(740, 410, 60, 70);

    block15 = new Blocks(680, 375, 60, 70);
    

    //ground2
    block18 = new Blocks(1120, 300, 60, 70);
    block19 = new Blocks(1180, 300, 60, 70);
    block20 = new Blocks(1240, 300, 60, 70);
    block21 = new Blocks(1300, 300, 60, 70);
    block22 = new Blocks(1360, 300, 60, 70);

    block23 = new Blocks(1180, 265, 60, 70);
    block24 = new Blocks(1240, 265, 60, 70);
    block25 = new Blocks(1300, 265, 60, 70);

    block26 = new Blocks(1240, 230, 60, 70);


}

function draw(){
    background("white"); 

    if(bgImage){
    background(bgImage);
    }

    else{
        background("white");
    }

    stroke("black");
    textSize(30);
    fill("white");
    text("Score : "+score, 1200, 50);


    stroke("black");
    textSize(30);
    fill("white");
    text("Chances Left : "+chances, 1200, 100);

    if(score>=4000){
        stroke("black");
        textSize(50);
        fill("white");
        text("You WIN!!", 600, 100);
    }

    if(chances == 0 && score < 3000){
        stroke("black");
        textSize(50);
        fill("white");
        text("You Loose", 600, 100);

    }

    Engine.update(engine);
    ground1.display();
    ground2.display();
    ground3.display();
    polygon.display();
    sling.display();

    block0.Score();
    block1.Score();
    block2.Score();
    block3.Score();
    block4.Score();
    block5.Score();
    block6.Score();
    block7.Score();
    block8.Score();
    block9.Score();
    block10.Score();
    block11.Score();
    block12.Score();
    block13.Score();
    block14.Score();
    block15.Score();
    block18.Score();
    block19.Score();
    block20.Score();
    block21.Score();
    block22.Score();
    block23.Score();
    block24.Score();
    block25.Score();
    block26.Score();

    fill("red");
    block0.display();
    fill("red");
    block1.display();
    fill("red");
    block2.display();
    fill("red");
    block3.display();
    fill("red");
    block4.display();
    fill("red");
    block5.display();
    fill("red");
    block6.display();

    fill("orange");
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();

    fill("yellow");
    block12.display();
    block13.display();
    block14.display();

    fill("lime");
    block15.display();
    
    fill("purple");
    block18.display();
    fill("purple");
    block19.display();
    fill("purple");
    block20.display();
    fill("purple");
    block21.display();
    fill("purple");
    block22.display();

    fill("blue");
    block23.display();
    block24.display();
    block25.display();

    fill("cyan");
    block26.display();    
    
}

function mouseDragged(){
    if(gamestate=="attached")
    Matter.Body.setPosition(polygon.body, {x : mouseX, y : mouseY})
}

function mouseReleased(){
    sling.fly();
    gamestate = "launched";
}

function keyPressed(){
    if(keyCode==32 && polygon.body.speed<1 && chances==0){
        gamestate = "attached";
        Matter.Body.setPosition(polygon.body, {x:200, y:400})
        sling.attach(polygon.body);
        chances=chances-1;

    }
}

async function BgImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var time = datetime.slice(11,13);

    if(time>=0700 && time<1700){
        bg = "Morning.jpg";
    }

    else if(time>=1700 && time<=2000){
        bg = "Evening.jpg";
    }

    else{
        bg = "Night.png";
    }
    bgImage = loadImage(bg);
}


