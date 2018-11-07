import PlayerModel from '../model/PlayerModel.js';
import TextBallModel from '../model/TextBallModel.js';
import PlayerView from '../view/PlayerView.js';

export class PlayerController{
    constructor(){
        this.bindMethods();
        this.init();
    }

    init(){
        this.pv = new PlayerView({
            onSendCallBack: this.drawPlayer
        });
        console.log(this.setData());
        this.pm = new PlayerModel({
            onReceiveCallBack: this.setData
        });
    }

    bindMethods(){
        this.setData = this.setData.bind(this);
        this.drawPlayer = this.drawPlayer.bind(this);
    }

    drawPlayer(){
        requestAnimationFrame(function(){
            this.pv.clear();
            this.pv.move(5,5);
            this.pv.draw();
        },30)
    }

    setData(){
        return {
            posX:0,
            posY:0,
            imgUrl:'./img/ksg.png',
            canvasInfo:'myCanvas',
        }
    }




}

export default PlayerController;

// export default ()=>{
//     const testTextArr = ["魑魅魍魎", "死屍累々", "凱旋帰国"];

//     //Initialize
//     const myPlayer = new PlayerModel(0,0,'./img/ksg.png','#myCanvas');
//     const text = new TextBallModel(400,100,'魑魅魍魎','#myCanvas');

//     //Animation
//     requestAnimationFrame(function(){
//         myPlayer.clear();
//         myPlayer.move(5,5);
//         myPlayer.draw();
//         text.clear();
//         text.move(0,2);
//         text.draw();
//     },30)
// }


