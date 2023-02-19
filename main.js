

var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userPass = document.getElementById("userPass");
var errorMess = document.getElementById("errorMess");

var users = [];
if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function signUpBtn() {
  test = 0;
  if (
    !userName.value == "" &&
    !userEmail.value == "" &&
    !userPass.value == ""
  ) {
    errorMess.innerHTML = "";
    for (var i = 0; i < users.length; i++) {
      if (userEmail.value == users[i].email) {
        test++;
      } else {
        continue;
      }
    }
    if (test == 1) {
      errorMess.innerHTML = `
            <p class="text-danger w-100">email already exist</p>
            `;
    } else {
      objUser = {
        name: userName.value,
        email: userEmail.value,
        password: userPass.value,
      };
      users.push(objUser);
      localStorage.setItem("users", JSON.stringify(users));
      errorMess.innerHTML = `
            <p class="text-success w-100">Success</p>
            `;
    }
  } else {
    errorMess.innerHTML = `
        <p class="text-danger w-100">All inputs is required</p>
        `;
  }
}
function logInBtn() {
  if (!userEmail.value == "" && !userPass.value == "") {
    errorMess.innerHTML = "";
    for (var i = 0; i < users.length; i++) {
      if (
        userEmail.value == users[i].email &&
        userPass.value == users[i].password
      ) {
        errorMess.innerHTML="";
        localStorage.setItem("userInfo", JSON.stringify(users[i]));
        location.assign("./welcome.html");
        break;
      } else {
        errorMess.innerHTML = `
                <p class="text-danger w-100">password and email are incorrect</p>
                `;
      }
    }
  } else {
    alert("wrong wrong");
    errorMess.innerHTML = `
        <p class="text-danger w-100">All inputs is required</p>
        `;
  }
}

if (
  window.location.href.split("/")[window.location.href.split("/").length - 1] ==
  "welcome.html"
) {
  var welcomeMess = document.getElementById("welcomeMess");
  var userInfo = JSON.parse(localStorage.getItem("userInfo"));
  welcomeMess.innerHTML = `welcome ${userInfo.name}`;
}
