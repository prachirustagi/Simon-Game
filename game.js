var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keydown (function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
})

$(".btn").click (function () {
     var userChoseColor = $(this).attr("id");

     userClickedPattern.push (userChoseColor);

     playSound(userChoseColor);

     animatePress(userChoseColor);

     checkAnswer (userClickedPattern.length-1);
});

function nextSequence () {
   var randomNumber = Math.floor (Math.random() * 4) + 1;

   var randomChosenColour = buttonColours [randomNumber];

   gamePattern.push (randomChosenColour);

   $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

   playSound(randomChosenColour);

   animatePress(userChoseColor);
}

function playSound (name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress (currentColour) {
   $("#" + currentColour).addClass("pressed");

   setTimeout (function () {
      $("#" + currentColour).removeClass("pressed"),
   }, 100 );
}

function checkAnswer (currentLevel) {

}
