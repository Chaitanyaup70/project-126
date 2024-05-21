function preload(){

}
function setup(){
    canvas=createCanvas(600,475);
    canvas.position(400,171);
    camera=createCapture(VIDEO);
    camera.hide()
   
    
}
function draw(){
   image(camera,0,0,600,475)
}

