// stage = document.getElementById('stage'),
// startButton = document.getElementById("btn-outline-danger"),
// // title = document.getElementById('title'),
// // questionTitle = document.getElementsByClassName("questions"),
var score = document.getElementsByClassName("score");
var scoreSpan = score[0].getElementsByTagName("span");
var timer = document.getElementsByClassName("timer");
var timerSpan = timer[0].getElementsByTagName("span");
// gameChoices = document.getElementById('gameChoices'),
// gameHeader = document.getElementById('gameHeader'),
var buttonOne = document.getElementById("buttonOne");
var buttonTwo = document.getElementById("buttonTwo");
var buttonThree = document.getElementById("buttonThree");
var buttonFour = document.getElementById("buttonFour");
var buttonArray = [buttonOne, buttonTwo, buttonThree, buttonFour];
var modal_window = document.getElementById("modal_window");
// startAnimation = new TimelineMax({repeat:0}),
var gameIndex = 0;
var actualScore = 0;
var timeLeft = 30;
// runningGameAgain = false,
var timerObject = undefined;
var gameQuestions = [];
var audio;
var song;
var target = "";

// Array of Songs

var songs = [
  {
    url: "audio/hip-hop/post-malone-rockstar.mp3",
    answer: ["G-Eazy", "Post-Malone", "Quavo", "Travis Scott"],
    correctAnswer: "Post-Malone"
  },
  {
    url: "audio/hip-hop/kendrick-humble.mp3",
    answer: ["Kendrick Lamar", "ScHoolboy Q", "A$AP Rocky", "Big Sean"],
    correctAnswer: "Kendrick Lamar"
  },
  {
    url: "audio/hip-hop/future-mask-off.mp3",
    answer: ["2 Chainz", "Gucci Mane", "Meek Mill", "Future"],
    correctAnswer: "Future"
  },
  {
    url: "audio/hip-hop/eminem-killshot.mp3",
    answer: ["Machine Gun Kelly", "Yelawolf", "Eminem", "Dr. Dre"],
    correctAnswer: "Eminem"
  },
  {
    url: "audio/hip-hop/logic-numbers.mp3",
    answer: ["G-Eazy", "Paramore", "Mac Miller", "Logic"],
    correctAnswer: "Logic"
  }
];

var corect = ["Post-Malone", "Kendrick Lamar", "Future", "Eminem", "Logic"];

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

function startGameForNewSong() {
  song = songs[Math.floor(Math.random() * songs.length)];
  console.log(song);
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
  // console.log(rightAnswerText);
  // console.log(rightAnswerIndex);
  songs.splice(songs.indexOf(song), 1);
  if (songs.length === 0) {
    console.log("FIN");
    clearInterval(runTimer);
    return;
  }
  // console.log(songs);
}

$("#game-area").hide();
$(".modal.modal-dialog-centered").hide();

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

function playGame() {
  $("#game-area").show();
  runTimer();
}

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

function EndOfGame() {
  $(".modal.modal-dialog-centered").show();
  clearInterval(runTimer);
}
