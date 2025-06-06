import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDnrvuFKg7bn4RSMqplFn_8IAkWEQpXMVg",
    authDomain: "msgg-40721.firebaseapp.com",
    projectId: "msgg-40721",
    storageBucket: "msgg-40721.firebasestorage.app",
    messagingSenderId: "507020321863",
    appId: "1:507020321863:web:d3e194c51630ac04017d62"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
