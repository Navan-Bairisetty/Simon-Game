
var buttonColors = ["red", "blue", "green", "yellow"];
userClickedPattern = []
var gamePattern = []
var level = 0;
var started=false;
function nextSequence() {
    userClickedPattern=[];
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    level++;
    comment(level);
    playSound(randomChosenColour);
    randomChosenColour = "#" + randomChosenColour;
    level=gamePattern.length;
   // $("h1").text("Level " + level);
    $(randomChosenColour).fadeOut(100).fadeIn(100);
}
function comment(level){
    if (level==6 || level==11)
        {      if(level==6)     $('h1').text("You are Doing Good 🏆 ");   
               if(level==11)    $('h1').text("You are a 👑")
            setTimeout( function() { $("h1").text("Level " + level);    }    ,2500);
        }
        else{
            $("h1").text("Level " + level);
        }
}
function checkPattern(currentlevel) {
    if (userClickedPattern[currentlevel] === gamePattern[currentlevel]) {
        console.log("Success");
        if (gamePattern.length === userClickedPattern.length) {
    
            setTimeout(function () { nextSequence(); }, 1500);
        }

    }
    else {
        console.log("Fail");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () { $("body").removeClass("game-over"); }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        restart();
        
    }
}
function restart(){
    gamePattern=[];
    level=0;
    started=false;
    
}
$(document).on("keydown", function (e) {

    if (!started) {
        nextSequence();
        started=true;
    }
}
);

$(".btn").on("click", function () {   // u can also use attr to get the attributes
    userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkPattern(userClickedPattern.length - 1);
}
);

function playSound(color) {
    switch (color) {
        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;
        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
        case "red":
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;
        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
        case "wrong":
            var wrong = new Audio("sounds/wrong.mp3");
            wrong.play();
            break;

        default: console.log(color);
            break;
    }
}


function animatePress(currentColor) {
    //  console.log(currentColor);
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () { $("#" + currentColor).removeClass("pressed") }, 100);

}