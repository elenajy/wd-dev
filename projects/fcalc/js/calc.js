console.log("Yay! I have entered fincalc.js")

var principal;
var costWithSales;

function salesTax() {
    console.log("Hurray! I have entered salesTax()");
    var cost = parseFloat(document.querySelector("#originalPrice").value);
    var tax = parseFloat(document.querySelector("#salesTax").value);
    tax = (tax/100)+1;
    var costWithSales = cost*tax;
    document.getElementById('totalCost').value = document.getElementById('totalCost').value + costWithSales;
}

function calcPrincipal() {
    console.log("Hurray! I have entered calcPrincipal()");
    var cost = parseFloat(document.querySelector("#totalCost").value);
    var down = parseFloat(document.querySelector("#downPayment").value);
    principal = cost-down;

    console.log("cost: ", cost);
    console.log("down: ", down);
    console.log("principal: ", principal);

    document.querySelector("#divPrincipal").innerHTML = principal;
    document.getElementById('inputPrincipal').value = document.getElementById('inputPrincipal').value + principal
}

function calcPayment() {
    console.log("Yes! I clicked a button and have entered calcPayment()");
    var theAPR = parseFloat(document.querySelector("#apr").value);
    var theMonths = parseFloat(document.querySelector("#numberPayments").value);
    console.log("The entered APR is: ", theAPR);
    theAPR = theAPR/100;
    console.log("APR changed to decimal is: ", theAPR);
    console.log("The entered numberPayments is ", theMonths);

    var numerator = principal * (theAPR/12) * ((1 + (theAPR/12)) ** theMonths);
    console.log("The numerator is: ", numerator);

    var denominator = ((1+ + (theAPR/12))**theMonths)-1;
    console.log("The denominator is: ", denominator);

    var thePayment = numerator / denominator;
    thePayment = thePayment.toFixed(2);
    console.log("The monthly payment is: ", thePayment);  

    document.getElementById('inputPayment').value = document.getElementById('inputPayment').value + thePayment
}