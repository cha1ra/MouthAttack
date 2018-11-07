export class GameObjectModel {
    constructor(props){
        this.onReceiveCallBack = props.onReceiveCallBack;
        this.init();
        this.posX = props.posX;
        this.posY = props.posY;
        this.objW = 0;
        this.objH = 0;
        this.thisCanvas = document.querySelector(props.canvasId);
        this.ctx = this.thisCanvas.getContext('2d');
    }

    move(x,y){
        this.posX += x;
        this.posY += y;
    }

    clear(){
        this.ctx.clearRect(this.posX,this.posY,this.objW,this.objH);
    }

    setObjWH(w, h){
        this.objW = w;
        this.objH = h;
    }
}

export default GameObjectModel;