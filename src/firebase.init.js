// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqjFMm-mnV973t-SHnBoMgGp7IAu92gNU",
    authDomain: "solve-it-aecd5.firebaseapp.com",
    projectId: "solve-it-aecd5",
    storageBucket: "solve-it-aecd5.appspot.com",
    messagingSenderId: "790907846786",
    appId: "1:790907846786:web:642ba4308d8a935f48349b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;