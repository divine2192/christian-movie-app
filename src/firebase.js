import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration (use your actual Firebase config)
const firebaseConfig = {
  apiKey: "AIzaSyCIv3fUFmwQRgFUECR41dT7tEtyUrMcER8",
  authDomain: "zionmovies-61b00.firebaseapp.com",
  projectId: "zionmovies-61b00",
  storageBucket: "zionmovies-61b00.appspot.com", // ✅ Fixed the storage bucket URL
  messagingSenderId: "464329576342",
  appId: "1:464329576342:web:31f16e2ccc92d7a118d7b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// ✅ Export both `auth` and `db`
export { db };

// Named exports for authentication functions
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = () => signOut(auth);
