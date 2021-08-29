const gameTitle = document.getElementById("main-container-title");
const blocks = [document.getElementById("btn1"), document.getElementById("btn2"), document.getElementById("btn3"), document.getElementById("btn4"), document.getElementById("btn5"), document.getElementById("btn6"), document.getElementById("btn7"), document.getElementById("btn8"), document.getElementById("btn9")]

let green;
let score = 0;
let gotGreen = false;
gLoc = Math.floor(Math.random() * 9);

const updater = setInterval(() => {
  gameTitle.textContent = `Score: ${score}`;
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
    gotGreen = true;
    green.removeEventListener("click", restart);
  })
}

updateBoard()

const game = setInterval(() => {
  if(gotGreen) {
    gLoc = Math.floor(Math.random() * 9) + 1;
    console.log(gLoc);
    updateBoard()

    gotGreen = false;
  }
}, 5 )