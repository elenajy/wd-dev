var canvas;
var context;
var Val_max;
var Val_min;
var sections;
var xScale;
var yScale;
// Values for the Data Plot, they can also be obtained from an external file
var mathematics = [100, 100, 87, 5, 100, 23, 100, 90, 87, 91, 93];
var science = [30, 50, 70, 80, 90, 100, 95, 91, 85, 92, 99];
var hist = [10, 10, 20, 25, 40, 5, 10, 28, 30, 43, 65];

function init() {
    // set these values for your data 
    sections = 11;
    Val_max = 100;
    Val_min = 0;
    var stepSize = 10;
    var columnSize = 50;
    var rowSize = 50;
    var margin = 10;
    var xAxis = [" ", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"];

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    context.fillStyle = "red"
    context.font = "20 pt Verdana"

    yScale = (canvas.height - columnSize - margin) / (Val_max - Val_min);
    xScale = (canvas.width - rowSize) / sections;

    context.strokeStyle = "darkblue"; // color of grid lines
    context.font = "20px Georgia";
    context.beginPath();
    // print Parameters on X axis, and grid lines on the graph
    for (i = 1; i <= sections; i++) {
        var x = i * xScale;
        context.fillText(xAxis[i], x, columnSize - margin);
        context.moveTo(x, columnSize);
        context.lineTo(x, canvas.height - margin);
    }
    // print row header and draw horizontal grid lines
    var count = 0;
    for (scale = Val_max; scale >= Val_min; scale = scale - stepSize) {
        var y = columnSize + (yScale * count * stepSize);
        context.fillText(scale, margin, y + margin);
        context.moveTo(rowSize, y)
        context.lineTo(canvas.width, y)
        count++;
    }
    context.stroke();

    context.translate(rowSize, canvas.height + Val_min * yScale);
    context.scale(1, -1 * yScale);

    // Color of each dataplot items

    context.strokeStyle = "#FF0066";
    plotData(mathematics);
    context.strokeStyle = "#9933FF";
    plotData(science);
    context.strokeStyle = "#000000";
    plotData(hist);

    context.setTransform(1, 0, 0, 1, 0, 0);

}

function plotData(dataSet) {
    context.beginPath();
    context.moveTo(0, dataSet[0]);
    for (i = 1; i < sections; i++) {
        context.lineTo(i * xScale, dataSet[i]);
    }
    context.stroke();
}

function update() {
    console.log("Entered update function.");
    var className = document.querySelector("#className").value;
    console.log("I read the class as: ", className);
    var month = document.querySelector("#month").value;
    console.log("I read the month as: ", month);
    var grade = parseFloat(document.querySelector("#something").value);
    console.log("I read the grade as: ", grade);

    var monthIndex;
    if (month === "Aug") {
        monthIndex = 0;
    } else if (month === "Sep") {
        monthIndex = 1;
    } else if (month === "Oct") {
        monthIndex = 2;
    } else if (month === "Nov") {
        monthIndex = 3;
    } else if (month === "Dec") {
        monthIndex = 4;
    } else if (month === "Jan") {
        monthIndex = 5;
    } else if (month === "Feb") {
        monthIndex = 6;
    } else if (month === "Mar") {
        monthIndex = 7;
    } else if (month === "Apr") {
        monthIndex = 8;
    } else if (month === "May") {
        monthIndex = 9;
    } else if (month === "Jun") {
        monthIndex = 10;
    } else {
        console.log("Something went wrong in month conditional")
    } console.log("Month Index: ", monthIndex);

    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (className === "math") {
        mathematics[monthIndex] = grade;
        context.strokeStyle = "#FF0066";
    } else if (className === "science") {
        science[monthIndex] = grade;
        context.strokeStyle = "#9933FF";
    } else if (className === "history") {
        hist[monthIndex] = grade;
        context.strokeStyle = "#000000";
    } else {
        console.log("Something went wrong with company update");
    }
    init();
}