import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_SOME_KEY_API_KEY,
  authDomain: "tiktok-backend-18323.firebaseapp.com",
  projectId: "tiktok-backend-18323",
  storageBucket: "tiktok-backend-18323.appspot.com",
  messagingSenderId: import.meta.env.VITE_SOME_KEY_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_SOME_KEY_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
