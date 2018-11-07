/*-------------------------
Animation
-------------------------*/

const testTextArr = ["魑魅魍魎", "死屍累々", "凱旋帰国"];

class GameObject {
    
}



class Player {
    constructor(posX,posY,imgSrc,canvasId){
        this.posX = posX;
        this.posY = posY;
        this.imgSrc = imgSrc;
        this.thisCanvas = document.querySelector(canvasId);
        this.ctx = this.thisCanvas.getContext('2d');
    }

    draw(){
        var img = new Image();//dummy
        img.src = this.imgSrc;
        img.onload = () => {
            this.ctx.clearRect(this.posX,this.posY,img.width,img.height);
            this.ctx.drawImage(img,this.posX,this.posY);
        }
    }

    move(x,y){
        this.posX += x;
        this.posY += y;
    }
}

class TextBall{
    constructor(posX,posY,text,canvasId){
        this.posX = posX;
        this.posY = posY;
        this.text = text;
        this.thisCanvas = document.querySelector(canvasId);
        this.ctx = this.thisCanvas.getContext('2d');
    }


}


//Initialize
const myPlayer = new Player(0,0,'./img/ksg.png','#myCanvas');
console.log(myPlayer.posX);

//Animation
setInterval(function(){

    myPlayer.draw();
    myPlayer.move(5,5);
    
},50)







/*-------------------------
Speech API
-------------------------*/

const rec = new webkitSpeechRecognition;
rec.lang = 'ja';

console.log('Launching...');

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




