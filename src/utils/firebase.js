// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAylO9wlHiQZZuYYHlTh5fOplrKbl2sBNg",
  authDomain: "spotify-app-e8e4e.firebaseapp.com",
  projectId: "spotify-app-e8e4e",
  storageBucket: "spotify-app-e8e4e.appspot.com",
  messagingSenderId: "873730564721",
  appId: "1:873730564721:web:e6767e19a8f83cf54371d0",
  measurementId: "G-V1ZJRBNY3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const db = getFirestore()