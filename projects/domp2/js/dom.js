function goodMorning() {
    let getBody = document.body;
    let newElement = document.createElement("h1");
    let date = new Date();
    let currentHour = date.getHours();
    console.log("currentHour ",currentHour);

    let createTxtMsg;
    if (currentHour >= 1 && currentHour < 10) {
        createTxtMsg = "Good Morning!";
    } else if (currentHour >= 10 && currentHour < 12) {
        createTxtMsg = "Good Day!";
    } else if (currentHour >= 12 && currentHour < 18) {
        createTxtMsg = "Good Afternoon!";
    } else if (currentHour >= 18 && currentHour < 24) {
        createTxtMsg = "Good Night!";
    } else {
        createTxtMsg = "Error";
    }
    let createEleTxt = document.createTextNode(createTxtMsg);
    newElement.appendChild(createEleTxt);
    getBody.appendChild(newElement);
    newElement.setAttribute("class","welcome");
    newElement.style.cssText = "text-align: center; font-size: 60px; color: #FF0000";
}

function goodMorningMain() {
    console.log("entered good morning");
    let maindiv = document.getElementById("maindiv");
    let newElement = document.createElement("h1");
    let date = new Date();
    let currentHour = date.getHours();
    console.log("currentHour ",currentHour);

    let createTxtMsg;
    if (currentHour >= 1 && currentHour < 10) {
        createTxtMsg = "Good Morning!";
    } else if (currentHour >= 10 && currentHour < 12) {
        createTxtMsg = "Good Day!";
    } else if (currentHour >= 12 && currentHour < 18) {
        createTxtMsg = "Good Afternoon!";
    } else if (currentHour >= 18 && currentHour < 24) {
        createTxtMsg = "Good Night!";
    } else {
        createTxtMsg = "Error";
    }
    let createEleTxt = document.createTextNode(createTxtMsg);
    newElement.appendChild(createEleTxt);
    maindiv.appendChild(newElement);
    newElement.setAttribute("class","welcome");
    newElement.style.cssText = "text-align: center; font-size: 60px; color: purple";
}

goodMorning()