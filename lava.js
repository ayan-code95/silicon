class Lava{
    constructor(x){
        this.body=createSprite(x,height-12
            )
        this.body.addImage(lavaImg)
        this.body.scale=1.5
        this.body.debug=true
        this.body.setCollider("rectangle",0,-1,210,210)

    }
}