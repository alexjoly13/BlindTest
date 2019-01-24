var score = document.getElementsByClassName("score");
var scoreSpan = score[0].getElementsByTagName("span");
var timer = document.getElementsByClassName("timer");
var timerSpan = timer[0].getElementsByTagName("span");
var buttonOne = document.getElementById("buttonOne");
var buttonTwo = document.getElementById("buttonTwo");
var buttonThree = document.getElementById("buttonThree");
var buttonFour = document.getElementById("buttonFour");
var buttonArray = [buttonOne, buttonTwo, buttonThree, buttonFour];
var modal_window = document.getElementById("modal_window");
var gameIndex = 0;
var actualScore = 0;
var timeLeft = 30;
var timerObject = undefined;
var gameQuestions = [];
var audio;
var song;
var target = "";

// Array of Songs

var songs = [
  {
    url: "audio/metal/adtr.mp3",
    answer: ["A Day To Remember", "Alexisonfire", "Silverstein", "Underoath"],
    correctAnswer: "A Day To Remember"
  },
  {
    url: "audio/metal/deftones.mp3",
    answer: ["KoRn", "Slipknot", "Deftones", "Filter"],
    correctAnswer: "Deftones"
  },
  {
    url: "audio/metal/gojira.mp3",
    answer: ["Metallica", "Mastodon", "Meshuggah", "Gojira"],
    correctAnswer: "Gojira"
  },
  {
    url: "audio/metal/inflames.mp3",
    answer: ["Dark Tranquillity", "In Flames", "Soilwork", "The Haunted"],
    correctAnswer: "In Flames"
  },
  {
    url: "audio/metal/oceano.mp3",
    answer: ["Carnifex", "Despised Icon", "Oceano", "Whitechapel"],
    correctAnswer: "Oceano"
  }
];

var corect = ["A Day To Remember", "Deftones", "Gojira", "In Flames", "Oceano"];

// Suffle Songs
// -------------------------------------------------------------------------------------------------------------------------

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

// Launch Songs
// -------------------------------------------------------------------------------------------------------------------------

function startGameForNewSong() {
  song = songs[Math.floor(Math.random() * songs.length)];

  //Play it
  audio = new Audio(song.url);
  audio.volume = 1;
  audio.play();
  timeLeft = 30;
  buttonOne.textContent = song.answer[0];
  buttonTwo.textContent = song.answer[1];
  buttonThree.textContent = song.answer[2];
  buttonFour.textContent = song.answer[3];
  // $("#buttonTwo").css("background-color", "black");
  $(".score").css("background-color", "black");
  var rightAnswerText = song.answer;
  var rightAnswerIndex = song.correctAnswer;
  songs.splice(songs.indexOf(song), 1);
  if (songs.length === 0) {
    console.log("FIN");
    clearInterval(runTimer);
    return;
  }
  // console.log(songs);
}

// Display and buttons onclicks
// -------------------------------------------------------------------------------------------------------------------------

$("#game-area").hide();
$(".modal.modal-dialog-centered").hide();
$("h1").hide();

$(".btn-outline-danger").click(function() {
  $(".btn-outline-danger").hide();
  setTimeout(startGameForNewSong, 2000);
  setTimeout(playGame, 2000);
});

$("#buttonOne").click(function() {
  target = event.target.innerHTML;

  audio.pause();
  clearInterval(runTimer);
  checkAnswers();

  setTimeout(startGameForNewSong, 2000);
  if (songs.length <= 0) {
    EndOfGame();
  }
});

$("#buttonTwo").click(function() {
  target = event.target.innerHTML;

  audio.pause();
  clearInterval(runTimer);
  checkAnswers();

  setTimeout(startGameForNewSong, 2000);
  if (songs.length <= 0) {
    EndOfGame();
  }
});

$("#buttonThree").click(function() {
  target = event.target.innerHTML;

  audio.pause();
  clearInterval(runTimer);
  checkAnswers();

  setTimeout(startGameForNewSong, 2000);
  if (songs.length <= 0) {
    EndOfGame();
  }
});

$("#buttonFour").click(function() {
  target = event.target.innerHTML;

  audio.pause();
  clearInterval(runTimer);
  checkAnswers();

  setTimeout(startGameForNewSong, 2000);
  if (songs.length <= 0) {
    EndOfGame();
  }
});

// Setting the game up at first
// -------------------------------------------------------------------------------------------------------------------------

function playGame() {
  $("#game-area").show();
  $("h1").show();
  runTimer();
}

// Timer
// -------------------------------------------------------------------------------------------------------------------------

function runTimer() {
  setInterval(countDown, 1000);
}

function countDown() {
  if (timeLeft === 0) {
    clearInterval(runTimer);
    audio.pause();
    setTimeout(startGameForNewSong, 1000);
    timeLeft = 30;
  } else if (songs.length <= 0) {
    clearInterval(runTimer);
  } else {
    timeLeft--;
    timerSpan[0].textContent = timeLeft;
  }
}

// Checking for answers
// -------------------------------------------------------------------------------------------------------------------------

scoreSpan[0].textContent = actualScore;
function checkAnswers() {
  clearInterval(timerObject);

  if (corect.includes(target)) {
    // console.log("dhfh");
    actualScore += 50;
    $(".score").css("background-color", "green");
    scoreSpan[0].textContent = actualScore;
  } else {
    $(".score").css("background-color", "red");
    // console.log("pizza");
  }
}

// Tweet the score button
// -------------------------------------------------------------------------------------------------------------------------

function tweetScore() {
  var u = "https://alexjoly13.github.io/BlindTest/Project1/hip-hop.html";
  var text =
    "I just played the finest BlindTest Party and scored: " +
    actualScore +
    " points! @AlxSlwnds";
  var url =
    "https://twitter.com/intent/tweet?original_referer=" +
    u +
    "&url=" +
    u +
    "&text=" +
    text;
  var newWindow = window.open(url, "name", "height=400,width=450");
  if (window.focus) {
    newWindow.focus();
  }
  return false;
}

// Game Over
// -------------------------------------------------------------------------------------------------------------------------

function EndOfGame() {
  $(".modal.modal-dialog-centered").show();
  clearInterval(runTimer);
  $(".showScore").innerHTML = actualScore;
}
