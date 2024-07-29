// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-SF2IgKzuxglj_ZumX8S_mCOnCrdNrU4",
  authDomain: "rentalwebsite-93ab0.firebaseapp.com",
  projectId: "rentalwebsite-93ab0",
  storageBucket: "rentalwebsite-93ab0.appspot.com",
  messagingSenderId: "17687434205",
  appId: "1:17687434205:web:972eb33342b1adef1adc34",
  measurementId: "G-TZL2MWL3PQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);