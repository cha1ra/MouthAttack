import PlayerController from './module/controller/PlayerController.js';
import TextBallController from './module/controller/PlayerController.js';

var pc = new PlayerController();
//TextBallController();





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




