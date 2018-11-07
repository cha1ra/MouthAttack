/*-------------------------
Animation
-------------------------*/

const testTextArr = ["魑魅魍魎", "死屍累々", "凱旋帰国"];

class GameObject {
    constructor(posX,posY,canvasId){
        this.posX = posX;
        this.posY = posY;
        this.objW = 0;
        this.objH = 0;
        this.thisCanvas = document.querySelector(canvasId);
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

class Player extends GameObject{
    constructor(posX,posY,imgSrc,canvasId){
        super(posX,posY,canvasId);
        this.imgSrc = imgSrc;
    }

    draw(){
        var img = new Image();
        img.src = this.imgSrc;
        super.setObjWH(img.width, img.height);
        img.onload = () => {
            //this.ctx.clearRect(this.posX,this.posY,img.width,img.height);
            this.ctx.drawImage(img,this.posX,this.posY);
        }
    }

}

class TextBall extends GameObject{
    constructor(posX,posY,text,canvasId){
        super(posX,posY,canvasId);
        this.text = text;
        this.fontSize = 18;
    }

    draw(){
        this.setTextStyle();
        const textWidth = this.ctx.measureText(this.text);
        console.log(textWidth.width, this.fontSize);
        this.ctx.fillText(this.text,this.posX,this.posY);
    }
    
    setTextStyle(){
        this.ctx.font = this.fontSize;
        this.ctx.fillStyle = '#ff0000';
    }

}

//Initialize
const myPlayer = new Player(0,0,'./img/ksg.png','#myCanvas');
const text = new TextBall(400,100,'魑魅魍魎','#myCanvas');
console.log(myPlayer.posX);

//Animation
setInterval(function(){
    myPlayer.clear();
    myPlayer.move(5,5);
    myPlayer.draw();
    text.clear();
    text.move(0,2);
    text.draw();
    
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




