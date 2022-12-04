const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// const loginInput = document.querySelector("#login-form input"):
// const loginButton = document.querySelector("#login-form button"):

// const link = document.querySelector("a");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    // console.log(loginInput.value);

    // const username = loginInput.value;
    // if (username === "") {
    //     alert("Please write your name");
    // } else if (username.lengty > 15) {
    //     alert("Your name is too long.");
    // } 
    // console.log(username);

    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = "Hello " + username;
    paintGreetings(username);
}
// function handleLinkClick(event) {
//     event.preventDefault();
// }

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    // link.addEventListener("click", handleLinkClick);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}