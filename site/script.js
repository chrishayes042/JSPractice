let element = document.querySelector("div1");
const unTextField = document.querySelector("#userNameText");
const errorMsg = document.querySelector("#error");
const loginButton = document.querySelector("#login");

// console.log(nameText);
// Console logs the name inside the textfield
function logName() {
  // Get value from the text box
  let nameText = document.querySelector("#userNameText").value;
  // check for errors, uses a ternary operator
  errorCheck(nameText)
    ? (clearErrors(), console.log(nameText))
    : console.log("Error");
}
// checks the length of the parameter
function errorCheck(name) {
  if (name.length == 0) {
    errorMsg.innerHTML = "Please input a user name";
    unTextField.style.border = "2px solid red";
    return false;
  } else {
    return true;
  }
}
// func to clear the errors and set the css back to original
function clearErrors() {
  errorMsg.innerHTML = "";
  unTextField.style = "userNameText";
}

// function load() {
//   loginButton.onClick = logName;
// }
