//password show and hide
var eyeIcon = document.querySelector("#togglePassword");
var eyeSlash = document.querySelector("#eye-slash-id");
var password = document.querySelector("#signin-password");

console.log(eyeIcon, eyeSlash, password);

eyeSlash.classList.add("hide-icon");
eyeIcon.classList.add("hide-icon");

password.addEventListener("click", function () {
  eyeIcon.classList.remove("hide-icon");
});

eyeIcon.addEventListener("click", function () {
  let type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  eyeSlash.classList.toggle("hide-icon");
  eyeIcon.classList.toggle("hide-icon");
});

eyeSlash.addEventListener("click", function () {
  let type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  eyeSlash.classList.toggle("hide-icon");
  eyeIcon.classList.toggle("hide-icon");
});



// sign up form validation 
