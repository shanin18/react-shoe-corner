// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJMhZCi2nkeyXdPJdUM6Bl_KF77alJFpI",
  authDomain: "react-shoe-hub-firebase.firebaseapp.com",
  projectId: "react-shoe-hub-firebase",
  storageBucket: "react-shoe-hub-firebase.appspot.com",
  messagingSenderId: "1088971440312",
  appId: "1:1088971440312:web:7b270b0841441a92a3f44d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;