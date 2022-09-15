// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp} from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdblvF9ulxArOAFICv2xHLdB0GfpUl8Tc",
  authDomain: "vripgram.firebaseapp.com",
  projectId: "vripgram",
  storageBucket: "vripgram.appspot.com",
  messagingSenderId: "168276553556",
  appId: "1:168276553556:web:548044846577874d2ee2c1",
  measurementId: "G-55783GCT82"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage}