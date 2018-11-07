import GameObjectModel from './GameObjectModel.js';

export default class Player extends GameObjectModel{
    constructor(props){
        //super(posX,posY,canvasId);
        // super({
        //     posX:this.posX,
        //     posY:this.poxY,
        //     canvasId:this.canvasId
        // })
        //this.imgSrc = this.imgSrc;
        console.log('test');
        this.onReceiveCallBack = props.onReceiveCallBack;
        this.init();
        super(props);
    }
    init(){
        this.onReceiveCallBack();
    }


    // draw(){
    //     var img = new Image();
    //     img.src = this.imgSrc;
    //     super.setObjWH(img.width, img.height);
    //     img.onload = () => {
    //         this.ctx.drawImage(img,this.posX,this.posY);
    //     }
        
    // }

}