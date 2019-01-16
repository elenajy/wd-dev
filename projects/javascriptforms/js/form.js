function fun() {
  var theClass = document.getElementById("theClass").value;
  var teacherName = document.getElementById("teacherName").value;
  var topic = document.getElementById("topic").value;
  var secret = document.getElementById("secret").value;
  var res = document.getElementById("res");

  res.style.display = "block";
  if (theClass == "" || teacherName == "" || topic == "" || secret == "") {
    res.style.backgroundColor = "red";
    res.style.color = "white";
    res.innerHTML = "Please Fill in all the Fields";
  } else if (secret.length < 3) {
    res.style.backgroundColor = "red";
    res.style.color = "white";
    res.innerHTML = "Secret word is too short";
  } else if (theClass == "Math" && teacherName == "Smith" && topic == "Quadratics" && secret == "Quad") {
    alert("It's Working!");
    location.replace("pages/quadratic.html");
  } else {
    res.style.backgroundColor = "green";
    res.style.color = "white";
    res.innerHTML = "Sorry, I don't recognize that information. Please try again.";
  }
}
