// import { initializeApp, getApp, getApps } from "firebase/app"
// import { getFirestore, collection, addDoc } from "firebase/firestore/lite";

// function SignIn() {
//     const firebaseConfig = {
//         apiKey: "AIzaSyAsNJ5F2QlqcRgMjTOmPFVV63bTiAranBQ",
//         authDomain: "insta-nextjs-c4a68.firebaseapp.com",
//         projectId: "insta-nextjs-c4a68",
//         storageBucket: "insta-nextjs-c4a68.appspot.com",
//         messagingSenderId: "245562263756",
//         appId: "1:245562263756:web:15dae236c5fce1b5079a69",
//         measurementId: "G-LFH3JE9SXL"
//     };
//     // const app = initializeApp(firebaseConfig)
//     const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
//     console.log(app)
//     const db = getFirestore()

//     const addData = async () => {
//         try {
//             const docRef = await addDoc(collection(db, "users"), {
//                 first: "Ada",
//                 last: "Lovelace",
//                 born: 1815
//             });
//             console.log("Document written with ID: ", docRef.id);
//         } catch (e) {
//             console.error("Error adding document: ", e);
//         }
//     }


//     return (
//         <div>
//             <button onClick={addData}>Add Data</button>
//         </div>
//     )
// }

// export default SignIn
