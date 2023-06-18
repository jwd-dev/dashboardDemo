// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const apiKey = process.env.NEXT_PUBLIC_FB_API_KEY;
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "deeptruth-fb46f.firebaseapp.com",
  projectId: "deeptruth-fb46f",
  storageBucket: "deeptruth-fb46f.appspot.com",
  messagingSenderId: "834353208959",
  appId: "1:834353208959:web:2ac7ea335735d45d7de94a",
  measurementId: "G-DF97NW37QL",
};

// Initialize Firebase
console.log("Initializing firebase...");
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
