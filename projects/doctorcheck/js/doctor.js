function selectPatient() {
    console.log("Entered selectPatient()")

    var patient = document.querySelector("#selectPatient").value;
    console.log("Selected patient is: ", patient);

    if (patient === "elena") {
        window.location.href = "http://www.westada.tech/b4/elenay/projects/jsgraphtable/blood.html";
    } else if (patient === "kaylee") {
        window.location.href = "http://westada.tech/b4/kayleen/projects/medgraph/index.html";
    } else if (patient === "stu") {
        window.location.href = "http://westada.tech/b4/stuarte/patientdata/index.html";
    } else if (patient === "jen") {
        window.location.href = "http://www.westada.tech/b4/jennifern/projects/Semester%202/JSmedgraph/index.html";
    } else if (patient === "liam") {
        window.location.href = "http://www.westada.tech/b4/liaml/jsGraphing/health/index.html";
    } else if (patient === "cade") {
        window.location.href = "http://www.westada.tech/b4/cadep/projects/jsGraphTable/index1.html";
    } else if (patient === "drew") {
        window.location.href = "http://www.westada.tech/b4/drewp/projects/patientdata/index.html";
    } else if (patient === "aiden") {
        window.location.href = "http://www.westada.tech/b4/aidena/projects/medGraph/index.html";
    } else if (patient === "trang") {
        window.location.href = "http://westada.tech/b4/trangt/project/docCheckGraph/index.html";
    } else if (patient === "colin") {
        window.location.href = "http://westada.tech/b4/colinh/Projects/patientdata/index.html"
    } else if (patient === "anthony") {
        window.location.href = "http://westada.tech/b4/anthonyg/bloodpressure.html";
    } else if (patient === "nathan") {
        window.location.href = "http://westada.tech/b4/nathank/projects/doctorstuff/";
    } else {
        console.log("selectPatient() failed")
    }
}