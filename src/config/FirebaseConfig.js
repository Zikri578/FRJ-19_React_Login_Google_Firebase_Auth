// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDgpJq-V6HrqgmhKPInqLhWjRHAyWbZrQ",
    authDomain: "login-5901c.firebaseapp.com",
    projectId: "login-5901c",
    storageBucket: "login-5901c.appspot.com",
    messagingSenderId: "805967273319",
    appId: "1:805967273319:web:0a056b996da22c4af223c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// mendapatkan firebase dan authentication
export const firestore = getFirestore(app)
export const auth = getAuth(app);
