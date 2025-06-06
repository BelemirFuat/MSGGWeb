import { auth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login");
const registerBtn = document.getElementById("register");
const logoutBtn = document.getElementById("logout");
const userInfo = document.getElementById("user-info");
const userEmail = document.getElementById("user-email");

loginBtn.onclick = () => {
  signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then(() => alert("Logged in"))
    .catch(err => alert(err.message));
};

registerBtn.onclick = () => {
  createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then(() => alert("Registered"))
    .catch(err => alert(err.message));
};

logoutBtn.onclick = () => {
  signOut(auth);
};

onAuthStateChanged(auth, user => {
  if (user) {
    userInfo.style.display = "block";
    userEmail.innerText = `Logged in as: ${user.email}`;
  } else {
    userInfo.style.display = "none";
    userEmail.innerText = "";
  }
});
