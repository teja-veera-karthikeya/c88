var canvas = new fabric.Canvas("myCanvas")

player_X = 10
player_Y = 10

block_width = 30
block_height = 30

player_width = 150
player_height = 140

player_object = ""
block_object = ""

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img

        player_object.scaleToWidth(player_width)
        player_object.scaleToHeight(player_height)

        player_object.set({
            top: player_Y,
            left: player_X
        })
        canvas.add(player_object)
    })
}
function new_image(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        block_object = Img

        block_object.scaleToWidth(block_width)
        block_object.scaleToHeight(block_height)

        block_object.set({
            top: player_Y,
            left: player_X
        })
        canvas.add(block_object)
    })
}
window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    console.log(e)
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if (e.shiftKey == true && keyPressed == "80") {
        block_width = block_width + 10
        block_height = block_height + 10

        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height
    }
    if (e.shiftKey == true && keyPressed == "77") {
        block_width = block_width - 10
        block_height = block_height - 10

        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height
    }

    if (keyPressed == "38") {
        console.log("up")
        up()
    }

    if (keyPressed == "37") {
        console.log("left")
        left()
    }

    if (keyPressed == "39") {
        console.log("right")
        right()
    }

    if (keyPressed == "40") {
        console.log("down")
        down()
    }

    if (keyPressed == "67") {
        console.log("cloud")
        new_image("cloud.jpg")
    }

    if (keyPressed == "68") {
        console.log("dark green")
        new_image("dark_green.png")
    }

    if (keyPressed == "71") {
        console.log("ground")
        new_image("ground.png")
    }

    if (keyPressed == "76") {
        console.log("light green")
        new_image("light_green.png")
    }

    if (keyPressed == "82") {
        console.log("roof")
        new_image("roof.jpg")
    }

    if (keyPressed == "84") {
        console.log("trunk")
        new_image("trunk.jpg")
    }

    if (keyPressed == "85") {
        console.log("unique")
        new_image("unique.png")
    }

    if (keyPressed == "87") {
        console.log("wall")
        new_image("wall.jpg")
    }

    if (keyPressed == "89") {
        console.log("yellow")
        new_image("yellow_wall.png")
    }
}
function up(){
    if(player_Y > 0){
        player_Y = player_Y - block_height
        console.log(block_height)
        console.log(player_X,player_Y)
        canvas.remove(player_object)
        player_update()
    }
}
function down(){
    if(player_Y < 500){
        player_Y = player_Y + block_height
        console.log(block_height)
        console.log(player_X,player_Y)
        canvas.remove(player_object)
        player_update()
    }
}
function left(){
    if(player_X > 0){
        player_X = player_X - block_width
        console.log(block_width)
        console.log(player_X,player_Y)
        canvas.remove(player_object)
        player_update()
    }
}
function right(){
    if(player_X < 850){
        player_X = player_X + block_width
        console.log(block_width)
        console.log(player_X,player_Y)
        canvas.remove(player_object)
        player_update()
    }
}