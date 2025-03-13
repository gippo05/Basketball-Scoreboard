let scoreTeamA = 0;
let scoreTeamB = 0;


// BUTTONS FOR TEAM A
function addOnePointTeamA() {
  scoreTeamA += 1;
  document.getElementById('score-a').innerText = scoreTeamA;
}

function removeOnePointTeamA() {
    scoreTeamA -= 1;
    document.getElementById('score-a').innerText = scoreTeamA;
  }

function addTwoPointsTeamA() {
  scoreTeamA += 2;
  document.getElementById('score-a').innerText = scoreTeamA;
}

function addThreePointsTeamA() {
  scoreTeamA += 3;
  document.getElementById('score-a').innerText = scoreTeamA;
}

function addFoulA(){
    let foulA = document.getElementById('foul-teamA').innerText;
    foulA++;
    document.getElementById('foul-teamA').innerText = foulA;
}

function removeFoulA(){
    let foulA = document.getElementById('foul-teamA').innerText;
    foulA--;
    document.getElementById('foul-teamA').innerText = foulA;
}


// BUTTONS FOR TEAM B
function add1pointB() {
  scoreTeamB += 1;
  document.getElementById('score-b').innerText = scoreTeamB;
}
function add2pointsB() {
  scoreTeamB += 2;
  document.getElementById('score-b').innerText = scoreTeamB;
}
function add3pointsB() {
  scoreTeamB += 3;
  document.getElementById('score-b').innerText = scoreTeamB;
}
function minusPointB() {
  scoreTeamB -= 1;
  document.getElementById('score-b').innerText = scoreTeamB;
}
function addFoulB(){
    let foulB = document.getElementById('foul-teamB').innerText;
    foulB++;
    document.getElementById('foul-teamB').innerText = foulB;
}
function removeFoulB(){
    let foulB = document.getElementById('foul-teamB').innerText;
    foulB--;
    document.getElementById('foul-teamB').innerText = foulB;
}


// OTHER BUTTONS

function addPeriod(){
    let period = document.getElementById('period').innerText;
    period++;
    document.getElementById('period').innerText = period;
}

function resetPeriod(){
    document.getElementById('period').innerText = 1;
}


// SHOT CLOCK BUTTON

let shotClockSeconds = 24;
let displayShotClock = document.getElementById('shotClockTime');
let timer = null;

function shotClock() {
  shotClockSeconds--;
  if (shotClockSeconds === 0) {
    clearInterval(timer);
    buzzer();
  }
  displayShotClock.innerHTML = shotClockSeconds;
}


function startShotClock() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(shotClock, 1000);
}

function resetShotClock() {
  shotClockSeconds = 24;
  displayShotClock.innerText = shotClockSeconds;
}
function resetShotClock14() {
  shotClockSeconds = 14;
  displayShotClock.innerText = shotClockSeconds;
}

function stopShotClock() {
  clearInterval(timer);
}


// TIMER DISPLAY AND FUNCTION

let mainTimer =  document.getElementById('timer');
let [minutes, seconds] = [12, 0];
let time = null;


function startTimer() {
  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }
  else if (minutes < 0) {
    clearInterval(timer);
  }
  mainTimer.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startMainTimer(){ // start the main timer
    if (time !== null) {
        clearInterval(time);
      }
      time = setInterval(startTimer, 1000);
}
function stopMainTimer(){
    clearInterval(time);
}
function resetMainTimer(){
    minutes = 12;
    seconds = 0;
    mainTimer.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// BUZZER AUDIO

let audio = new Audio('./assets/buzzer.mp3');
function buzzer(){
    audio.play();
}

// SOUND 1

let audio1 = new Audio('./assets/sound1.mp3');
function sound1(){
    audio1.play();
}