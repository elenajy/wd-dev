var canvas;
var context;
var Val_max;
var Val_min;
var sections;
var xScale;
var yScale;
// Values for the Data Plot, they can also be obtained from an external file
var systolic = [120,100,110,120,100,120,120,110,100,110,100,100,110,120,120,100,100,100,100,90,90,80,90,80,90,90,80,80,90,80,80];
var diastolic = [80,80,80,80,70,70,70,80,60,60,70,80,70,70,70,70,70,70,70,60,60,60,70,70,70,60,70,80,60,60];
var glucose = [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100];
var pulse = [90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90];
var well = [70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70];

function init() {
    // set these values for your data 
    sections = 32;
    Val_max = 220;
    Val_min = 40;
    var stepSize = 10;
    var columnSize = 50;
    var rowSize = 50;
    var margin = 10;
    var xAxis = ["", " ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30","31"];

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
    plotData(systolic);
    context.strokeStyle = "#9933FF";
    plotData(diastolic);
    context.strokeStyle = "pink";
    plotData(glucose);
    context.strokeStyle = "blue";
    plotData(pulse);
    context.strokeStyle = "green";
    plotData(well);

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

function updateTable() {
    console.log("Entered updatetable()");

    systolic[0] = parseInt(document.getElementById("1s").value);
    systolic[1] = parseInt(document.getElementById("2s").value);
    systolic[2] = parseInt(document.getElementById("3s").value);
    systolic[3] = parseInt(document.getElementById("4s").value);
    systolic[4] = parseInt(document.getElementById("5s").value);
    systolic[5] = parseInt(document.getElementById("6s").value);
    systolic[6] = parseInt(document.getElementById("7s").value);
    systolic[7] = parseInt(document.getElementById("8s").value);
    systolic[8] = parseInt(document.getElementById("9s").value);
    systolic[9] = parseInt(document.getElementById("10s").value);
    systolic[10] = parseInt(document.getElementById("11s").value);
    systolic[11] = parseInt(document.getElementById("12s").value);
    systolic[12] = parseInt(document.getElementById("13s").value);
    systolic[13] = parseInt(document.getElementById("14s").value);
    systolic[14] = parseInt(document.getElementById("15s").value);
    systolic[15] = parseInt(document.getElementById("16s").value);
    systolic[16] = parseInt(document.getElementById("17s").value);
    systolic[17] = parseInt(document.getElementById("18s").value);
    systolic[18] = parseInt(document.getElementById("19s").value);
    systolic[19] = parseInt(document.getElementById("20s").value);
    systolic[20] = parseInt(document.getElementById("21s").value);
    systolic[21] = parseInt(document.getElementById("22s").value);
    systolic[22] = parseInt(document.getElementById("23s").value);
    systolic[23] = parseInt(document.getElementById("24s").value);
    systolic[24] = parseInt(document.getElementById("25s").value);
    systolic[25] = parseInt(document.getElementById("26s").value);
    systolic[26] = parseInt(document.getElementById("27s").value);
    systolic[27] = parseInt(document.getElementById("28s").value);
    systolic[28] = parseInt(document.getElementById("29s").value);
    systolic[29] = parseInt(document.getElementById("30s").value);
    systolic[30] = parseInt(document.getElementById("31s").value);

    diastolic[0] = parseInt(document.getElementById("1d").value);
    diastolic[1] = parseInt(document.getElementById("2d").value);
    diastolic[2] = parseInt(document.getElementById("3d").value);
    diastolic[3] = parseInt(document.getElementById("4d").value);
    diastolic[4] = parseInt(document.getElementById("5d").value);
    diastolic[5] = parseInt(document.getElementById("6d").value);
    diastolic[6] = parseInt(document.getElementById("7d").value);
    diastolic[7] = parseInt(document.getElementById("8d").value);
    diastolic[8] = parseInt(document.getElementById("9d").value);
    diastolic[9] = parseInt(document.getElementById("10d").value);
    diastolic[10] = parseInt(document.getElementById("11d").value);
    diastolic[11] = parseInt(document.getElementById("12d").value);
    diastolic[12] = parseInt(document.getElementById("13d").value);
    diastolic[13] = parseInt(document.getElementById("14d").value);
    diastolic[14] = parseInt(document.getElementById("15d").value);
    diastolic[15] = parseInt(document.getElementById("16d").value);
    diastolic[16] = parseInt(document.getElementById("17d").value);
    diastolic[17] = parseInt(document.getElementById("18d").value);
    diastolic[18] = parseInt(document.getElementById("19d").value);
    diastolic[19] = parseInt(document.getElementById("20d").value);
    diastolic[20] = parseInt(document.getElementById("21d").value);
    diastolic[21] = parseInt(document.getElementById("22d").value);
    diastolic[22] = parseInt(document.getElementById("23d").value);
    diastolic[23] = parseInt(document.getElementById("24d").value);
    diastolic[24] = parseInt(document.getElementById("25d").value);
    diastolic[25] = parseInt(document.getElementById("26d").value);
    diastolic[26] = parseInt(document.getElementById("27d").value);
    diastolic[27] = parseInt(document.getElementById("28d").value);
    diastolic[28] = parseInt(document.getElementById("29d").value);
    diastolic[29] = parseInt(document.getElementById("30d").value);
    diastolic[30] = parseInt(document.getElementById("31d").value);

    glucose[0] = parseInt(document.getElementById("1g").value);
    glucose[1] = parseInt(document.getElementById("2g").value);
    glucose[2] = parseInt(document.getElementById("3g").value);
    glucose[3] = parseInt(document.getElementById("4g").value);
    glucose[4] = parseInt(document.getElementById("5g").value);
    glucose[5] = parseInt(document.getElementById("6g").value);
    glucose[6] = parseInt(document.getElementById("7g").value);
    glucose[7] = parseInt(document.getElementById("8g").value);
    glucose[8] = parseInt(document.getElementById("9g").value);
    glucose[9] = parseInt(document.getElementById("10g").value);
    glucose[10] = parseInt(document.getElementById("11g").value);
    glucose[11] = parseInt(document.getElementById("12g").value);
    glucose[12] = parseInt(document.getElementById("13g").value);
    glucose[13] = parseInt(document.getElementById("14g").value);
    glucose[14] = parseInt(document.getElementById("15g").value);
    glucose[15] = parseInt(document.getElementById("16g").value);
    glucose[16] = parseInt(document.getElementById("17g").value);
    glucose[17] = parseInt(document.getElementById("18g").value);
    glucose[18] = parseInt(document.getElementById("19g").value);
    glucose[19] = parseInt(document.getElementById("20g").value);
    glucose[20] = parseInt(document.getElementById("21g").value);
    glucose[21] = parseInt(document.getElementById("22g").value);
    glucose[22] = parseInt(document.getElementById("23g").value);
    glucose[23] = parseInt(document.getElementById("24g").value);
    glucose[24] = parseInt(document.getElementById("25g").value);
    glucose[25] = parseInt(document.getElementById("26g").value);
    glucose[26] = parseInt(document.getElementById("27g").value);
    glucose[27] = parseInt(document.getElementById("28g").value);
    glucose[28] = parseInt(document.getElementById("29g").value);
    glucose[29] = parseInt(document.getElementById("30g").value);
    glucose[30] = parseInt(document.getElementById("31g").value);

    pulse[0] = parseInt(document.getElementById("1p").value);
    pulse[1] = parseInt(document.getElementById("2p").value);
    pulse[2] = parseInt(document.getElementById("3p").value);
    pulse[3] = parseInt(document.getElementById("4p").value);
    pulse[4] = parseInt(document.getElementById("5p").value);
    pulse[5] = parseInt(document.getElementById("6p").value);
    pulse[6] = parseInt(document.getElementById("7p").value);
    pulse[7] = parseInt(document.getElementById("8p").value);
    pulse[8] = parseInt(document.getElementById("9p").value);
    pulse[9] = parseInt(document.getElementById("10p").value);
    pulse[10] = parseInt(document.getElementById("11p").value);
    pulse[11] = parseInt(document.getElementById("12p").value);
    pulse[12] = parseInt(document.getElementById("13p").value);
    pulse[13] = parseInt(document.getElementById("14p").value);
    pulse[14] = parseInt(document.getElementById("15p").value);
    pulse[15] = parseInt(document.getElementById("16p").value);
    pulse[16] = parseInt(document.getElementById("17p").value);
    pulse[17] = parseInt(document.getElementById("18p").value);
    pulse[18] = parseInt(document.getElementById("19p").value);
    pulse[19] = parseInt(document.getElementById("20p").value);
    pulse[20] = parseInt(document.getElementById("21p").value);
    pulse[21] = parseInt(document.getElementById("22p").value);
    pulse[22] = parseInt(document.getElementById("23p").value);
    pulse[23] = parseInt(document.getElementById("24p").value);
    pulse[24] = parseInt(document.getElementById("25p").value);
    pulse[25] = parseInt(document.getElementById("26p").value);
    pulse[26] = parseInt(document.getElementById("27p").value);
    pulse[27] = parseInt(document.getElementById("28p").value);
    pulse[28] = parseInt(document.getElementById("29p").value);
    pulse[29] = parseInt(document.getElementById("30p").value);
    pulse[30] = parseInt(document.getElementById("31p").value);

    well[0] = parseInt(document.getElementById("1w").value);
    well[1] = parseInt(document.getElementById("2w").value);
    well[2] = parseInt(document.getElementById("3w").value);
    well[3] = parseInt(document.getElementById("4w").value);
    well[4] = parseInt(document.getElementById("5w").value);
    well[5] = parseInt(document.getElementById("6w").value);
    well[6] = parseInt(document.getElementById("7w").value);
    well[7] = parseInt(document.getElementById("8w").value);
    well[8] = parseInt(document.getElementById("9w").value);
    well[9] = parseInt(document.getElementById("10w").value);
    well[10] = parseInt(document.getElementById("11w").value);
    well[11] = parseInt(document.getElementById("12w").value);
    well[12] = parseInt(document.getElementById("13w").value);
    well[13] = parseInt(document.getElementById("14w").value);
    well[14] = parseInt(document.getElementById("15w").value);
    well[15] = parseInt(document.getElementById("16w").value);
    well[16] = parseInt(document.getElementById("17w").value);
    well[17] = parseInt(document.getElementById("18w").value);
    well[18] = parseInt(document.getElementById("19w").value);
    well[19] = parseInt(document.getElementById("20w").value);
    well[20] = parseInt(document.getElementById("21w").value);
    well[21] = parseInt(document.getElementById("22w").value);
    well[22] = parseInt(document.getElementById("23w").value);
    well[23] = parseInt(document.getElementById("24w").value);
    well[24] = parseInt(document.getElementById("25w").value);
    well[25] = parseInt(document.getElementById("26w").value);
    well[26] = parseInt(document.getElementById("27w").value);
    well[27] = parseInt(document.getElementById("28w").value);
    well[28] = parseInt(document.getElementById("29w").value);
    well[29] = parseInt(document.getElementById("30w").value);
    well[30] = parseInt(document.getElementById("31w").value);

    console.log("Testing Systolic: ", systolic.toString());
    console.log("Testing Diastolic: ", diastolic.toString());
    console.log("Testing Glucose: ", glucose.toString());
    console.log("Testing Pulse: ", pulse.toString());
    console.log("Testing Well: ", well.toString());

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    init();
}