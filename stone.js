// Creating platform class, objects will be created according to posX.



class Stone{
    constructor(posX) {
      this.ry = random([100,300,500]);// width of platform will be between 100 and 500
      this.rh = random([260,190,190,190,260,260,260,260,260,260,190,190]); // height of platform will be taken from array given to random function
      this.rx = posX; //setting the x posing where platform will be created  
         var rand=random([1,2,3])
      this.spt=createSprite(this.rx, this.ry , this.rw, this.rh); //using rx,ry,rw,rh to give values 
      
      switch(rand){
          case 1:this.spt.addImage(stoneImg);break;

          case 2:this.spt.addImage(brickImg);break;
      }

    var rand=random([1,2,3])
      this.spt2=createSprite(this.rx, this.ry+100 , this.rw, this.rh); //using rx,ry,rw,rh to give values 
      
      switch(rand){
          case 1:this.spt2.addImage(stoneImg);break;

          case 2:this.spt2.addImage(brickImg);break;
      }


      var rand=random([1,2,3])
      this.spt3=createSprite(this.rx, this.ry+150 , this.rw, this.rh); //using rx,ry,rw,rh to give values 
      
      switch(rand){
          case 1:this.spt3.addImage(stoneImg);break;

          case 2:this.spt3.addImage(brickImg);break;
      }
    }
  
  
  }
  
  