function Redirect() {
    var res = document.getElementById("res");
    window.location=("../pages/englishsolution.html");
  }

function fun(){
    var noun1 = document.getElementById("noun1").value;
    var noun2 = document.getElementById("noun2").value;
    var adjective = document.getElementById("adjective1").value;
    var verb = document.getElementById("verb").value;
    var res = document.getElementById("res");

    res.style.display = "block";
        if(noun1 == "fox" && noun2 == "dog" && adjective == "quick" && verb == "jumped")
        {
          res.style.backgroundColor = "green";
          res.style.color = "white";
          res.innerHTML = "Correct.";
        }
        else  {
          res.style.backgroundColor = "red";
          res.style.color = "white";
          res.innerHTML = "Wrong :( - You will be redirected to a solution page.";
          setTimeout(Redirect,5000);
        }
    }
