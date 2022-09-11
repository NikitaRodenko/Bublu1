const btn = document.querySelector(".btn");

let container = document.createElement("div");
container.classList.add("container");

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function removeBuble(e) {
  e.target.remove();
}

let width = 50;
let height = 50;

function createBuble() {
  let buble = document.createElement("p");
  buble.classList.add("buble");
  buble.style.backgroundColor = `rgba(${randomNumber(0, 256)},${randomNumber(
    0,
    256
  )},${randomNumber(0, 256)})`;
  buble.style.width = `${width}px`;
  buble.style.height = `${height}px`;
  buble.style.top = `${randomNumber(
    10,
    container.clientHeight - (height + 10)
  )}px`;
  buble.style.left = `${randomNumber(
    10,
    container.clientWidth - (width + 10)
  )}px`;

  container.append(buble);
  buble.addEventListener("click", removeBuble);
}

btn.addEventListener("click", (e) => {
  btn.insertAdjacentElement("afterend", container);
  let span = document.querySelector("span");
  span.innerText = "Draw";
  span.style.width = "80px";
  span.style.animation = "scroll 2s infinite linear";
  btn.addEventListener("click", (e) => {
    for (let i = 1; i < 101; i++) {
      createBuble();
    }
  });
});
