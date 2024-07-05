import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDRPiWsj1E3UFpKioazwvROQf7DkZBsQdg",
  authDomain: "multimart-abfff.firebaseapp.com",
  projectId: "multimart-abfff",
  storageBucket: "multimart-abfff.appspot.com",
  messagingSenderId: "1000307534354",
  appId: "1:1000307534354:web:3d65aa52a3a477ffe206cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)


export default app