import GameObject from './GameObject.js';

export default class TextBall extends GameObject{
    constructor(posX,posY,text,canvasId){
        super(posX,posY,canvasId);
        this.text = text;
        this.fontSize = 32;
    }

    draw(){
        this.setTextStyle();
        const textWidth = this.ctx.measureText(this.text);
        super.setObjWH(textWidth.width, this.fontSize);
        this.ctx.fillText(this.text,this.posX,this.posY);
    }
    
    setTextStyle(){
        this.ctx.font = this.fontSize + "px 'ＭＳ 明朝'";
        this.ctx.fillStyle = '#ff0000';
        this.ctx.textBaseline = "top";
    }

}