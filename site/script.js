let element = document.querySelector("div1");
const unTextField = document.getElementById("userNameText");
const loginButton = document.querySelector("#login");

// console.log(nameText);
// Console logs the name inside the textfield
function logName() {
  let nameText = document.querySelector("#userNameText").value;
  // check for errors
  if (errorCheck(nameText) == true) {
    // resets the css for the textfield
    unTextField.style = "userNameText";

    console.log(nameText);
  }
}
// checks the length of the parameter
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
