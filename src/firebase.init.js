// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd0cbIx184PeQWNu4SqShe8W6WbB4h3hw",
  authDomain: "assignment11-car.firebaseapp.com",
  projectId: "assignment11-car",
  storageBucket: "assignment11-car.appspot.com",
  messagingSenderId: "897947647403",
  appId: "1:897947647403:web:62e669ddbc2b056748e6ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;