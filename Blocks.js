class Blocks{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
    }
    this.Visibility = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.height = height;
    this.width = width;
    
    World.add(world, this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        pop();

       if(this.body.speed < 7){
       
        push();
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
        }

        else{
            World.remove(world, this.body)
            push();
            this.Visibility = this.Visibility-5;
            tint(255, this.Visibility);
            pop();
            }

        }
    Score(){
        if(this.Visibility < 0 && this.Visibility > -700){
            score++;
        }
    }
    }