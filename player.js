class Player
{
    constructor() {
		this.x = 150;
		this.y=200;
		this.spt=createSprite(this.x, this.y, 100,100);
		this.spt.shapeColor="blue";
		
	}

  applyGravity()
    {
        this.spt.velocityY=this.spt.velocityY+5;
	}

	moveLeft()
	{ 
		this.spt.x=this.spt.x-12;
	}
    
    moveRight()
	{ 
		this.spt.x=this.spt.x+52;
	}

	jump()
	{ 
		this.spt.velocityY=-41;
    }
	
}