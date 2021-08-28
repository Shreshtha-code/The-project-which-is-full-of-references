var canvas =new fabric.Canvas('myCanvas');
var block_image_width =30;
var block_image_height =30;
var player_x =10;
var player_y =10;
var player_object ="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object =Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:player_y,
    left:player_x
});
canvas.add(player_object);
    });   
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
block_image_object =Img;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
    top:player_y,
    left:player_x
});
canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    var key_pressed=e.keyCode;
    console.log(key_pressed);
    if(e.shiftKey==true && key_pressed=='80'){
console.log("P and 'Shift' key are pressed together.");
block_image_width=block_image_width+10;
block_image_height=block_image_height+10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
    }
if(e.shiftKey==true && key_pressed=='77'){
    console.log("'M' and 'Shift' key are pressed together.");
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}
if(key_pressed=='38'){
    up();
    console.log("UP!");
}
if(key_pressed=='40'){
    down();
    console.log("Get 'down'.");
}
if(key_pressed=='37'){
    left();
    console.log("On your left.");
}
if(key_pressed=='39'){
    right();
    console.log("The ants go marching...");
}
if(key_pressed=='67'){
    new_image('cloud.jpg');
    console.log("Fluffy clouds.");
}
if(key_pressed=='68'){
    new_image('dark_green.png');
    console.log("Dark green");
}
if(key_pressed=='71'){
    new_image('ground.png');
    console.log("I am never flying again.");
}
if(key_pressed=='76'){
    new_image('light_green.png');
    console.log("Grass.");
}
if(key_pressed=='82'){
    new_image('roof.jpg');
    console.log("The roof has a pleasant view.");
}
if(key_pressed=='84'){
    new_image('trunk.jpg');
    console.log("There are squirrels scampering up the trunk of the oak tree.");
}
if(key_pressed=='85'){
    new_image('unique.png');
    console.log("That is a unique drawing.");
}
if(key_pressed=='87'){
    new_image('wall.jpg');
    console.log("Climbing that wall is very difficult.");
}
if(key_pressed=='89'){
    new_image('yellow_wall.png');
    console.log("Follow the yellow brick wall.");
}








}













