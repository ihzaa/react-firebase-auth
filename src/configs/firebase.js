// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkE4w6U_UVk99VjHUOpFn2r3x2bMwME0E",
  authDomain: "react-auth-2faec.firebaseapp.com",
  projectId: "react-auth-2faec",
  storageBucket: "react-auth-2faec.appspot.com",
  messagingSenderId: "984189447881",
  appId: "1:984189447881:web:8f2b66fd9ce220927a6718"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);