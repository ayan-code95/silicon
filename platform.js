class Platform{
    constructor(x){
        this.body=createSprite(x,height-50)
        this.body.addImage(groundImg)
        
        if(gameState==="sponser"){
        this.body=createSprite(x,height-50)
        this.body.changeImage(endImg)
        }

    }
}