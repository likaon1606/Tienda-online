import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDXMEKm1xrkBppoplGAYyXS2LKBP7k3Pmc",
  authDomain: "maltimart-c10ed.firebaseapp.com",
  projectId: "maltimart-c10ed",
  storageBucket: "maltimart-c10ed.appspot.com",
  messagingSenderId: "915105249338",
  appId: "1:915105249338:web:4d92a76ccc65f5bc0a5d03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
