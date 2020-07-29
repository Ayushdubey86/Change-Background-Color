const colorBtn = document.querySelector(".colorbtn");
const bodyBcg = document.querySelector("body");
const colors = ["yellow", "red", "green"];
colorBtn.addEventListener("click", changeColor);
function changeColor() {
  //bodyBcg.style.backgroundColor = colors[2];
  // bodyBcg.style.backgroundColor = "blue";
  let random = Math.floor(Math.random() * colors.length);
  bodyBcg.style.backgroundColor = colors[random];
}
