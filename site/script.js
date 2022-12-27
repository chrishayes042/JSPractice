let element = document.querySelector("div1");
const unTextField = document.getElementById("userNameText");
const loginButton = document.querySelector("#login");

// console.log(nameText);

function logName() {
  let nameText = document.querySelector("#userNameText").value;
  console.log(errorCheck(nameText));
  if (errorCheck(nameText) == true) {
    unTextField.style = "userNameText";
    console.log(nameText);
  }
}
function errorCheck(name) {
  if (name.length == 0) {
    document.getElementById("error").innerHTML = "Please input a user name";
    unTextField.style.border = "2px solid red";

    return false;
  } else {
    return true;
  }
}

// function load() {
//   loginButton.onClick = logName;
// }
