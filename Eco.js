const myform = document.querySelector(".Email-container");
const standby = document.querySelector(".prompt");
const emailInput = document.querySelector("#email");
const nameInput = document.querySelector("#Name");
const msg = document.querySelector("#Msg");
const butt = document.querySelector(".email-button");

butt.addEventListener("click", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (emailInput.value === "" || nameInput.value === "" || msg.value === "") {
    standby.style.color = "red";
    standby.innerHTML = "please enter all fields";

    setTimeout(() => standby.remove(), 2000);
  } else {
    alert("successful");
  }
}
