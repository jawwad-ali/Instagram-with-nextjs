import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBuIzVIOmv1vv8AZZ0PqRHoPsW0aXOn04A",
    authDomain: "instagram-nextjs-acf79.firebaseapp.com",
    projectId: "instagram-nextjs-acf79",
    storageBucket: "instagram-nextjs-acf79.appspot.com",
    messagingSenderId: "893349008254",
    appId: "1:893349008254:web:9533762dcb6ce2a264992f",
    measurementId: "G-2C1DKJDC1Y"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }