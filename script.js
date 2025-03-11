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

let shotClockSeconds = 24;

function startShotClock(){
    for (let i = 0; i < 24; i++) {
        setTimeout(function(){
            shotClockSeconds--;
            document.getElementById('shotClockTime').innerText = shotClockSeconds;
        }, 1000);
    }
}
function resetShotClock() {
    shotClockSeconds = 24;
    document.getElementById('shotClockTime').innerText = shotClockSeconds;
}

function startShotClock() {
    resetShotClock();
    let interval = setInterval(function() {
        if (shotClockSeconds > 0) {
            shotClockSeconds--;
            document.getElementById('shotClockTime').innerText = shotClockSeconds;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}
