import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB5Z2iYGFxQNDpl9v2YWtHTeJz8t0n7Ivk",
  authDomain: "projetofinal-b3524.firebaseapp.com",
  projectId: "projetofinal-b3524",
  storageBucket: "projetofinal-b3524.appspot.com",
  messagingSenderId: "586271811751",
  appId: "1:586271811751:web:2191011e1eb313180bd382"
};


const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}