// function gamePlay() {

// var self = this,
// w = window.innerWidth,
// h = window.innerHeight,
// stage = document.getElementById('stage'),
// startButton = document.getElementById("btn-outline-danger"),
// // title = document.getElementById('title'),
// // questionTitle = document.getElementsByClassName("questions"),
// score = document.getElementsByClassName("score"),
// scoreSpan = score[0].getElementsByTagName('span'),
var timer = document.getElementsByClassName("timer");
var timerSpan = timer[0].getElementsByTagName("span");
// gameChoices = document.getElementById('gameChoices'),
// gameHeader = document.getElementById('gameHeader'),
// buttonOne = document.getElementById('buttonOne'),
// buttonTwo = document.getElementById('buttonTwo'),
// buttonThree = document.getElementById('buttonThree'),
// buttonFour = document.getElementById('buttonFour'),
// buttonArray = [buttonOne, buttonTwo, buttonThree, buttonFour],
// // modal_window = document.getElementById('modal_window')
// startAnimation = new TimelineMax({repeat:0}),
var gameIndex = 0;
// actualScore = 0,
var timerIndex = 30;
// runningGameAgain = false,
var timerObject = undefined;
var gameQuestions = [];

// Array of Songs

var songs = [
  new Audio("audio/hip-hop/post-malone-rockstar.mp3"),
  new Audio("audio/hip-hop/kendrick-humble.mp3"),
  new Audio("audio/hip-hop/future-mask-off.mp3"),
  new Audio("audio/hip-hop/eminem-killshot.mp3"),
  new Audio("audio/hip-hop/logic-numbers.mp3")
];

var answers = [
  ["G-Eazy", "Post-Malone", "Quavo", "Travis Scott"],
  ["Kendrick Lamar", "ScHoolboy Q", "A$AP Rocky", "Big Sean"],
  ["2 Chainz", "Gucci Mane", "Meek Mill", "Future"],
  ["Machine Gun Kelly", "Yelawolf", "Eminem", "Dr. Dre"][
    ("G-Eazy", "Hoodie Allen", "Mac Miller", "Logic")
  ]
];

var correctAnswers = [1, 0, 3, 2, 3];

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
shuffle(songs);
console.log(songs);

$("#game-area").hide();

$(".btn-outline-danger").click(function() {
  $(".btn-outline-danger").hide();
  setTimeout(shufflePics, 2000);
  setTimeout(playGame, 2000);
});

function playGame() {
  $("#game-area").show();
  var timeLeft = 30;
  var timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      console.log("time's up");
    } else {
      timeLeft--;
      timerSpan[0].textContent = timeLeft;
    }
  }

  //   function nextSong() {
  //     timeLeft = 30;
  //     timerSpan[0].textContent = timeLeft;
  //   }
}
