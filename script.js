console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let turnaudio = new Audio("ting.mp3");
let gameoveraudio = new Audio("gameover.mp3");
let turn = "X";
let gameover = false;

// Function to change turn .
const changeturn = () => {
  return turn === "X" ? "0" : "X";
}

// Function for check win.
const checkwin = () => {

  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  wins.forEach(e => {
    if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')) {
      document.getElementsByClassName("Info")[0].innerText = boxtext[e[0]].innerText + " Won";
      gameover = true;
      gameoveraudio.play();
      document.getElementsByClassName("imggif")[0].style.width="100px";
    }
  })
}


// Game logic.
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector('.textbox');
  element.addEventListener('click', () => {
    if (boxtext.innerText === '') {
      boxtext.innerText = turn;
      turn = changeturn();
      turnaudio.play();
      checkwin();
      if (gameover != true)
        document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn;
    }

  })

})

let boxtext = document.getElementsByClassName("textbox");
const rebutton = document.getElementById("reset");
rebutton.addEventListener('click', () => {
  Array.from(boxes).forEach((e) => e.querySelector('.textbox').innerText = '');
  document.getElementsByClassName("imggif")[0].style.width="0px";
   turn= "X";
   gameover = false; 
  document.getElementsByClassName("Info")[0].innerText = "Turn for X"

  
})



