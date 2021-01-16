class Supply{
    constructor(x,y,r){
        var options={
            restitution:0.5
        }

        this.body=Bodies.circle(x , y , r/2 , options);
        //this.body.scale=0.2;
        this.x=x;
        this.y=y;
        this.r=r;
        this.image = loadImage("package.png");
        World.add(myWorld, this.body);
    }
    display(){
        var supplyPos=this.body.position;
        push();
        translate(supplyPos.x,supplyPos.y);
        imageMode(CENTER);
        ellipse(this.x , this.y, this.r);
        pop();
    }
};