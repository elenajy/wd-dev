function Redirect() {
    var res = document.getElementById("res");
    window.location=("../pages/wrongquadratic.html");

  }

function fun(){
    var root1 = document.getElementById("root1").value;
    var root2 = document.getElementById("root2").value;
      var res = document.getElementById("res");

    res.style.display = "block";
        if(root1 == "x-2" && root2 == "x+3" )
        {
          res.style.backgroundColor = "green";
          res.style.color = "white";
          res.innerHTML = "Correct.";
        }
        else if(root1 == "x+3" && root2 == "x-2")
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
