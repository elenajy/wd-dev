function calc() {
  var a = parseFloat(document.querySelector("#value1").value);
  var b = parseFloat(document.querySelector("#value2").value);
  var op = document.querySelector("#operator").value;
  var calculate;

  if(isNaN(a)){
  	calculate="Please input Numbers."
  }else if(isNaN(b)){
  	calculate="Please input Numbers."
  }else {
    if (op=="add") {
      calculate=a+b;
    } else if (op=="sub") {
      calculate=a-b;
    } else if (op=="div") {
      calculate=a/b;
    } else if (op=="mul") {
      calculate=a*b;
    } else {
      // something went wrong
    }
  }

  console.log(calculate);
  document.querySelector("#result").innerHTML = calculate;
}
