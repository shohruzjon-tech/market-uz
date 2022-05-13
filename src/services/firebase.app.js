// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { enableIndexedDbPersistence } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5tVdlL0K0u7wQP3Tbe1bg4WcfkIsjoFk",
  authDomain: "uzstore.firebaseapp.com",
  databaseURL: "https://uzstore-default-rtdb.firebaseio.com",
  projectId: "uzstore",
  storageBucket: "uzstore.appspot.com",
  messagingSenderId: "519153610191",
  appId: "1:519153610191:web:b8195300ed3f596741f6ba",
  measurementId: "G-MNDT2KXZ7B"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// enableIndexedDbPersistence(db)
// .catch((err) => {
//   if (err.code == 'failed-precondition') {
//     console.log('one browser')
//   } else if (err.code == 'unimplemented') {
//     console.log('one browser doesnto support')
//   }
// });

// Initialize Firebase
export const storage = getStorage(app);
export const auth = getAuth(app);

auth.languageCode = 'uz';

