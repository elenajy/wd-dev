var mousePressed = false;
var lastX, lastY;
var ctx;

function InitMouseDraw() {
    console.log("Entered Mouse Draw")
    ctx = document.getElementById('drawCanvas').getContext("2d");

    $('#drawCanvas').mousedown(function (e) {
        mousePressed = true;
        InitMouseDraw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });

    $('#drawCanvas').mousemove(function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });

    $('#drawCanvas').mouseup(function (e) {
        mousePressed = false;
    });

    $('#drawCanvas').mouseleave(function (e) {
        mousePressed = false;
    });
}

function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = $('#selColor').val();
        ctx.lineWidth = $('#selWidth').val();
        ctx.lineJoin = "round"
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
    lastX = x;
    lastY = y;
}

function clearArea() {
    console.log("entered clear area")
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function tictactoe() {
    console.log("entered tic tac toe");
    var selTic = parseFloat(document.querySelector("#selTic").value);
    var c = document.getElementById("drawCanvas");
    var ctx = c.getContext("2d");
    clearArea();

    if (selTic == "3") {
        ctx.beginPath();
        ctx.moveTo(0, 167);
        ctx.lineTo(1000, 167);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, 333);
        ctx.lineTo(1000, 333);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(333, 0);
        ctx.lineTo(333, 500);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(666, 0);
        ctx.lineTo(666, 500);
        ctx.stroke();
    } else if (selTic == "5") {
        ctx.beginPath();
        ctx.moveTo(0, 100);
        ctx.lineTo(1000, 100);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, 200);
        ctx.lineTo(1000, 200);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, 300);
        ctx.lineTo(1000, 300);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, 400);
        ctx.lineTo(1000, 400);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(200, 0);
        ctx.lineTo(200, 500);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(400, 0);
        ctx.lineTo(400, 500);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(600, 0);
        ctx.lineTo(600, 500);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(800, 0);
        ctx.lineTo(800, 500);
        ctx.stroke();
        ctx.beginPath();
    } else {
        console.log("error")
    }
}