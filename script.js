let submit = document.getElementById("submit");
let clear = document.getElementById("clear");
let displayMessage = document.getElementById("msg");
let takeInput = document.getElementById("msg-input");

submit.addEventListener("click", () => {
  let data = takeInput.value;
  displayMessage.innerHTML = data;
});
clear.addEventListener("click", () => {
  takeInput.value = "";
  displayMessage.innerHTML = "";
});
takeInput.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    let data = takeInput.value;
    displayMessage.innerHTML = data;
  }
});
