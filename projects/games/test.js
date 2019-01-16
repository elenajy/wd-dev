var myGamePiece;
  var myObstacles = [];
  var myGoal;
  var myScore;
  var startedBefore=false;
  var gameSpeed = 1;

  function restart(){startedBefore=true;initialize();startGame();}

  function initialize() {
    myGamePiece=null;
    myObstacles=[];
    myScore=null;
    myGoal=null;
  }

  function startGame() {
    myGamePiece = new component(30, 30, "images/smiley.gif", 10, 120, "image");
    myGamePiece.gravity = 0.05;
    myGoal = new component(20, 1000, "yellow", 1000-20, 0);
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea.start();
  }

  var myGameArea = {
    canvas : document.getElementById("gameCanvas"),
    start : function() {
        this.canvas.width = 1000;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        //document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        if(startedBefore===false){this.interval = setInterval(updateGameArea, 20);}
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        })
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
      this.image = new Image();
      this.image.src = color;
    }
    this.score = 0;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.gravity = 0;
    this.gravitySpeed = 0;
    this.color=color;
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
          ctx.font = this.width + " " + this.height;
          ctx.fillStyle = this.color;
          ctx.fillText(this.text, this.x, this.y);
        } else if (type == "image") {
          ctx.drawImage(this.image,
          this.x,
          this.y,
          this.width, this.height);
        } else {
          ctx.fillStyle = this.color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        //this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
        this.hitTop();
    }
    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
    }
    this.hitTop = function() {
        var ceiling = 0;
        if (this.y < ceiling) {
            this.y = ceiling;
            this.speedY = 0;
            this.gravitySpeed=0;
        }
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
    this.passThrough = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var pass = true;
        if ((myright < otherleft) || (myleft > otherright)) {
            pass = false;
        }
        return pass;
    }
    this.changeColor = function(col) {
      this.color=col;
    }
  }

  function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            return;
        }
        /*if (myGamePiece.passThrough(myObstacles[i])) {
            /*myGamePiece.changeColor("yellow");
            console.log(myGamePiece.color);
            console.log("Passed");
        }else{
          //myGamePiece.changeColor("red");
        }*/
    }
    if (myGamePiece.crashWith(myGoal)) {
      alert('You win! Score: '+myGameArea.frameNo);
      restart();
    }
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    if (myGameArea.key && myGameArea.key == 65) {myGamePiece.speedX = -2; }
    if (myGameArea.key && myGameArea.key == 68) {myGamePiece.speedX = 2; }
    if (myGameArea.key && myGameArea.key == 87) {myGamePiece.speedY = -2; }
    if (myGameArea.key && myGameArea.key == 83) {myGamePiece.speedY = 2; }
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 600;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(20, height, "green", x, 0));
        myObstacles.push(new component(20, x - height - gap, "green", x, height + gap));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1*gameSpeed;
        myObstacles[i].update();
    }
    myScore.text="SCORE: " + myGameArea.frameNo;
    myScore.update();
    myGamePiece.newPos();
    myGamePiece.update();
    myGoal.update();
  }
  function moveup() {
    stopMove();
    myGamePiece.speedY -= 1;
  }

  function movedown() {
    stopMove();
    myGamePiece.speedY += 1;
  }

  function moveleft() {
    stopMove();
    myGamePiece.speedX -= 1;
  }

  function moveright() {
    stopMove();
    myGamePiece.speedX += 1;
  }
  function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
  }

  function accelerate(n) {
    myGamePiece.gravity = n;
  }
  function stopMove() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
  }
