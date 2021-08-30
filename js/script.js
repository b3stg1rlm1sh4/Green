const scoreDisplay = document.getElementById("score-display");
const timeDisplay = document.getElementById("time-display");
const blocks = [document.getElementById("btn1"), document.getElementById("btn2"), document.getElementById("btn3"), document.getElementById("btn4"), document.getElementById("btn5"), document.getElementById("btn6"), document.getElementById("btn7"), document.getElementById("btn8"), document.getElementById("btn9")]

let green;
let score = 0;
let time = 30;
let startTimer = false;
let gotGreen = false;
gLoc = Math.floor(Math.random() * 9);

const updater = setInterval(() => {
  scoreDisplay.textContent = `Score: ${score}`;
  timeDisplay.textContent = `Time: ${time}`;
  if(time == 0) {
    blocks.forEach(function(item) {
      item.textContent = "X";
      item.style.backgroundColor = "#3df58a";
      item.style.color = "#ffffff";
      item.disabled = true;
    })
    clearInterval(timeUpdate);
    clearInterval(game);
    clearInterval(updater);
  }
}, 5)

function updateBoard(){
  blocks.forEach(function(item) {
    item.textContent = "O";
    item.style.backgroundColor = "#f54d3d";
    item.style.color = "#ffffff";
  })

  green = blocks[gLoc] 
  green.textContent = "X";
  green.style.backgroundColor = "#3df58a";
  green.style.color = "#ffffff";
  green.addEventListener("click", function restart() {
    score++;
    startTimer = true;
    gotGreen = true;
    green.removeEventListener("click", restart);
  })
}

updateBoard()

const timeUpdate = setInterval(() => {
  if(startTimer) {
    time--;
  }
}, 1000);

const game = setInterval(() => {
  if(gotGreen) {
    gLoc = Math.floor(Math.random() * 9) + 1;
    console.log(gLoc);
    updateBoard()

    gotGreen = false;
  }
}, 5 )