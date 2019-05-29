var canvas;
var context;
var Val_max;
var Val_min;
var sections;
var xScale;
var yScale;
// Values for the Data Plot, they can also be obtained from an external file
var Albertsons = [100, 102, 87, , 100, 123, 100, 90, 87, 91, 93, 88];
var IdaCorp = [30, 50, 70, 80, 90, 100, 95, 91, 85, 92, 99, 130];
var Micron = [20, -10, -20, -25, -40, 5, 10, 28, 30, 43, 65, 80];

function init() {
    // set these values for your data 
    sections = 12;
    Val_max = 130;
    Val_min = -50;
    var stepSize = 10;
    var columnSize = 50;
    var rowSize = 50;
    var margin = 10;
    var xAxis = [" ", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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
    plotData(Albertsons);
    context.strokeStyle = "#9933FF";
    plotData(IdaCorp);
    context.strokeStyle = "#000";
    plotData(Micron);

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
    var company = document.querySelector("#company").value;
    console.log("I read the company as: ", company);
    var month = document.querySelector("#month").value;
    console.log("I read the month as: ", month);
    var profit = parseFloat(document.querySelector("#profit").value);
    console.log("I read the profit as: ", profit);

    var monthIndex;
    if (month === "Jan") {
        monthIndex = 0;
    } else if (month === "Feb") {
        monthIndex = 1;
    } else if (month === "Mar") {
        monthIndex = 2;
    } else if (month === "Apr") {
        monthIndex = 3;
    } else if (month === "May") {
        monthIndex = 4;
    } else if (month === "Jun") {
        monthIndex = 5;
    } else if (month === "Jul") {
        monthIndex = 6;
    } else if (month === "Aug") {
        monthIndex = 7;
    } else if (month === "Sep") {
        monthIndex = 8;
    } else if (month === "Oct") {
        monthIndex = 9;
    } else if (month === "Nov") {
        monthIndex = 10;
    } else if (month === "Dec") {
        monthIndex = 11;
    } else {
        console.log("Something went wrong in month conditional")
    } console.log("Month Index: ", monthIndex);

    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (company === "Albertsons") {
        Albertsons[monthIndex] = profit;
        context.strokeStyle = "#FF0066";
    } else if (company === "IdaCorp") {
        IdaCorp[monthIndex] = profit;
        context.strokeStyle = "#9933FF";
    } else if (company === "Micron") {
        Micron[monthIndex] = profit;
        context.strokeStyle = "#000000";
    } else {
        console.log("Something went wrote with company update");
    }
    init();
}

function updateTable() {
    console.log("Entered updatetable()");

    Albertsons[0] = parseInt(document.getElementById("A0").value);
    Albertsons[1] = parseInt(document.getElementById("A1").value);
    Albertsons[2] = parseInt(document.getElementById("A2").value);
    Albertsons[3] = parseInt(document.getElementById("A3").value);
    Albertsons[4] = parseInt(document.getElementById("A4").value);
    Albertsons[5] = parseInt(document.getElementById("A5").value);
    Albertsons[6] = parseInt(document.getElementById("A6").value);
    Albertsons[7] = parseInt(document.getElementById("A7").value);
    Albertsons[8] = parseInt(document.getElementById("A8").value);
    Albertsons[9] = parseInt(document.getElementById("A9").value);
    Albertsons[10] = parseInt(document.getElementById("A10").value);
    Albertsons[11] = parseInt(document.getElementById("A11").value);
    
    IdaCorp[0] = parseInt(document.getElementById("I0").value);
    IdaCorp[1] = parseInt(document.getElementById("I1").value);
    IdaCorp[2] = parseInt(document.getElementById("I2").value);
    IdaCorp[3] = parseInt(document.getElementById("I3").value);
    IdaCorp[4] = parseInt(document.getElementById("I4").value);
    IdaCorp[5] = parseInt(document.getElementById("I5").value);
    IdaCorp[6] = parseInt(document.getElementById("I6").value);
    IdaCorp[7] = parseInt(document.getElementById("I7").value);
    IdaCorp[8] = parseInt(document.getElementById("I8").value);
    IdaCorp[9] = parseInt(document.getElementById("I9").value);
    IdaCorp[10] = parseInt(document.getElementById("I10").value);
    IdaCorp[11] = parseInt(document.getElementById("I11").value);

    Micron[0] = parseInt(document.getElementById("M0").value);
    Micron[1] = parseInt(document.getElementById("M1").value);
    Micron[2] = parseInt(document.getElementById("M2").value);
    Micron[3] = parseInt(document.getElementById("M3").value);
    Micron[4] = parseInt(document.getElementById("M4").value);
    Micron[5] = parseInt(document.getElementById("M5").value);
    Micron[6] = parseInt(document.getElementById("M6").value);
    Micron[7] = parseInt(document.getElementById("M7").value);
    Micron[8] = parseInt(document.getElementById("M8").value);
    Micron[9] = parseInt(document.getElementById("M9").value);
    Micron[10] = parseInt(document.getElementById("M10").value);
    Micron[11] = parseInt(document.getElementById("M11").value);

    console.log("Testing Albertsons: ", Albertsons.toString());
    console.log("Testing IdaCorp: ", IdaCorp.toString());
    console.log("Testing Micron: ", Micron.toString());

    context.setTransform(1,0,0,1,0,0);
    context.clearRect(0,0,canvas.width,canvas.height);
    init();
}