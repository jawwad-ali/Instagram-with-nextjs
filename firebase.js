// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
import { getStorage } from "firebase/storage"
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyAsNJ5F2QlqcRgMjTOmPFVV63bTiAranBQ",
    authDomain: "insta-nextjs-c4a68.firebaseapp.com",
    projectId: "insta-nextjs-c4a68",
    storageBucket: "insta-nextjs-c4a68.appspot.com",
    messagingSenderId: "245562263756",
    appId: "1:245562263756:web:15dae236c5fce1b5079a69",
    measurementId: "G-LFH3JE9SXL"
};

// const app = initializeApp(firebaseConfig)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }