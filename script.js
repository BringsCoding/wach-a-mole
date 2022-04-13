const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const body = document.body;

let result = 0;
let CurrentTime = 10;
let HitPositon;
let TimerId = null;

function randomSquare() {
  squares.forEach((squarePosition) => {
    squarePosition.classList.remove("mole");
  });

  let RandomPosition = squares[Math.floor(Math.random() * 9)];
  RandomPosition.classList.add("mole");

  HitPositon = RandomPosition.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === HitPositon) {
      result++;
      score.textContent = result;
      HitPositon = null;
    } else {
      console.log("nicht getroffen");
    }
  });
});

function moveMole() {
  TimerId = setInterval(randomSquare, 1000);
}
moveMole();

function countDonw() {
  CurrentTime--;
  timeLeft.textContent = CurrentTime;

  if (CurrentTime === 0) {
    clearInterval(countDonwTimeId);
    clearInterval(TimerId);

    alert("Spiel ist vorbei " + result);
  }
}

let countDonwTimeId = setInterval(countDonw, 1000);
