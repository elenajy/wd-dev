function classperiod() {
    let maindiv = document.getElementById("classperiod");
    let newElement = document.createElement("h1");
    let date = new Date();
    let currentHour = date.getHours();
    console.log("class period currentHour ", currentHour);

    let createTxtMsg;
    if (currentHour >= 7 && currentHour < 9) {
        createTxtMsg = "I'm in First Period";
    } else if (currentHour >= 9 && currentHour < 11) {
        createTxtMsg = "I'm in Second Period";
    } else if (currentHour >= 11 && currentHour < 13) {
        createTxtMsg = "I'm in Third Period";
    } else if (currentHour >= 13 && currentHour < 15) {
        createTxtMsg = "I'm in Fourth Period";
    } else if (currentHour >= 15 && currentHour < 23) {
        createTxtMsg = "I'm not at School"
    } else {
        createTxtMsg = "Error";
    }
    let createEleTxt = document.createTextNode(createTxtMsg);
    newElement.appendChild(createEleTxt);
    maindiv.appendChild(newElement);
    newElement.setAttribute("class","welcome");
    newElement.style.cssText = "text-align: center; font-size: 60px; color: purple";
}