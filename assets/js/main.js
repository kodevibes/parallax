const parallaxe = document.querySelector("#parallaxe");

const ctx = parallaxe.getContext("2d");

class Layer{
    constructor(image){
        this.x = 0;
        this.y = 0;
        this.width = 1920;
        this.height = 1080;
        this.image = image;
        this.speed = 5;
    }

    update(){
        if(this.x<-this.width){
            this.x=0;
        }
        this.x = Math.floor(this.x-this.speed);
    }

    draw(){
        ctx.drawImage(this.image,
            this.x,this.y,
            this.width,this.height);
        ctx.drawImage(
            this.image,
            this.x+this.width,this.y,
            this.width,this.height
        );
    }

}


const layers = [];

for(let i=1;i<=7;i++){
    let img = new Image();
    img.src= `assets/img/layer_0${i}_1920 x 1080.png`;
    layers[i-1]=new Layer(img);
}

layers[0].y=-260;
layers[2].speed = 4;
layers[3].speed = 3;
layers[4].speed = 2;
layers[5].speed = 1;
layers[6].speed = 1;

layers.reverse();

const CANVAS_WIDTH = parallaxe.width = 1420;
const CANVAS_HEIGHT = parallaxe.height = 880;

function animate(){
    layers.forEach(layer=>{
        layer.update();
        layer.draw();
    });
    requestAnimationFrame(animate);
}

animate();