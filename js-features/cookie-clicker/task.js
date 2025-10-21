const cookieElem = document.querySelector("#cookie");
const scoreElem = document.querySelector("#clicker__counter");

let score = 0;
let isShrinkingNext = true;

function updateScoreDisplay() {
  scoreElem.textContent = String(score);
}

cookieElem.addEventListener("click", () => {
  score += 1;
  updateScoreDisplay();

  let width =
    parseInt(cookieElem.getAttribute("width"), 10) || cookieElem.clientWidth;
  let height =
    parseInt(cookieElem.getAttribute("height"), 10) || cookieElem.clientHeight;

  if (isShrinkingNext) {
    width = Math.max(1, Math.floor(width * 0.9));
    height = Math.max(1, Math.floor(height * 0.9));
  } else {
    width = Math.floor(width * 1.1);
    height = Math.floor(height * 1.1);
  }

  cookieElem.setAttribute("width", String(width));
  cookieElem.setAttribute("height", String(height));

  isShrinkingNext = !isShrinkingNext;
});
