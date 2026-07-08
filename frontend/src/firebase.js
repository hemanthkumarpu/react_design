// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_M8RT3xQ_Ym-JO6H6Ffe4aKeDyi1IA7U",
  authDomain: "gnanacomputech-2e7b2.firebaseapp.com",
  projectId: "gnanacomputech-2e7b2",
  storageBucket: "gnanacomputech-2e7b2.firebasestorage.app",
  messagingSenderId: "446131024438",
  appId: "1:446131024438:web:4cc48ef39f04a158cade97",
  measurementId: "G-PGKVNMYVEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);