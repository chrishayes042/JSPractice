const unTextField = document.querySelector("#userNameText");
const unPassField = document.querySelector("#Password");
const errorMsg = document.querySelector("#error");
const loginButton = document.querySelector("#login");
const testUser = "test";
const testPass = "test";
// console.log(nameText);
// Console logs the name inside the textfield
function logName() {
  // Get value from the text box
  let nameText = document.querySelector("#userNameText").value;
  let pass = document.querySelector("#Password").value;
  // check for errors, uses a ternary operator
  errorCheck(nameText, pass)
    ? (clearErrors(), clearTextFields(), (window.location = "./page2.html"))
    : console.log("Error");
}
// checks the length of the parameter
function errorCheck(name, pass) {
  if (name.length == 0) {
    clearErrors();
    errorMsg.innerHTML = "Please input a user name";
    unTextField.style.border = "2px solid red";
    return false;
  } else if (pass.length == 0) {
    clearErrors();
    errorMsg.innerHTML = "Please input a password";
    unPassField.style.border = "2px solid red";
    return false;
  } else if (name == testUser && pass == testPass) {
    return true;
  } else {
    clearErrors();
    errorMsg.innerHTML = "No user by that name";
    unTextField.style.border = "2px solid red";
    return false;
  }
}
// func to clear the errors and set the css back to original
function clearErrors() {
  errorMsg.innerHTML = "";
  unTextField.style = "userNameText";
  unPassField.style = "Password";
}

function clearTextFields() {
  unTextField.value = "";
  unPassField.value = "";
}
