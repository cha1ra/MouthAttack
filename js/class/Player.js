import GameObject from './GameObject.js';

export default class Player extends GameObject{
    constructor(posX,posY,imgSrc,canvasId){
        super(posX,posY,canvasId);
        this.imgSrc = imgSrc;
    }

    draw(){
        var img = new Image();
        img.src = this.imgSrc;
        super.setObjWH(img.width, img.height);
        img.onload = () => {
            this.ctx.drawImage(img,this.posX,this.posY);
        }
        
    }

}