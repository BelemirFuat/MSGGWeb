import { auth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  getFirestore,
  setDoc,
  doc,
  getDocs,
  collection
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Initialize Firestore
const db = getFirestore();

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login");
const registerBtn = document.getElementById("register");
const logoutBtn = document.getElementById("logout");
const userInfo = document.getElementById("user-info");
const userEmail = document.getElementById("user-email");
const contactsList = document.getElementById("contacts-list");

// Login functionality
loginBtn.onclick = () => {
  signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then(() => alert("Logged in"))
    .catch((err) => alert(err.message));
};

// Register functionality
registerBtn.onclick = () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCred) => {
      const uid = userCred.user.uid;
      const email = userCred.user.email;

      // Save user to Firestore
      return setDoc(doc(db, "users", uid), {
        uid,
        email,
        createdAt: Date.now(),
      });
    })
    .then(() => {
      alert("Registered and added to Firestore!");
    })
    .catch((err) => {
      alert(err.message);
    });
};

// Logout functionality
logoutBtn.onclick = () => {
  signOut(auth)
    .then(() => {
      alert("Logged out successfully!");
    })
    .catch((err) => {
      alert(err.message);
    });
};

// Handle authentication state changes
// Handle authentication state changes
onAuthStateChanged(auth, async (user) => {
  if (user) {
    try {
      const uid = user.uid;

      // Generate and upload the key pair if not already done
      const userDoc = await getDoc(doc(db, "users", uid));
      if (!userDoc.exists() || !userDoc.data().publicKey) {
        await generateAndUploadKeyPair(uid);
      }

      userInfo.style.display = "block";
      userEmail.innerText = `Logged in as: ${user.email}`;

      // Load all users except the current one
      const querySnapshot = await getDocs(collection(db, "users"));
      contactsList.innerHTML = ""; // Clear previous list

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.uid !== user.uid) {
          const li = document.createElement("li");
          li.innerText = data.email;
          contactsList.appendChild(li);
        }
      });

      if (contactsList.innerHTML === "") {
        const li = document.createElement("li");
        li.innerText = "No contacts available.";
        contactsList.appendChild(li);
      }
    } catch (error) {
      console.error("Error loading contacts:", error);
      alert("Failed to load contacts. Please try again later.");
    }
  } else {
    userInfo.style.display = "none";
    userEmail.innerText = "";
    contactsList.innerHTML = "";
  }
});