// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6TeFAJ5y1Cxxq88DmAFDpVDxeoF_9Loc",
  authDomain: "insta-new-c9c3a.firebaseapp.com",
  projectId: "insta-new-c9c3a",
  storageBucket: "insta-new-c9c3a.appspot.com",
  messagingSenderId: "205100518323",
  appId: "1:205100518323:web:22bfb52009e26c8612d9c6",
};

// Initialize Firebase
const app = getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

//treeshaking -> rather using entire dependency use a module for light weight
