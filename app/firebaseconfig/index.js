// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//getAuth for authentication, getFirestore for database, getStorage to store any uploaded file/image
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfqPdM54aBRjZzECKmTeqAcSERXFEqlr8",
  authDomain: "authenticator-85102.firebaseapp.com",
  projectId: "authenticator-85102",
  storageBucket: "authenticator-85102.appspot.com",
  messagingSenderId: "594122394192",
  appId: "1:594122394192:web:ea4a9089445b11a5215f55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db = getFirestore(app)