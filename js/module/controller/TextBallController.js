import TextBallModel from '../model/TextBallModel.js';

export default ()=>{
    const testTextArr = ["魑魅魍魎", "死屍累々", "凱旋帰国"];

    //Initialize
    const myPlayer = new PlayerModel(0,0,'./img/ksg.png','#myCanvas');
    const text = new TextBallModel(400,100,'魑魅魍魎','#myCanvas');

    //Animation
    requestAnimationFrame(function(){
        myPlayer.clear();
        myPlayer.move(5,5);
        myPlayer.draw();
        text.clear();
        text.move(0,2);
        text.draw();
    },30)
}
