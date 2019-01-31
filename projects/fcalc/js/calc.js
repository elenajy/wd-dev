console.log("Yay! I have entered fincalc.js")

function calcPrincipal() {
    console.log("Hurray! I have entered calcPrincipal()");
    var cost = parseFloat(document.querySelector("#originalPrice").value);
    var down = parseFloat(document.querySelector("#downPayment").value);
    var principal = cost-down;

    console.log("cost: ", cost);
    console.log("down: ", down);
    console.log("principal: ", principal);

    document.querySelector("#divPrincipal").innerHTML = principal;
    document.getElementById('inputPrincipal').value = document.getElementById('inputPrincipal').value + principal
}

