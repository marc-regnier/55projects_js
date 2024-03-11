const message = document.querySelector("#output");
const btn = document.querySelector("button");
const date = new Date();
let hourCurrent = date.getHours();

btn.addEventListener("click", () => {
  message.style.height = "50px";
  message.style.width = "100px";
  message.style.textAlign = "center";
  message.style.color = "white";
  if (hourCurrent > 17) {
    message.innerHTML = "It's Evening";
    message.style.backgroundColor = "orange";
  } else if (hourCurrent > 13) {
    message.innerHTML = "It's Afternoon";
    message.style.backgroundColor = "blue";
  } else if (hourCurrent > 11) {
    message.innerHTML = "It's Noon";
    message.style.backgroundColor = "red";
  } else if (hourCurrent > 4) {
    message.innerHTML = "It's Morning";
    message.style.backgroundColor = "green";
  } else {
    message.innerHTML = "It's Night";
    message.style.backgroundColor = "black";
  }
});
