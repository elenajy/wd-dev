var canvas;
var context;
var Val_Max;
var Val_Min;
var sections;
var xScale;
var yScale;
var y;
//values of each item on the graph
var itemName = ["China", "USA", "India", "Japan", "Germany", "Russia", "Indonesia", "Brazil", "UK", "France", "Mexico", "Italy", "Turkey", "Korea", "Spain"];
var itemValue = [25238, 21998, 20412, 10385, 5619, 4373, 4168, 3492, 3388, 3028, 2960, 2571, 2399, 2320, 2138, 1864];

function init() {
    console.log("Entered init()");
    //initialize values for each variable
    sections = 15;
    Val_Max = 26000;
    var stepSize = 1000;
    var columnSize = 50;
    var rowSize = 60;
    var margin = 10;
    var header = "In Billion $USD";

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    context.fillStyle = "#000";


    yScale = (canvas.height - columnSize - margin) / (Val_Max);
    xScale = (canvas.width - rowSize) / (sections + 1);

    context.strokeStyle = "#000"; //background black lines
    context.beginPath();
    //column names
    context.font = "13pt Arial";
    context.fillText(header, 0, columnSize - margin);
    //draw lines in the background
    context.font = "10pt Helvetica";
    var count = 0;
    for (scale = Val_Max; scale >= 0; scale = scale - stepSize) {
        y = columnSize + (yScale * count * stepSize);
        context.fillText(scale, margin, y + margin);
        context.moveTo(rowSize, y);
        context.lineTo(canvas.width, y);
        count++;
    }
    context.stroke();


    //print names of each data entry
    context.font = "10pt Verdana";
    context.textBaseline = "bottom";
    for (i = 0; i < 15; i++) {
        computeHeight(itemValue[i]);
        context.fillText(itemName[i], xScale * (i + 1), y - margin);
    }

    //shadow for graph's bar lines with color and offset

    context.fillStyle = "#9933FF";
    context.shadowColor = 'rgba(128,128,128.0.5)';

    //shadow offset along X and Y direction
    context.shadowOffsetX = 9;
    context.shadowOffsetY = 3;

    //translate to bottom of graph in order to match the data
    context.translate(0, canvas.height - margin);
    context.scale(xScale, -1 * yScale);

    //draw each graph bars
    for (i = 0; i < 15; i++) {
        context.fillRect(i + 1, 0, 0.3, itemValue[i]);
    }
}

function computeHeight(value) {
    y = canvas.height - value * yScale;
}

function update() {
    console.log("Entered update function.");
    var country = document.querySelector("#country").value;
    console.log("I read the country as: ", country);
    var ppp = parseFloat(document.querySelector("#ppp").value);
    console.log("I read the ppp as: ", ppp);

    var monthIndex;
    if (country === "china") {
        monthIndex = 0;
    } else if (country === "usa") {
        monthIndex = 1;
    } else if (country === "india") {
        monthIndex = 2;
    } else if (country === "japan") {
        monthIndex = 3;
    } else if (country === "germany") {
        monthIndex = 4;
    } else if (country === "russia") {
        monthIndex = 5;
    } else if (country === "indonesia") {
        monthIndex = 6;
    } else if (country === "brazil") {
        monthIndex = 7;
    } else if (country === "uk") {
        monthIndex = 8;
    } else if (country === "france") {
        monthIndex = 9;
    } else if (country === "mexico") {
        monthIndex = 10;
    } else if (country === "italy") {
        monthIndex = 11;
    } else if (country === "turkey") {
        monthIndex = 12;
    } else if (country === "korea") {
        monthIndex = 13;
    } else if (country === "spain") {
        monthIndex = 14;
    } else {
        console.log("Something went wrong in country conditional")
    }
    console.log("Country: ", country);

    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    itemValue[monthIndex] = ppp;
    console.log("Testing itemValue: ", itemValue.toString());

    context.setTransform(1,0,0,1,0,0);
    context.clearRect(0,0,canvas.width,canvas.height);

    init();
}