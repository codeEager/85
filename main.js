canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

background_image = "Parking_Lot.jpg";
red_car_image = "Red_Car.png";
red_car_width = 75;
red_car_height = 120;

red_car_x = 5;
red_car_y = 210;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    red_car_imgTag = new Image();
    red_car_imgTag.onload = uploadRedCar;
    red_car_imgTag.src = red_car_image;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadRedCar() {
    ctx.drawImage(red_car_imgTag, red_car_x, red_car_y, red_car_width, red_car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    if (keyPressed == 38) {
        up()
    }
    if (keyPressed == 40) {
        down()
    }
    if (keyPressed == 37) {
        left()
    }
    if (keyPressed == 39) {
        right()
    }
}

function up() {
    if (red_car_y >= 0) {
        red_car_y = red_car_y - 10;
        console.log("When up arrow is pressed, x =" + red_car_x + "y = " + red_car_y);
        uploadBackground();
        uploadRedCar();
    }
}
function down() {
    if (red_car_y <= 400) {
        red_car_y = red_car_y + 10;
        console.log("When down arrow is pressed, x =" + red_car_x + "y = " + red_car_y);
        uploadBackground();
        uploadRedCar();
    }
}
function left() {
    if (red_car_x >= 0) {
        red_car_x = red_car_x - 10;
        console.log("When left arrow is pressed, x =" + red_car_x + "y = " + red_car_y);
        uploadBackground();
        uploadRedCar();
    }
}
function right() {
    if (red_car_x <= 800) {
        red_car_x = red_car_x + 10;
        console.log("When right arrow is pressed, x =" + red_car_x + "y = " + red_car_y);
        uploadBackground();
        uploadRedCar();
    }
}