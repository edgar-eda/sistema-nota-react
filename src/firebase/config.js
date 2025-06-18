// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAt1yvdtjD-Vhrj_Khy6YKhHcZjkAbLfug",
  authDomain: "prestacao-contas.firebaseapp.com",
  projectId: "prestacao-contas",
  storageBucket: "prestacao-contas.firebasestorage.app",
  messagingSenderId: "134885302449",
  appId: "1:134885302449:web:de3afac4545d5d8f2b0290"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
