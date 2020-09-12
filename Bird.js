class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectoryimage=loadImage("sprites/smoke.png")
    this.a1=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x>20&&this.body.position.x>250){

    
    this.a1.push([this.body.position.x,this.body.position.y])
    }
    for (var i=0;i<this.a1.length;i=i+1) {
    image(this.trajectoryimage,this.a1[i][0],this.a1[i][1])
    }

    super.display();
  }
}
