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

