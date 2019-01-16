var canvas3 = document.getElementById("24clock60");
var text = canvas3.getContext("2d");
var radius3 = canvas3.height / 2;
text.translate(radius3, radius3);
radius3 = radius3 * 0.90
draw2460Clock();
setInterval(draw2460Clock, 1000);

function draw2460Clock() {
  draw2460Face(text, radius3);
  draw2460Numbers(text, radius3);
  draw2460Time(text, radius3);
}

function draw2460Face(text, radius3) {
  var grad3;

  text.beginPath();
  text.arc(0, 0, radius3, 0, 2 * Math.PI);
  text.fillStyle = 'white';
  text.fill();

  grad3 = text.createRadialGradient(0, 0, radius3 * 0.95, 0, 0, radius3 * 1.05);
  grad3.addColorStop(0, '#333');
  grad3.addColorStop(0.5, 'white');
  grad3.addColorStop(1, '#333');
  text.strokeStyle = grad3;
  text.lineWidth = radius3 * 0.1;
  text.stroke();

  text.beginPath();
  text.arc(0, 0, radius3 * 0.1, 0, 2 * Math.PI);
  text.fillStyle = '#333';
  text.fill();
}

function draw2460Numbers(text, radius3) {
  var ang3;
  var num3;
  text.font = radius3 * 0.15 + "px arial";
  text.textBaseline = "middle";
  text.textAlign = "center";
  for (num3 = 1; num3 < 25; num3++) {
    ang3 = num3 * Math.PI / 12;
    text.rotate(ang3);
    text.translate(0, -radius3 * 0.85);
    text.rotate(-ang3);
    text.fillText(num3.toString(), 0, 0);
    text.rotate(ang3);
    text.translate(0, radius3 * 0.85);
    text.rotate(-ang3);
  }
  text.font = radius3 * 0.1 + "px arial";
  for (num3 = 5; num3 <= 60; num3 += 5) {
    ang3 = num3/5 * Math.PI / 6;
    text.rotate(ang3);
    text.translate(0, -radius3 * 0.68);
    text.rotate(-ang3);
    text.fillText(num3.toString(), 0, 0);
    text.rotate(ang3);
    text.translate(0, radius3 * 0.68);
    text.rotate(-ang3);
  }
}

function draw2460Time(text, radius3) {
  var now3 = new Date();
  var hour3 = now3.getHours();
  var minute3 = now3.getMinutes();
  var second3 = now3.getSeconds();
  hour3 = (hour3 * Math.PI / 12) + (minute3 * Math.PI / (12 * 60)) + (second3 * Math.PI / (360 * 60));
  draw2460Hand(text, hour3, radius3 * 0.5, radius3 * 0.07);
  minute3 = (minute3 * Math.PI / 30) + (second3 * Math.PI / (30 * 60));
  draw2460Hand(text, minute3, radius3 * 0.8, radius3 * 0.07);
  second3 = (second3 * Math.PI / 30);
  draw2460Hand(text, second3, radius3 * 0.9, radius3 * 0.02);
}

function draw2460Hand(text, pos, length, width) {
  text.beginPath();
  text.lineWidth = width;
  text.lineCap = "round";
  text.moveTo(0, 0);
  text.rotate(pos);
  text.lineTo(0, -length);
  text.stroke();
  text.rotate(-pos);
}
