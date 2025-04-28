// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuGzSmArGCrdXMy5Uzu8-XG2EW0SJ564U",
  authDomain: "auth-integration-f1455.firebaseapp.com",
  projectId: "auth-integration-f1455",
  storageBucket: "auth-integration-f1455.firebasestorage.app",
  messagingSenderId: "1031500500180",
  appId: "1:1031500500180:web:b2ef1b22a37eeb8ca87f41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)