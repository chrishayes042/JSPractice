const unTextField = document.getElementById("userNameText");
const unPassField = document.getElementById("Password");
const errorMsg = document.getElementById("error");
const loginButton = document.getElementById("login");
const testUser = "test";
const testPass = "test";

loginButton.addEventListener("click", function logName(event) {
  let nameText = unTextField.value;
  let pass = unPassField.value;

  // check for errors, uses a ternary operator
  errorCheck(nameText, pass)
    ? (clearErrors(),
      clearTextFields(),
      (window.location.href = "./page2.html"))
    : console.log("Error");
});

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
