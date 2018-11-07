import Player from './class/Player.js';
import TextBall from './class/TextBall.js';

console.log(Player);

const testTextArr = ["魑魅魍魎", "死屍累々", "凱旋帰国"];

/*-------------------------
Animation
-------------------------*/


//Initialize
const myPlayer = new Player(0,0,'./img/ksg.png','#myCanvas');
const text = new TextBall(400,100,'魑魅魍魎','#myCanvas');
console.log(myPlayer.posX);

//Animation
requestAnimationFrame(function(){
    myPlayer.clear();
    myPlayer.move(5,5);
    myPlayer.draw();
    text.clear();
    text.move(0,2);
    text.draw();
},30)







/*-------------------------
Speech API
-------------------------*/

const rec = new webkitSpeechRecognition;
rec.lang = 'ja';



$('#listen').on('click',function(){
    console.log('click');
    rec.start();
});

rec.onspeechstart = () =>{console.log('on speech start')};
rec.onspeechend = () =>{console.log('on speech end')};

rec.onsoundstart = () => { console.log('on sound start') };
rec.onsoundend = () => { console.log('on sound end') };

rec.onresult = function(e) {
    console.log('on result');
    let recResult = e.results[0][0].transcript;
    console.log(recResult);
}




